import { RequestHandler, Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router();

orderRouter.post("/orders", orderController.createOrder as RequestHandler);
orderRouter.get("/orders/revenue", orderController.calculateRevenue);

export default orderRouter;
