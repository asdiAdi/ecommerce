import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

function NextArrow(props: { className?: string, style?: any, onClick?: () => {} }) {
    return (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: "block",
                background: "rgba(0, 0, 0, 0.25)",
                position: "absolute",
                right: "0",
                zIndex: "1",
                height: "100px",
            }}
            onClick={props.onClick}
        />
    );
}

function PrevArrow(props: { className?: string, style?: any, onClick?: () => {} }) {
    return (
        <div
            className={props.className}
            style={{
                ...props.style,
                display: "block",
                margin: 'auto',
                background: "rgba(0, 0, 0, 0.25)",
                left: "0",
                zIndex: "1",
                height: "100px",
            }}
            onClick={props.onClick}
        />
    );
}


export default function HeaderCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div style={{ marginBottom: '60px' }}>
            <Slider {...settings}>
                {
                    Array(8).fill(0).map((val, idx) => (
                        <div key={uuidv4()}>
                            <Image src={`/home-carousel/${idx + 1}.jpg`}
                                height={680}
                                width={1920}
                                alt={`img-${idx + 1}`}
                            />
                        </div>
                    ))
                }

            </Slider>
        </div>

    )
}