import { model, Schema, Types } from "mongoose";
import validator from "validator";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "{VALUE} is not a valid email",
      },
    },
    //will get a price from here
    product: {
      type: Schema.Types.ObjectId,
      ref: "Bike",
      required: [true, "Product id should be provided"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity required"],
    },
    //Product price * quantity
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Order = model<IOrder>("Order", orderSchema);
export default Order;
