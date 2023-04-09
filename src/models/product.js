import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    price: Number,
    description: String,
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);