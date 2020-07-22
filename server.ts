import App from "./app";
import Db from "./db";

import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

import routes from "./routes";

import { PORT, DB_URL } from "./config/constants";

const app = new App(PORT);
const db = new Db(DB_URL);

db.connect();

app.addMiddlewares([
  logger(process.env.NODE_ENV === "production" ? "combined" : "dev"),
  cors(),
  helmet(),
]);

app.addRoutes(routes);

app.listen();
