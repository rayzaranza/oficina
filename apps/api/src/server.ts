import { buildFastify } from "./app.js";

const app = buildFastify({ logger: true });

app.listen({ port: 3000, host: "0.0.0.0" }, (error) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }
});
