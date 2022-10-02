import React from "react";
import Topbar from "../components/topbar";
import Topnav from "../components/topnav";
import styles from "../styles/productDisplay.module.css"

export default function CanvasBoard(props) {
    // console.log(Object.keys(products))
    console.log(props.products)
    // const productData = fetch('/pages/')
    return (
        <div>
            <Topbar />
            <Topnav />
            <main>
                
                <div className={styles['img-container']}>
                    {/* This whole div is a placeholder, must be changed to <Image src='' />  if you have an image database */}
                    <div className={styles.placeholder} style={{ backgroundColor: '#ABCABC' }}>
                        <div>{JSON.stringify(props.products[0].imgLink)}</div>
                    </div>
                </div>

            </main>

        </div>
    )
}
// export async function getStaticPaths() {
//     return {
//         paths: [{ params: '/api/products.tsx' }],
//         fallback: false, // can also be true or 'blocking'
//     }
// }

export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/products');
    let products = await res.json();
    return {
        props: {products}
      }
}