import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {

  test("should return the API key when the Header is present", () => {
    
    const headers = {
      "authorization": "ApiKey my-secret-token"
    };

    const result = getAPIKey(headers);

    expect(result).toBe("my-secret-token");
  });

  test("should return null if no Authorization header is present", () => {
 
    const headers = {};

    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

});
