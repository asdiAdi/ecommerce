
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongoose";
import {Product} from "../../models/Product";
import mongooseConnect from "../../lib/mongooseConnect";
import { v4 as uuidv4 } from 'uuid';

// mock products
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomColor() {
    let min = Math.ceil(0);
    let max = Math.floor(256);
    const code = () => Math.floor(Math.random() * (max - min) + min).toString(16);
    return `${code()}${code()}${code()}`
}
const sampleData = new Array(1000).fill(0).map((val, idx) => {
    return {
        itemId: uuidv4(),
        name: `Canvas Board ${idx}`,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ex nibh, vestibulum nec finibus ut, interdum sit amet est. Nunc faucibus justo sit amet mauris molestie commodo. Nulla hendrerit neque risus, sit amet semper turpis iaculis eu. Phasellus euismod vestibulum purus, ut congue quam malesuada vitae. Morbi quis ex venenatis, dictum velit quis, egestas nunc. Mauris rutrum mauris sit amet tristique interdum. Praesent eu fringilla tortor, semper tincidunt quam. Aliquam elit leo, condimentum quis risus at, faucibus eleifend ante. Vestibulum blandit felis eu nisi tristique facilisis. Nullam euismod ligula nec sem lacinia, in tincidunt urna tempor. Cras sit amet dolor neque. Integer dapibus, eros id tincidunt molestie, nulla elit gravida justo, nec faucibus odio metus nec ligula. Duis consectetur eleifend efficitur.",
        imgLink: `#${randomColor()}`,
        price: getRandomInt(100, 5000),
        quantity: getRandomInt(1, 1000)
    }
})
// end mock products

export default async (req: any, res: any) => {
    // push mock products
    // try {
    //     await mongooseConnect();
    //     for (const file of sampleData) {
    //          //@ts-ignore
    //         const contents = await Product.create(file);
    //       }
    //     res.send(sampleData)
    // } catch (e) {
    //     console.error(e);
    //     res.status(405).end();
    // }
    // end push mock products

    // TODO: algorithm to fetch first 100 then the rest
    try {
        await mongooseConnect();
        // @ts-ignore
        const dat = await Product.find();
        res.json(dat.filter((val,idx) => idx < 50));
    } catch (e) {
        console.error(e);
        res.status(405).end();
    }

};
