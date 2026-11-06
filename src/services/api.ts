const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`
};

export async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.statusText}`);
  }
  
  return response.json();
}