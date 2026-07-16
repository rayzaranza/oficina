import { type FastifyLoggerOptions, fastify } from "fastify";

export function buildFastify({
  logger,
}: {
  logger: boolean | FastifyLoggerOptions;
}) {
  const app = fastify({ logger });

  app.get("/health", (_request, reply) => {
    reply.send({ status: "ok" });
  });

  return app;
}
