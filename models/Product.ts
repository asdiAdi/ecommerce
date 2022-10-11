import mongoose from "mongoose";
interface IProduct {
	itemId: String,
	name:  String,
	category: String,
	brand: String,
	description:  String,
	imgLink:  String,
	price:  Number,
	quantity:  Number
  }

const productSchema = new mongoose.Schema<IProduct>({
	itemId: {
		type: String,
		required: [true, "itemId required"]
	},
	category: {
		type: String,
		required: [true, "category required"]
	},
	brand: {
		type: String,
		required: [true, "brand required"]
	},
	name: {
		type: String,
		required: [true, "name required"]
	},
	description: {
		type: String,
		required: [true, "description required"]
	},
	imgLink: {
		type: String,
		required: [true, "description required"]
	},
	price: {
		type: Number,
		required: [true, "price required"]
	},
	quantity: {
		type: Number,
		required: [true, "quantity required"]
	}
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export { Product };
export type { IProduct };
