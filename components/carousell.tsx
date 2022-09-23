import React from "react";
import styles from "../styles/carousell.module.css"

export default function Carousell() {


    return (
        <div className={styles.body}>
            <div className={styles.carousel} aria-label="Gallery">
                <ol className={styles.carousel__viewport}>
                    <li id="carousel__slide1"
                        className={styles.carousel__slide}>
                        <div className={styles.carousel__snapper}>
                            <a href="#carousel__slide4"
                                className={styles.carousel__prev}>Go to last slide</a>
                            <a href="#carousel__slide2"
                                className={styles.carousel__next}>Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide2"
                        className={styles.carousel__slide}>
                        <div className={styles.carousel__snapper}></div>
                        <a href="#carousel__slide1"
                            className={styles.carousel__prev}>Go to previous slide</a>
                        <a href="#carousel__slide3"
                            className={styles.carousel__next}>Go to next slide</a>
                    </li>
                    <li id="carousel__slide3"
                        className={styles.carousel__slide}>
                        <div className={styles.carousel__snapper}></div>
                        <a href="#carousel__slide2"
                            className={styles.carousel__prev}>Go to previous slide</a>
                        <a href="#carousel__slide4"
                            className={styles.carousel__next}>Go to next slide</a>
                    </li>
                    <li id="carousel__slide4"
                        className={styles.carousel__slide}>
                        <div className={styles.carousel__snapper}></div>
                        <a href="#carousel__slide3"
                            className={styles.carousel__prev}>Go to previous slide</a>
                        <a href="#carousel__slide1"
                            className={styles.carousel__next}>Go to first slide</a>
                    </li>
                </ol>
                <aside className={styles.carousel__navigation}>
                    <ol className={styles['carousel__navigation-list']}>
                        <li className={styles['carousel__navigation-item']}>
                            <a href="#carousel__slide1"
                                className={styles['carousel__navigation-button']}>Go to slide 1</a>
                        </li>
                        <li className={styles['carousel__navigation-item']}>
                            <a href="#carousel__slide2"
                                className={styles['carousel__navigation-button']}>Go to slide 2</a>
                        </li>
                        <li className={styles['carousel__navigation-item']}>
                            <a href="#carousel__slide3"
                                className={styles['carousel__navigation-button']}>Go to slide 3</a>
                        </li>
                        <li className={styles['carousel__navigation-item']}>
                            <a href="#carousel__slide4"
                                className={styles['carousel__navigation-button']}>Go to slide 4</a>
                        </li>
                    </ol>
                </aside>
            </div>
        </div>

    )
}

//css

// body {
//     max-width: 37.5rem;
//     margin: 0 auto;
//     padding: 0 1.25rem;
//     font-family: 'Lato', sans-serif;
//   }
  
//   * {
//     box-sizing: border-box;
//     scrollbar-color: transparent transparent; /* thumb and track color */
//     scrollbar-width: 0px;
//   }
  
//   *::-webkit-scrollbar {
//     width: 0;
//   }
  
//   *::-webkit-scrollbar-track {
//     background: transparent;
//   }
  
//   *::-webkit-scrollbar-thumb {
//     background: transparent;
//     border: none;
//   }
  
//   * {
//     -ms-overflow-style: none;
//   }
  
//   ol, li {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }


// .body ol {
//     list-style: none;
//     margin: 0;
//     padding: 0;
// }

// .body li {
//     list-style: none;
//     margin: 0;
//     padding: 0;
// }