import { SearchResponse } from 'types/spotify';

export const fetchTracks = async (q: string): Promise<SearchResponse | undefined> => {
  const token = window.localStorage.getItem('access-token');
  const url = `https://api.spotify.com/v1/search?limit=10&q=${q}&type=track`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
};
