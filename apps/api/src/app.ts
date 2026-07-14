import { fastify } from "fastify";

export const app = fastify({ logger: true });

app.get("/health", (_request, reply) => {
  reply.send({ status: "ok" });
});
