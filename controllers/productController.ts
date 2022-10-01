// import Product from '../models/Product'
import Product from "../models/Product";

const test = (reqbody:any) => {
 
    return Product.find({}).then(result => result)
}

export {test}
