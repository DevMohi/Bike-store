import express, { Request, Response } from "express";
import bikeRouter from "./module/bike/bike.router";
import orderRouter from "./module/order/order.router";
const app = express();

//Middleware
app.use(express.json());

//Path
app.use("/api", bikeRouter);
app.use("/api", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Hello World",
  });
});

export default app;
