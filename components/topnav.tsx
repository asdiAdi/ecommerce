import React, { useState, useTransition } from "react";
import styles from "../styles/topnav.module.css";
import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from 'next/link';

export default function Topnav() {
    const [toggleCategory, setToggleCategory] = useState<boolean>(false);
    const [toggleBrand, setToggleBrand] = useState<boolean>(false);
    const [toggleInformation, setToggleInformation] = useState<boolean>(false);
    const [toggleMobileNav, setToggleMobileNav] = useState<boolean>(false);

    const handleMobileNavClose = () => {
        setToggleMobileNav(false);
    }

    const windowSize = useWindowSize();
    const handleNavToggle = (toggle: boolean, setToggle: React.Dispatch<React.SetStateAction<boolean>>) => {
        setToggleCategory(false);
        setToggleBrand(false);
        setToggleInformation(false);
        setToggle(!toggle);
    }

    React.useEffect(() => {
        if (windowSize.width < 768) {
            setToggleCategory(false);
            setToggleBrand(false);
            setToggleInformation(false);
            setToggleMobileNav(false);
        }
    }, [windowSize.width])

    return (
        <div className={styles.container}>
            <div className={styles['nav-mobile']}>
                <div className={styles.banner}>
                    <Image src={logo} alt="Logo" width={40} height={40} />
                    Art & Supplies Store
                </div>
                <div className="center">
                    <input className={styles.input} type="text" />
                    <svg width={30} height={30} className={styles['search-icon']} fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
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
                        // mobile nav button
                        <div className="center" onClick={() => { setToggleMobileNav(true) }}>
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                        :
                        // desktop navbar
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
                                            <li>Canvas Boards</li>
                                            <li>Acrylic paint</li>
                                            <li>Palette Knife</li>
                                            <li>Acrylic Medium</li>
                                            <li>Brush</li>
                                            <li>Oil Stick</li>
                                            <li>Golden Fluid Acrylic</li>
                                            <li>Encaustic Paint</li>
                                            <li>Easel</li>
                                            <li>Oil Paint</li>
                                            <li>Watercolor</li>
                                            <li>Oil Medium</li>
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
                            <li><Link href="/about"><a>About Us</a></Link></li>
                            <li>Contact Us</li>
                        </ul>
                }
            </div>
            {/* overlay */}
            {windowSize.width < 768 && toggleMobileNav ?
                <div style={{
                    position: 'absolute',
                    top: '0',
                    zIndex: '3',
                    backgroundColor: '#0000008C',
                    height: '100%',
                    width: '100%',
                }}
                    onClick={() => { setToggleMobileNav(false) }}
                >
                </div>
                :
                null
            }
            {/* mobile navbar */}
            {windowSize.width < 768 && toggleMobileNav ?

                <div className={styles['mobile-navbar']}>
                    {toggleBrand || toggleCategory || toggleInformation ? <div className={styles.back}>
                        <svg width={25} height={25} onClick={() => { setToggleCategory(false) }} xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" /></svg>
                    </div> : null}
                    <div>Home</div>
                    <div className={styles.close}>
                        <svg width={25} height={25} onClick={() => { handleMobileNavClose() }} xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                    </div>

                    <ul>
                        <li onClick={() => { setToggleCategory(true) }}>Category <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg></li>
                        <li>Brand <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg></li>
                        <li>Events </li>
                        <li>Information <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg></li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>

                    {toggleCategory ? <ul className={styles['mobile-nav-catin']}>
                        <li>Canvas Boards</li>
                        <li>Acrylic paint</li>
                        <li>Palette Knife</li>
                        <li>Acrylic Medium</li>
                        <li>Brush</li>
                        <li>Oil Stick</li>
                        <li>Golden Fluid Acrylic</li>
                        <li>Encaustic Paint</li>
                        <li>Easel</li>
                        <li>Oil Paint</li>
                        <li>Watercolor</li>
                        <li>Oil Medium</li>
                    </ul> : 
                    <ul className={styles['mobile-nav-catout']}>
                        <li>Canvas Boards</li>
                        <li>Acrylic paint</li>
                        <li>Palette Knife</li>
                        <li>Acrylic Medium</li>
                        <li>Brush</li>
                        <li>Oil Stick</li>
                        <li>Golden Fluid Acrylic</li>
                        <li>Encaustic Paint</li>
                        <li>Easel</li>
                        <li>Oil Paint</li>
                        <li>Watercolor</li>
                        <li>Oil Medium</li>
                    </ul>}
                </div>

                :
                null
            }

        </div>
    )
}