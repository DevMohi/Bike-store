import { Request, Response } from "express";
import { bikeService } from "./bike.service";

//Create bike
const createBike = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await bikeService.createBike(payload);

    res.status(200).json({
      message: "Bike created successfully",
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Validation Failed",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//Get all bikes based on searchTerm
const getBikesByQuery = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    console.log(searchTerm);
    let result;
    if (searchTerm) {
      result = await bikeService.getBikesByQuery(searchTerm as string);
    } else {
      //For /api/products
      result = await bikeService.getAllBikes();
    }

    //If not found searchTerm
    if (result.length === 0) {
      return res.status(404).json({
        message: "SearchTerm Not found",
        success: false,
        data: [],
      });
    }
    res.status(200).json({
      message: "Bikes retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "something went wrong",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//Get a specific Bike with id
const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bikeService.getSingleBike(productId);

    // if No data found
    if (!result) {
      return res.status(404).json({
        message: "Bike not found",
        success: false,
        data: result,
      });
    }

    res.status(200).json({
      message: "Bike retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "something went wrong",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//Update a bike
const updateBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const payload = req.body;
    console.log(productId, payload);
    const result = await bikeService.updateBike(productId, payload);

    //handled if the id doesnt exist
    if (!result) {
      return res.status(404).json({
        message: "Bike Not Found",
        success: false,
        data: result,
      });
    }
    res.status(200).json({
      message: "Bike updated successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "something went wrong",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//Delete a specific bike with id -> done
const deleteBike = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bikeService.deleteBike(productId);
    //Handle deleted id or non-existing id
    if (!result) {
      return res.status(404).json({
        message: "Bike already deleted or doesnt exist",
        success: false,
        data: result,
      });
    }
    res.status(200).json({
      message: "Bike deleted successfully",
      status: true,
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "something went wrong",
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const bikeController = {
  createBike,
  getBikesByQuery,
  getSingleBike,
  deleteBike,
  updateBike,
};
