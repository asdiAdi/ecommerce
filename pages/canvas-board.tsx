import React from "react";
import Topbar from "../components/topbar";
import Topnav from "../components/topnav";
import styles from "../styles/productDisplay.module.css"
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../models/Product';


const Card = (props: { product: IProduct }) => {
    return (
        <div className={styles.card}>

            <div>{props.product.name}</div>
            <div className={styles['img-container']}>
                {/* This whole div is a PLACEHOLDER, must be changed to <Image src='' />  if you have an image database */}
                <div className={styles.placeholder} style={{ backgroundColor: props.product.imgLink as string }}>
                    <div>{JSON.stringify(props.product.itemId.split('-')[1])}</div>
                </div>
                {/* End PLACEHOLDER */}
            </div>
            <div>{props.product.price.toString()}</div>
            <div>{props.product.quantity.toString()}</div>
            <form>
                <input type="number" min='0' max={props.product.quantity.toString()} />
                <button type='submit'>+ Cart</button>
            </form>

        </div>

    )
}
export default function CanvasBoard(props: { products: IProduct[] }) {
    return (
        <div>
            <Topbar />
            <Topnav />
            <main>
                <div className={styles['head-container']}>
                    <h1>Canvas & Boards</h1>
                    <Image src='/shopGrid/canvas-board.jpg' width={873} height={553}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, diam sed porttitor gravida, urna nunc suscipit tortor, a suscipit massa justo ut est. Maecenas lorem ipsum, fermentum sed mi vel, accumsan ullamcorper ligula. Integer suscipit felis augue, eu elementum nibh tincidunt ac. Pellentesque tempor sollicitudin neque ut volutpat. Aliquam faucibus ligula ac enim maximus dignissim. Quisque venenatis neque dolor, eget mollis ipsum consequat in. Pellentesque dictum pulvinar fermentum. Vestibulum nec pharetra erat, egestas hendrerit eros. Fusce in enim pharetra, auctor felis sed, vehicula augue. </p>
                </div>
                <div className={styles['product-grid']}>
                    {
                        props.products.map(product => (
                            <Card product={product} key={uuidv4()} />
                        ))
                    }
                </div>


            </main>

        </div>
    )
}
export async function getServerSideProps() {
    let products: IProduct[] = []
    let res = null;
    if (process.env.VERCEL === '1')res = await fetch('https://ecommerce-ivory-six.vercel.app/api/products');
    else res = await fetch('http://localhost:3000/api/products');
    try {
        products = await res.json()
    } catch (e) {
        console.log(e)
    }
    return {
        props: { products }
    }
}