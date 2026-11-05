from fastapi import APIRouter, HTTPException, Depends
from typing import Optional
import uuid
import base64

from models import LoginRequest, RegisterRequest, UserResponse, UserProfileUpdate
from database import get_supabase, memory_users

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

@router.post("/login")
async def login(payload: LoginRequest):
    email = payload.email.strip().lower()
    password = payload.password.strip()
    requested_role = payload.role.strip().lower() if payload.role else "member"

    # 1. Check Supabase Auth if configured
    supabase = get_supabase()
    if supabase:
        try:
            res = supabase.auth.sign_in_with_password({
                "email": email,
                "password": password
            })
            if res.user:
                # determine role from metadata or email
                user_role = res.user.user_metadata.get("role", "admin" if "admin" in email else "member")
                return {
                    "status": "success",
                    "user": {
                        "id": res.user.id,
                        "email": res.user.email,
                        "name": res.user.user_metadata.get("name", email.split("@")[0]),
                        "role": user_role,
                        "whatsapp": res.user.user_metadata.get("whatsapp", ""),
                        "avatar": res.user.user_metadata.get("avatar", "")
                    },
                    "token": res.session.access_token if res.session else f"vibe_token_{uuid.uuid4().hex[:12]}"
                }
        except Exception:
            pass

    # 2. Local / In-memory user verification
    for u in memory_users:
        if u["email"].lower() == email:
            if u["password"] == password:
                # if trying admin login, verify role
                if requested_role == "admin" and u["role"] != "admin":
                    raise HTTPException(status_code=403, detail="Access denied: Account does not possess Systems Operator (Admin) privileges.")
                
                return {
                    "status": "success",
                    "user": {
                        "id": u["id"],
                        "email": u["email"],
                        "name": u["name"],
                        "role": u["role"],
                        "whatsapp": u.get("whatsapp", ""),
                        "avatar": u.get("avatar", "")
                    },
                    "token": f"vibe_jwt_{uuid.uuid4().hex[:16]}"
                }
            else:
                raise HTTPException(status_code=401, detail="Invalid credentials. Please verify your password.")

    # 3. Default Admin back-door / quick provision for demo
    if requested_role == "admin":
        if email in ["admin@thecodevibe.io", "admin@vibe.io"] and password in ["admin123", "admin"]:
            admin_user = {
                "id": "usr-admin-demo",
                "email": email,
                "name": "Root Systems Operator",
                "role": "admin",
                "whatsapp": "+1 (555) 019-9922",
                "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            }
            return {
                "status": "success",
                "user": admin_user,
                "token": f"vibe_admin_token_{uuid.uuid4().hex[:12]}"
            }
        raise HTTPException(status_code=401, detail="Invalid admin credentials. Use admin@thecodevibe.io / admin123")

    # 4. If standard member doesn't exist, create on-the-fly for smooth onboarding
    new_user = {
        "id": f"usr-{uuid.uuid4().hex[:8]}",
        "email": email,
        "password": password,
        "name": email.split("@")[0].capitalize(),
        "role": "member",
        "whatsapp": "",
        "avatar": ""
    }
    memory_users.append(new_user)
    return {
        "status": "success",
        "user": {
            "id": new_user["id"],
            "email": new_user["email"],
            "name": new_user["name"],
            "role": "member",
            "whatsapp": "",
            "avatar": ""
        },
        "token": f"vibe_member_token_{uuid.uuid4().hex[:12]}"
    }

@router.post("/register")
async def register(payload: RegisterRequest):
    email = payload.email.strip().lower()
    
    for u in memory_users:
        if u["email"].lower() == email:
            raise HTTPException(status_code=400, detail="Account with this email already exists.")

    new_user = {
        "id": f"usr-{uuid.uuid4().hex[:8]}",
        "email": email,
        "password": payload.password.strip(),
        "name": payload.name.strip(),
        "role": payload.role or "member",
        "whatsapp": "",
        "avatar": ""
    }
    memory_users.append(new_user)
    return {
        "status": "success",
        "message": "Account created successfully",
        "user": {
            "id": new_user["id"],
            "email": new_user["email"],
            "name": new_user["name"],
            "role": new_user["role"],
            "whatsapp": "",
            "avatar": ""
        },
        "token": f"vibe_token_{uuid.uuid4().hex[:16]}"
    }

@router.put("/profile")
async def update_profile(payload: UserProfileUpdate):
    email = (payload.email or "").strip().lower()
    
    # 1. Update in memory_users
    target_user = None
    if email:
        for u in memory_users:
            if u["email"].lower() == email:
                target_user = u
                break
    
    if not target_user and memory_users:
        # Fallback to last created or first user
        target_user = memory_users[-1]
        
    if target_user:
        if payload.name is not None and payload.name.strip():
            target_user["name"] = payload.name.strip()
        if payload.whatsapp is not None:
            target_user["whatsapp"] = payload.whatsapp.strip()
        if payload.avatar is not None:
            target_user["avatar"] = payload.avatar.strip()
            
        return {
            "status": "success",
            "message": "Profile updated successfully.",
            "user": {
                "id": target_user["id"],
                "email": target_user["email"],
                "name": target_user["name"],
                "role": target_user["role"],
                "whatsapp": target_user.get("whatsapp", ""),
                "avatar": target_user.get("avatar", ""),
            }
        }
    
    raise HTTPException(status_code=404, detail="User account not found.")

@router.get("/me")
async def get_current_user():
    return {
        "admin_available": True,
        "demo_admin": "admin@thecodevibe.io",
        "demo_member": "builder@thecodevibe.io"
    }
