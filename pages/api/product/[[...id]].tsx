
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongoose";
import {Product} from "../../../models/Product";
import mongooseConnect from "../../../lib/mongooseConnect";

export default async (req:any, res:any) => {
    
    try {
        console.log(req.method)
        // let { id } = req.query;
        // id = id as ObjectId
        // const client = await clientPromise;
        // const db = client.db("websiteData");
        
        await mongooseConnect();
        // const products = await db
        //     .collection("product")
        //     .find({})
        //     .toArray()
        // res.status(200).json(products);
        // throw Error()
        res.send('h')
        //@ts-ignore
        // const test =  await Product.create({name: 'where the fuck does this go'});
        // console.log(test)
        // res.send(test)
    } catch (e) {
        console.error(e);
        res.status(405).end();
    }
};
