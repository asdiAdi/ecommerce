import React, { useState } from "react";
import styles from "../styles/topnav.module.css"
import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";
import logo from "../images/logo.png"
import Head from "next/head";

export default function Topnav() {
    const [toggleCategory, setToggleCategory] = useState<boolean>(false);
    const [toggleBrand, setToggleBrand] = useState<boolean>(false);
    const [toggleInformation, setToggleInformation] = useState<boolean>(false);
    
    const windowSize = useWindowSize();
    const handleNavToggle = (toggle: boolean, setToggle: React.Dispatch<React.SetStateAction<boolean>>) => {
        setToggleCategory(false);
        setToggleBrand(false);
        setToggleInformation(false);
        setToggle(!toggle);
    }
    return (
        <div className={styles.container}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <div className={styles['nav-mobile']}>
                <div className={styles.banner}>
                    <Image src={logo} alt="Logo" width={40} height={40} />
                    Art & Supplies Store
                </div>
                <div className="center">
                    <input className={styles.input} type="text" />
                    <svg className={styles['search-icon']} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                </div>
                <div className="center">
                    <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" /></svg>
                    {windowSize.width < 768 ?
                        <div className={`${styles['cart-quantity']} center`}>
                            0
                        </div>

                        : <div>
                            Shopping Cart
                        </div>}
                </div>
                {
                    windowSize.width < 768 ?
                        <div className="center">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        :
                        <ul className={styles.nav}>
                            <li>Home</li>
                            <li style={{ position: 'relative' }}>
                                <div style={{ color: toggleCategory ? '#B8743A' : 'initial', display: 'inline' }}
                                    onMouseEnter={() => handleNavToggle(toggleCategory, setToggleCategory)} >
                                    Category
                                    <svg width={15} height={15} style={{ verticalAlign: 'bottom' }} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                </div>
                                {toggleCategory ?
                                    <div className={styles['drop-down']} onMouseLeave={() => handleNavToggle(toggleCategory, setToggleCategory)}>
                                        <ul>
                                            <li>Category A</li>
                                            <li>Category B</li>
                                            <li>Category C</li>
                                            <li>Category D</li>
                                            <li>Category E</li>
                                            <li>Category F</li>
                                            <li>Category G</li>
                                            <li>Category H</li>
                                        </ul>
                                    </div>
                                    : null
                                }
                            </li>
                            <li style={{ position: 'relative' }}>
                                <div style={{ color: toggleBrand ? '#B8743A' : 'initial', display: 'inline' }}
                                    onMouseEnter={() => handleNavToggle(toggleBrand, setToggleBrand)} >
                                    Brand
                                    <svg width={15} height={15} style={{ verticalAlign: 'bottom' }} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                </div>
                                {toggleBrand ?
                                    <div className={styles['drop-down']} onMouseLeave={() => handleNavToggle(toggleBrand, setToggleBrand)}>
                                        <ul>
                                            <li>Brand A</li>
                                            <li>Brand B</li>
                                            <li>Brand C</li>
                                            <li>Brand D</li>
                                            <li>Brand E</li>
                                            <li>Brand F</li>
                                            <li>Brand G</li>
                                            <li>Brand H</li>
                                        </ul>
                                    </div>
                                    : null
                                }
                            </li>
                            <li>Events</li>
                            <li style={{ position: 'relative' }}>
                                <div style={{ color: toggleInformation ? '#B8743A' : 'initial', display: 'inline' }}
                                    onMouseEnter={() => handleNavToggle(toggleInformation, setToggleInformation)} >
                                    Information
                                    <svg width={15} height={15} style={{ verticalAlign: 'bottom' }} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                                </div>
                                {toggleInformation ?
                                    <div className={styles['drop-down']} onMouseLeave={() => handleNavToggle(toggleInformation, setToggleInformation)}>
                                        <ul>
                                            <li>Information A</li>
                                            <li>Information B</li>
                                            <li>Information C</li>
                                            <li>Information D</li>
                                            <li>Information E</li>
                                            <li>Information F</li>
                                            <li>Information G</li>
                                            <li>Information H</li>
                                        </ul>
                                    </div>
                                    : null
                                }
                            </li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                }
            </div>


        </div>
    )
}