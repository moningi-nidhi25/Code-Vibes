from typing import List, Optional, Any, Dict
from pydantic import BaseModel, Field
from datetime import datetime

# ----------------- PROJECTS -----------------
class ProjectRole(BaseModel):
    title: str
    spots: Optional[str] = "1 Spot"
    commitment: Optional[str] = "5-10 hrs/wk"
    description: Optional[str] = ""

class ProjectBase(BaseModel):
    title: str
    pitch: str
    category: Optional[str] = "Systems Engineering"
    stack: List[str] = []
    repo_url: Optional[str] = ""
    roles_needed: Optional[str] = ""

class ProjectCreate(BaseModel):
    title: str
    pitch: str
    stack: Optional[Any] = None  # Can be list of strings or comma-separated string
    repoUrl: Optional[str] = ""
    roles: Optional[str] = ""
    category: Optional[str] = "Systems Engineering"

class ProjectResponse(BaseModel):
    id: str
    slug: str
    title: str
    subtitle: Optional[str] = ""
    category: str
    stage: Optional[str] = "Active Pod"
    pitch: str
    stack: List[str] = []
    repo_url: Optional[str] = ""
    stars: Optional[int] = 0
    forks: Optional[int] = 0
    contributors_count: Optional[int] = 0
    roles: Optional[List[ProjectRole]] = []
    spec_data: Optional[Dict[str, Any]] = None
    created_at: Optional[str] = None

# ----------------- APPLICATIONS -----------------
class ApplicationCreate(BaseModel):
    project_id: Optional[str] = "DevPulse Telemetry"
    pod: Optional[str] = "DevPulse Telemetry"
    role: str
    name: Optional[str] = "Anonymous Contributor"
    handle: Optional[str] = ""
    email: Optional[str] = ""
    github: Optional[str] = ""
    commitment: Optional[str] = "5-10"
    pitch: Optional[str] = ""

class ApplicationStatusUpdate(BaseModel):
    status: str = Field(..., description="Status e.g. Accepted, Rejected, Under Review, Pending")

class ApplicationResponse(BaseModel):
    id: str
    name: str
    pod: str
    role: str
    time: str
    status: str
    statusColor: Optional[str] = None
    github: Optional[str] = ""
    email: Optional[str] = ""
    commitment: Optional[str] = ""
    pitch: Optional[str] = ""
    created_at: Optional[str] = None

# ----------------- EVENTS -----------------
class EventSpeaker(BaseModel):
    name: str
    role: str
    avatar: Optional[str] = ""

class EventRSVPCreate(BaseModel):
    name: str
    email: str
    role: Optional[str] = "Developer"
    interest: Optional[str] = ""

class EventResponse(BaseModel):
    id: str
    title: str
    date: str
    time: Optional[str] = ""
    category: str
    location: Optional[str] = "Online / Global"
    badge: Optional[str] = "Upcoming"
    badgeColor: Optional[str] = "primary"
    description: str
    image: Optional[str] = ""
    attendees: Optional[int] = 0
    capacity: Optional[int] = 500
    speakers: Optional[List[EventSpeaker]] = []
    agenda: Optional[List[Dict[str, Any]]] = []
    is_past: bool = False

# ----------------- COMMUNITY -----------------
class CommunityJoinRequest(BaseModel):
    name: str
    email: str
    github: Optional[str] = ""
    interest: Optional[str] = "Open Source Pods"

class PlatformStat(BaseModel):
    value: str
    label: str
    color: Optional[str] = "text-primary"

class TelemetryMetric(BaseModel):
    label: str
    value: str
    icon: str
    iconColor: str
