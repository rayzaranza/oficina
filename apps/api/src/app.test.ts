import { afterAll, describe, expect, test } from "vitest";
import { buildFastify } from "./app.js";

const app = buildFastify({ logger: false });

describe("Health Check", () => {
  test("health endpoint returns status code 200", async () => {
    const { statusCode } = await app.inject({ method: "GET", url: "/health" });
    expect(statusCode).toBe(200);
  });

  test("health endpoint returns status: 'ok' as response", async () => {
    const response = await app.inject({ method: "GET", url: "/health" });
    const json = await response.json();
    expect(json).toStrictEqual({ status: "ok" });
  });
});

afterAll(async () => {
  await app.close();
});
