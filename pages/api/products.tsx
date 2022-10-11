import {Product, IProduct} from "../../models/Product";
import mongooseConnect from "../../lib/mongooseConnect";

export default async (req: any, res: any) => {
    try {
        await mongooseConnect();
        //@ts-ignore
        const dat = await Product.find({category:"canvas-board"}).lean();
        res.json(dat.filter((val,idx) => idx < 20));
    } catch (e) {
        console.error(e);
        res.status(405).end();
    }
};
