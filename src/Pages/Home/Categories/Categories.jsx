// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';

const Categories = () => {
    return (
        <div className="my-16">
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            />
            <div className="py-8">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {[
                        { img: img1, title: "Salads" },
                        { img: img2, title: "Soups" },
                        { img: img3, title: "Pizzas" },
                        { img: img4, title: "Desserts" },
                        { img: img5, title: "Salads" },
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative overflow-hidden rounded-lg shadow-lg group">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-50"></div>
                                <h2 className="absolute bottom-5 left-5 text-2xl font-bold text-white uppercase transition-transform duration-300 group-hover:translate-y-[-10px]">
                                    {item.title}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;
