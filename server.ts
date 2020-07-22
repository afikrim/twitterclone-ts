import App from "./app";

import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

import routes from "./routes";

import { PORT } from "./config/constants";

const app = new App(PORT);

app.addMiddlewares([
  logger(process.env.NODE_ENV === "production" ? "combined" : "dev"),
  cors(),
  helmet(),
]);

app.addRoutes(routes);

app.listen();
