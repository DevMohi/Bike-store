import Bike from "../bike/bike.model";
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder) => {
  const { email, product, quantity } = payload;
  let { totalPrice } = payload;

  const bike = await Bike.findById(product);
  if (!bike) {
    throw new Error("Nothing available with this id");
  }

  // Checks the totalPrice  , if total price is given by the user check whether its correct  , if not it updates by multiplying the quantity
  if (totalPrice) {
    if (totalPrice !== bike.price * quantity) {
      throw new Error(
        "Total Price does not match when price is multiplied to quantity"
      );
    }
  } else if (!totalPrice) {
    totalPrice = bike.price * quantity;
  }

  //After deducting the quantity the bike.inStock is checked whether true or false
  bike.quantity = bike.quantity - quantity;
  bike.inStock = bike.quantity >= 0;

  if (bike.inStock === false) {
    //If false adds back the quantity to the original one
    bike.quantity = bike.quantity + quantity;
    throw new Error("Insufficient stock");
  }

  await bike.save();

  // const result = await Order.create(payload);
  const result = await Order.create({
    email,
    product,
    quantity,
    totalPrice,
  });
  return result;
};

const calculateRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } },
    },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);

  //If no result is found, returns 0
  if (result.length === 0) {
    return 0;
  } else {
    return result;
  }
};
export const orderServices = {
  createOrder,
  calculateRevenue,
};
