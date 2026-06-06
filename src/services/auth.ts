export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

interface GoogleTokenPayload {
  sub: string;
  name: string;
  email: string;
  picture?: string;
}

export function decodeGoogleToken(token: string): { id: string; name: string; email: string; picture?: string } {
  const payload = JSON.parse(atob(token.split('.')[1])) as GoogleTokenPayload;
  return {
    id: payload.sub,
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
  };
}
