import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  

  test("should return the API key when the Header is present", () => {
    const headers = new Headers();
    headers.append("Authorization", "ApiKey my-secret-token");
    
    const result = getAPIKey(headers);

    expect(result).toBe("my-secret-token");
  });

  
  test("should throw an error if no Authorization header is present", () => {
    const headers = new Headers(); 
    
  
    expect(() => getAPIKey(headers)).toThrow();
  });
  
});