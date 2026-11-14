// Relative URLs: the same code works with the Vite proxy (dev)
// and with vercel.json routing (production).
const BASE = '/api/todos';

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export const getTodos = () => request(BASE);

export const createTodo = (title) =>
  request(BASE, { method: 'POST', body: JSON.stringify({ title }) });

export const updateTodo = (id, updates) =>
  request(`${BASE}/${id}`, { method: 'PUT', body: JSON.stringify(updates) });

export const deleteTodo = (id) => request(`${BASE}/${id}`, { method: 'DELETE' });
