import { Buffer } from 'buffer';
import { AccessTokenResponse } from 'types/spotify';

export const fetchAccessToken = async (): Promise<AccessTokenResponse> => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const authToken = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');
  const url = 'https://accounts.spotify.com/api/token';

  return fetch(url, {
    headers: {
      Authorization: `Basic ${authToken}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials'
    }),
    method: 'POST'
  }).then((res) => res.json());
};
