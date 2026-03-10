// src/api/auth.ts
import { IncomingHttpHeaders } from "http";
type HeaderOptions =
  | IncomingHttpHeaders
  | Record<string, string | string[] | undefined>;

export function getAPIKey(headers: HeaderOptions): string | null {
  const authHeader = headers["authorization"];

  if (!authHeader) {
    return null;
  }

  const headerValue = Array.isArray(authHeader) ? authHeader[0] : authHeader;

  const splitAuth = headerValue.split(" ");

  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
