import { Request, Response } from "express";
import { orderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderServices.createOrder(payload);
    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message || "something went wrong",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.calculateRevenue();
    res.status(200).json({
      message: "Order created successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Failed to calculate revenue",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
