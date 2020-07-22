import { Request, Response, NextFunction } from "express";

class HomeController {
  public InitRoutes(): {
    endpoint: string;
    route: (req: Request, res: Response, next: NextFunction) => void;
  }[] {
    return [{ endpoint: "/", route: this.index }];
  }

  index(req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Hello from Ts" });
    res.end();
  }
}

export default HomeController;
