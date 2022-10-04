import React from "react";
import styles from "../styles/shopGrid.module.css"
import Image from 'next/image';
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
type ShopGridData = {
    text: string,
    imgSrc: string
}[];

export default function ShopGrid(props: { data: ShopGridData }) {
    return (
        <div className={styles.container} >
            {
                props.data.map((dat, idx) => (
                    <div className={styles.card} key={uuidv4()}>
                        <Link href='/canvas-board'><a className={styles.title}>{dat.text}</a></Link>
                        <Image src={dat.imgSrc}
                            width={873}
                            height={553}
                            alt={dat.text}
                        />
                    </div>

                ))
            }
        </div>
    )
}