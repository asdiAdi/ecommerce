import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	imglink: {
		type: String,
		required: [true, "Infidels!"]
	}
})

const Product = mongoose.model("Product", productSchema);
export default Product