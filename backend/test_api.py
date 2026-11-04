from routers import projects, applications, events, community
from models import ApplicationCreate, ApplicationStatusUpdate, EventRSVPCreate, CommunityJoinRequest

def run_step(coro):
    try:
        coro.send(None)
    except StopIteration as e:
        return e.value

def run_all_tests():
    print("1. Testing get_projects()...")
    all_projects = run_step(projects.get_projects())
    print(f"[OK] Retrieved {len(all_projects)} projects.")
    assert len(all_projects) >= 5

    print("\n2. Testing get_project('devpulse')...")
    p = run_step(projects.get_project('devpulse'))
    print(f"[OK] Project: {p['title']}")
    assert p['id'] == 'devpulse'

    print("\n3. Testing get_applications()...")
    apps = run_step(applications.get_applications())
    print(f"[OK] Retrieved {len(apps)} applications.")
    assert len(apps) >= 4

    print("\n4. Testing submit_application()...")
    new_app = run_step(applications.submit_application(ApplicationCreate(
        name="Alex Miller",
        handle="@amiller",
        pod="DevPulse Telemetry",
        role="eBPF Systems Engineer",
        commitment="8",
        pitch="Kernel tracing expert."
    )))
    print(f"[OK] Submitted application: {new_app['id']} (status: {new_app['status']})")

    print("\n5. Testing update_application_status()...")
    updated = run_step(applications.update_application_status(new_app['id'], ApplicationStatusUpdate(status="Accepted")))
    print(f"[OK] Status updated to: {updated['status']}")
    assert updated['status'] == "Accepted"

    print("\n6. Testing get_events()...")
    evs = run_step(events.get_events())
    print(f"[OK] Retrieved {len(evs)} events.")
    assert len(evs) >= 4

    print("\n7. Testing rsvp_event()...")
    rsvp_res = run_step(events.rsvp_event("wasm-memory-safety", EventRSVPCreate(
        name="Elena Miller",
        email="elena@example.com",
        role="Rust Core Dev"
    )))
    print(f"[OK] RSVP response: {rsvp_res['status']}")

    print("\n8. Testing join_community()...")
    join_res = run_step(community.join_community(CommunityJoinRequest(
        name="Taylor Swift",
        email="taylor@example.com",
        github="https://github.com/taylorswift",
        interest="Open Source Pods"
    )))
    print(f"[OK] Community response: {join_res['message']}")

    print("\nALL 8 BACKEND CONTROLLER & DATABASE TEST CASES PASSED PERFECTLY!")

if __name__ == "__main__":
    run_all_tests()
