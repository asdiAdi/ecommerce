
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongoose";
import {Product, IProduct} from "../../models/Product";
import mongooseConnect from "../../lib/mongooseConnect";
import { v4 as uuidv4 } from 'uuid';
// temporary imports
import path from 'path';
import { promises as fs } from 'fs';

export default async (req: any, res: any) => {
    // MONGOOSE CONNECTION TIMING OUT SWITCHING TO TEMPORARY DATABASE
    // TODO: algorithm to fetch first 100 then the rest
    try {
        await mongooseConnect();
        //@ts-ignore
        const dat = await Product.find().lean();
        res.json(dat.filter((val,idx) => idx < 50));
    } catch (e) {
        console.error(e);
        res.status(405).end();
    }

    // THIS IS A TEMPORARY API SINCE MONGODB ATLAS TAKES TOO LONG TO CONNECT
    // TODO: DEPLOY TO SITE WHERE THERE IS NO CONNECTION TIMEOUT ON SERVERLESS FUNCTIONS
    // const jsonDirectory = path.join(process.cwd(), 'json');
    // let fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
    // let dat =  JSON.parse(fileContents);
    // res.status(200).send(JSON.stringify(dat.filter((val,idx) => idx < 50)));
};
