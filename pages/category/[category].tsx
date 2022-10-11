import React from "react";
import Topbar from "../../components/topbar";
import Topnav from "../../components/topnav";
import Footer from "../../components/footer";
import styles from "../../styles/productDisplay.module.css"
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from '../../models/Product';
import { useRouter } from 'next/router'
import Error404 from "../404";
import { Url } from "url";

const categoryTitles = {
    'canvas-board': 'Canvas & Boards',
    'acrylic-paint': 'Acrylic Paints',
    'palette-knife': 'Palette Knives',
    'acrylic-medium': 'Acrylic Mediums',
    'brush': 'Brushes',
    'oil-slick': 'Oil Slicks',
    'golden-fluid-acrylic': 'Golden Fluid Acrylics',
    'encaustic-paint': 'Encaustic Paints',
    'easel': 'Easels',
    'oil-paint': 'Oil Paints',
    'watercolor': 'Watercolors',
    'oil-medium': 'Oil Mediums'
}

const Card = (props: { product: IProduct }) => {
    return (
        <div className={styles.card}>

            <div className={styles['img-container']}>
                {/* This whole div is a PLACEHOLDER, must be changed to <Image src='' />  if you have an image database */}
                <div className={styles.placeholder} style={{ backgroundColor: props.product.imgLink as string }}>
                    <div>{props.product.brand}</div>
                </div>
                {/* End PLACEHOLDER */}
            </div>
            <dl>
                <dt>Name:</dt>
                <dd>{props.product.name}</dd>
                <dt>Price:</dt>
                <dd>{'₱' + props.product.price.toString()}</dd>
                <dt>Quantity:</dt>
                <dd>{props.product.quantity.toString()}</dd>
            </dl>
            <form action={`/api/product/${props.product.itemId}`}>
                <input type="number" min='0' max={props.product.quantity.toString()} required />
                <button type='submit'>+ Cart</button>
            </form>

        </div>

    )
}

let checkRoute = false;
export default function Category({url}) {
    const router = useRouter();
    const { category } = router.query;
    const [isFetched, setIsFetched] = React.useState<boolean>(false);
    const [firstFetch, setFirstFetch] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<any>(undefined);
    if (!checkRoute) {
        if (!Object.keys(categoryTitles).includes(category as string)) {
            return <Error404 />
        }
        checkRoute = true;
    }
    if (!firstFetch) {
        // fetch(process.env.VERCEL === '1' ? 'https://ecommerce-ivory-six.vercel.app/api' + router.asPath : 'http://localhost:3000/api' + router.asPath)
        fetch('https://'+ url + '/api' + router.asPath)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setIsFetched(true);
            })
            .catch((e) => console.log(e));
        setFirstFetch(true);
    }

    return (
        <div>
            <header>
                <Topbar />
                <Topnav />
            </header>
            <main className={styles['main-container']}>
                <div className={styles['head-container']}>
                    <h1>{categoryTitles[category as string]}</h1>
                    <Image src={`/shopGrid/${category}.jpg`} width={873} height={553}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, diam sed porttitor gravida, urna nunc suscipit tortor, a suscipit massa justo ut est. Maecenas lorem ipsum, fermentum sed mi vel, accumsan ullamcorper ligula. Integer suscipit felis augue, eu elementum nibh tincidunt ac. Pellentesque tempor sollicitudin neque ut volutpat. Aliquam faucibus ligula ac enim maximus dignissim. Quisque venenatis neque dolor, eget mollis ipsum consequat in. Pellentesque dictum pulvinar fermentum. Vestibulum nec pharetra erat, egestas hendrerit eros. Fusce in enim pharetra, auctor felis sed, vehicula augue. </p>
                </div>
                <div className={styles['product-grid']}>
                    {isFetched ?
                        products.map(product => (
                            <Card product={product} key={uuidv4()} />
                        ))
                        : <div style={{ fontSize: 'larger', fontWeight: '800' }}>Connecting to MongoDB Atlas...</div>
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}


export async function getServerSideProps() {
    return {
        props: {url: process.env.VERCEL_URL}
    }
}