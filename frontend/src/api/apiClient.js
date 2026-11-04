/**
 * The Code Vibe - Unified API Client
 * Connects frontend components to the Python & Supabase backend with resilient fallback.
 */

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.detail || `HTTP ${res.status}: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    // Return null or rethrow based on caller needs
    console.warn(`[API Client] Request to ${endpoint} failed:`, err.message);
    throw err;
  }
}

// ----------------- Projects API -----------------
export async function getProjects(params = {}) {
  const query = new URLSearchParams();
  if (params.category) query.append('category', params.category);
  if (params.search) query.append('search', params.search);
  const qStr = query.toString() ? `?${query.toString()}` : '';
  return request(`/api/projects${qStr}`);
}

export async function getProject(slugOrId) {
  return request(`/api/projects/${slugOrId}`);
}

export async function createProject(payload) {
  return request('/api/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ----------------- Applications API -----------------
export async function getApplications(status = null, pod = null) {
  const query = new URLSearchParams();
  if (status && status !== 'all') query.append('status', status);
  if (pod) query.append('pod', pod);
  const qStr = query.toString() ? `?${query.toString()}` : '';
  return request(`/api/applications${qStr}`);
}

export async function submitApplication(payload) {
  return request('/api/applications', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateApplicationStatus(id, status) {
  return request(`/api/applications/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

export async function deleteApplication(id) {
  return request(`/api/applications/${id}`, {
    method: 'DELETE',
  });
}

// ----------------- Events API -----------------
export async function getEvents(params = {}) {
  const query = new URLSearchParams();
  if (params.category) query.append('category', params.category);
  if (params.is_past !== undefined) query.append('is_past', params.is_past);
  const qStr = query.toString() ? `?${query.toString()}` : '';
  return request(`/api/events${qStr}`);
}

export async function getEvent(id) {
  return request(`/api/events/${id}`);
}

export async function rsvpEvent(eventId, payload) {
  return request(`/api/events/${eventId}/rsvp`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// ----------------- Community API -----------------
export async function joinCommunity(payload) {
  return request('/api/community/join', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function getStats() {
  return request('/api/community/stats');
}

export async function checkBackendHealth() {
  try {
    return await request('/api/health');
  } catch (e) {
    return { status: 'offline', supabase: { configured: false, connected: false } };
  }
}
