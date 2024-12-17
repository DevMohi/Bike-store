import { IBike } from "./bike.interface";
import Bike from "./bike.model";

const createBike = async (payload: IBike): Promise<IBike> => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikes = async () => {
  const result = await Bike.find();
  return result;
};

const getBikesByQuery = async (searchTerm: string) => {
  let bikeSearch = {};
  if (searchTerm) {
    bikeSearch = {
      //or operator
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

const updateBike = async (productId: string, payload: Partial<IBike>) => {
  if (payload.quantity !== undefined) {
    payload.inStock = payload.quantity > 0;
  }
  const result = Bike.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBike = async (productId: string) => {
  const result = await Bike.findByIdAndDelete(productId);
  return result;
};

export const bikeService = {
  createBike,
  getAllBikes,
  getBikesByQuery,
  getSingleBike,
  deleteBike,
  updateBike,
};
