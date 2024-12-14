import { RequestHandler, Router } from "express";
import { bikeController } from "./bike.controller";

const bikeRouter = Router();

bikeRouter.put("/products/:productId", bikeController.updateBike  as RequestHandler);
bikeRouter.delete("/products/:productId", bikeController.deleteBike  as RequestHandler);
bikeRouter.get("/products/:productId", bikeController.getSingleBike  as RequestHandler);
bikeRouter.post("/products", bikeController.createBike  as RequestHandler);
bikeRouter.get("/products", bikeController.getAllBikes  as RequestHandler);

export default bikeRouter;
