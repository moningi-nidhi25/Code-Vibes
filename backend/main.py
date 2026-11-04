import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import get_supabase
from routers import projects, applications, events, community

app = FastAPI(
    title="Code Vibes API",
    description="Python FastAPI & Supabase backend for The Code Vibe platform",
    version="1.0.0"
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS if settings.CORS_ORIGINS else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(projects.router)
app.include_router(applications.router)
app.include_router(events.router)
app.include_router(community.router)

@app.get("/")
async def root():
    return {
        "name": "The Code Vibe API",
        "version": "1.0.0",
        "status": "operational",
        "docs": "/docs",
        "supabase_connected": settings.is_supabase_configured
    }

@app.get("/api/health")
async def health_check():
    supabase_ready = False
    supabase = get_supabase()
    if supabase:
        try:
            # Quick query to test connection
            res = supabase.table("projects").select("id", count="exact").limit(1).execute()
            supabase_ready = True
        except Exception:
            supabase_ready = False

    return {
        "status": "healthy",
        "environment": settings.ENVIRONMENT,
        "supabase": {
            "configured": settings.is_supabase_configured,
            "connected": supabase_ready,
            "mode": "supabase_cloud" if settings.is_supabase_configured else "in_memory_fallback"
        }
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=True)
