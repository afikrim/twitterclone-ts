import HomeController from "./controllers/HomeController";

const homeController = new HomeController();

const homeRoutes = homeController.InitRoutes();

let routes = [];
routes = routes.concat(homeRoutes);

export default routes;
