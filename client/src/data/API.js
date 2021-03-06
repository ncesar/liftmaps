const API_URL = process.env.REACT_APP_API_URL;

export async function listLogEntries(param) {
  const response = await fetch(`${API_URL}/api/${param}`);
  return response.json();
}

export async function createLogEntry(entry) {
  const response = await fetch(`${API_URL}/api/logs`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
  return response.json();
}

export async function editLogEntry(id, body) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function deleteLogEntry(id, body) {
  const response = await fetch(`${API_URL}/api/logs/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}
