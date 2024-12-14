import { IBike } from "./bike.interface";
import Bike from "./bike.model";

//need to define type for payload so define an interface
const createBike = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikes = async (searchTerm: string) => {
  let bikeSearch = {};
  if (searchTerm) {
    bikeSearch = {
      $or: [
        { name: searchTerm },
        { brand: searchTerm },
        { category: searchTerm },
      ],
    };
  }
  const result = await Bike.find(bikeSearch);
  return result;
};

const getSingleBike = async (productId: string) => {
  const result = await Bike.findById(productId);
  return result;
};

//Partial shobgula ke optional kore de
const updateBike = async (productId: string, payload: Partial<IBike>) => {
  if (payload.quantity !== undefined) {
    payload.inStock = payload.quantity > 0;
  }
  const result = Bike.findByIdAndUpdate(productId, payload, { new: true });
  return result;
};

const deleteBike = async (productId: string) => {
  const result = await Bike.findByIdAndDelete(productId);
  return result;
};

export const bikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
  deleteBike,
  updateBike,
};
