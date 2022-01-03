import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function SingleElement({ element }) {


    return (
        <div className='position-relative  ' id='js'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop

            >
                {
                    element.content.gallery?.filter((i, index) => (index < 5)).map(element => (
                        <SwiperSlide key={element.id}>
                            <div className="imageContainer rounded"
                                style={{
                                    backgroundImage: `url(${element.filename})`
                                }}
                            ></div>
                        </SwiperSlide>
                    ))

                }

                <div className='TopInfo py-4 px-3'

                >
                    <div>
                        <div className='px-2 py-1 bg-white Name mb-3 rounded'><span>{element.name}</span></div>
                    </div>
                    <div className='px-2 py-1 bg-white Name mb-3 rounded'><span>{element.content.data[0].price} €</span></div>
                    <div className='px-2 py-1 bg-white Name mb-3 rounded'><span>{element.content.data[0].living_area} m<sup>2</sup></span></div>
                    <div className='px-2 py-1 bg-white Name mb-3 rounded position-relative '><span >+</span></div>
                </div>
            </Swiper>
        </div>
    )
}
