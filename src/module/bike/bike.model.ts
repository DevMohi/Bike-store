import { model, Schema } from "mongoose";
import { IBike } from "./bike.interface";

const bikeSchema = new Schema<IBike>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    price: {
      type: Number,
      min: [0, "price must be positive"],
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      enum: {
        values: ["Mountain", "Road", "Hybrid", "Electric"],
        message: "{VALUE} is not valid, please provide a valid category",
      },
      required: [true, "category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    inStock: {
      type: Boolean,
      required: [true, "inStock is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

//Before saving pre hook used to update the stock
bikeSchema.pre("save", function (next) {
  this.inStock = this.quantity > 0;
  next();
});

const Bike = model<IBike>("Bike", bikeSchema);
export default Bike;
