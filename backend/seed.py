"""
Seed Script for The Code Vibe Supabase Database.
Run this script with:
    python seed.py
It reads credentials from .env and populates the Supabase tables.
"""

import sys
from config import settings
from database import get_supabase, INITIAL_PROJECTS, INITIAL_APPLICATIONS, INITIAL_EVENTS

def run_seed():
    print("=" * 60)
    print("Code Vibes - Supabase Database Seeder")
    print("=" * 60)

    if not settings.is_supabase_configured:
        print("❌ Error: SUPABASE_URL and SUPABASE_KEY are not properly configured in backend/.env")
        print("Please update backend/.env with your Supabase credentials first.")
        sys.exit(1)

    supabase = get_supabase()
    if not supabase:
        print("❌ Could not connect to Supabase. Check your URL and Key.")
        sys.exit(1)

    print(f" Connected to Supabase at: {settings.SUPABASE_URL}")
    print("Note: Ensure you have executed backend/supabase_schema.sql in the Supabase SQL Editor first.")

    # 1. Seed Projects
    print("\n📦 Seeding Projects...")
    for project in INITIAL_PROJECTS:
        try:
            supabase.table("projects").upsert(project).execute()
            print(f"  ✓ Seeded project: {project['title']}")
        except Exception as e:
            print(f"  ⚠ Failed to seed {project['id']}: {e}")

    # 2. Seed Applications
    print("\n📋 Seeding Contributor Applications...")
    for app in INITIAL_APPLICATIONS:
        try:
            supabase.table("applications").upsert(app).execute()
            print(f"  ✓ Seeded application: {app['id']} ({app['name']})")
        except Exception as e:
            print(f"  ⚠ Failed to seed {app['id']}: {e}")

    # 3. Seed Events
    print("\n📅 Seeding Events...")
    for ev in INITIAL_EVENTS:
        try:
            supabase.table("events").upsert(ev).execute()
            print(f"  ✓ Seeded event: {ev['title']}")
        except Exception as e:
            print(f"  ⚠ Failed to seed {ev['id']}: {e}")

    print("\n Seeding finished successfully!")

if __name__ == "__main__":
    run_seed()
