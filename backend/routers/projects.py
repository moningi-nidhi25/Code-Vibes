from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
import uuid
import re
from datetime import datetime, timezone

from models import ProjectResponse, ProjectCreate
from database import get_supabase, memory_projects

router = APIRouter(prefix="/api/projects", tags=["Projects"])

def slugify(text: str) -> str:
    cleaned = re.sub(r'[^a-zA-Z0-9\s-]', '', text).strip().lower()
    return re.sub(r'[\s-]+', '-', cleaned)

@router.get("", response_model=List[dict])
async def get_projects(
    category: Optional[str] = Query(None, description="Filter by category"),
    search: Optional[str] = Query(None, description="Search term in title or description")
):
    cat_str = category if isinstance(category, str) else None
    search_str = search if isinstance(search, str) else None

    supabase = get_supabase()
    if supabase:
        try:
            query = supabase.table("projects").select("*")
            if cat_str and cat_str.lower() != "all":
                query = query.ilike("category", f"%{cat_str}%")
            res = query.execute()
            if res.data and len(res.data) > 0:
                projects = res.data
                if search_str:
                    s = search_str.lower()
                    projects = [p for p in projects if s in p.get("title", "").lower() or s in p.get("pitch", "").lower()]
                return projects
        except Exception:
            pass

    # In-memory fallback
    results = memory_projects
    if cat_str and cat_str.lower() != "all":
        results = [p for p in results if cat_str.lower() in p.get("category", "").lower()]
    if search_str:
        s = search_str.lower()
        results = [p for p in results if s in p.get("title", "").lower() or s in p.get("pitch", "").lower()]
    return results

@router.get("/{slug_or_id}")
async def get_project(slug_or_id: str):
    supabase = get_supabase()
    if supabase:
        try:
            res = supabase.table("projects").select("*").or_(f"id.eq.{slug_or_id},slug.eq.{slug_or_id}").execute()
            if res.data and len(res.data) > 0:
                return res.data[0]
        except Exception:
            pass

    # In-memory lookup
    for p in memory_projects:
        if p["id"].lower() == slug_or_id.lower() or p.get("slug", "").lower() == slug_or_id.lower():
            return p

    raise HTTPException(status_code=404, detail=f"Project '{slug_or_id}' not found")

@router.post("", response_model=dict, status_code=201)
async def create_project(payload: ProjectCreate):
    # Parse stack
    stack = []
    if isinstance(payload.stack, list):
        stack = payload.stack
    elif isinstance(payload.stack, str):
        stack = [item.strip() for item in payload.stack.split(",") if item.strip()]

    # Parse roles
    roles = []
    if payload.roles:
        role_titles = [r.strip() for r in payload.roles.split(",") if r.strip()]
        roles = [{"title": rt, "spots": "1 Spot", "commitment": "5-10 hrs/wk"} for rt in role_titles]

    new_id = str(uuid.uuid4())[:8]
    slug = slugify(payload.title) or f"project-{new_id}"

    project_data = {
        "id": new_id,
        "slug": slug,
        "title": payload.title,
        "subtitle": payload.pitch[:80] + "..." if len(payload.pitch) > 80 else payload.pitch,
        "category": payload.category or "Community Project",
        "stage": "Community Proposal",
        "pitch": payload.pitch,
        "stack": stack,
        "repo_url": payload.repoUrl or "",
        "stars": 0,
        "forks": 0,
        "contributors_count": 1,
        "roles": roles,
        "created_at": datetime.now(timezone.utc).isoformat()
    }

    supabase = get_supabase()
    if supabase:
        try:
            res = supabase.table("projects").insert(project_data).execute()
            if res.data and len(res.data) > 0:
                return res.data[0]
        except Exception as e:
            # Fall back to memory store if insert fails
            pass

    # Save to memory store
    memory_projects.insert(0, project_data)
    return project_data
