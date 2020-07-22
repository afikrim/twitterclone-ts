import express from "express";
import path from "path";

import { Application, Router } from "express";

class App {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  addMiddlewares(middlewares: any[]) {
    Object.keys(middlewares).forEach((index) => {
      this.app.use(middlewares[index]);
    });
  }

  addRoutes(routes: { endpoint: string; route: Router }[]) {
    Object.keys(routes).forEach((index) => {
      this.app.use(`/${routes[index].endpoint}`, routes[index].route);
    });
  }

  addStaticFolders(
    staticFolders: { endpoint: string; staticFolder: string }[]
  ) {
    Object.keys(staticFolders).forEach((index) => {
      this.app.use(
        `/$staticFolders[index].endpoint`,
        express.static(
          path.join(process.cwd(), staticFolders[index].staticFolder)
        )
      );
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line
      console.log(`Application start on http://127.0.0.1:${this.port}`);
    });
  }
}

export default App;
