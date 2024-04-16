import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import img1 from '../assets/img/heroSlider/1.jpg';
import img2 from '../assets/img/heroSlider/2.jpg';
import img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: img1,
        btnText: 'See our rooms'
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: img2,
        btnText: 'See our rooms'
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: img3,
        btnText: 'See our rooms'
    }
]

const HeroSlider = () => {

    return (
        <>
            <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className='heroSlider h-[700px]'
            >
                {
                    slides.map((slide, index) => {
                        const { title, bg, btnText } = slide
                        return (
                            <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
                                <div className='z-40 text-white text-center'>
                                    <div className='uppercase font-tertiary tracking-[6px] mb-5'>just Enjoy and relax</div>
                                    <h1 className='text-[55px] font-primary uppercase tracking-[2px] mx-w-[920px] leading-tight mb-6'>{title}</h1>
                                    <button className='btn  btn-lg btn-primary mx-auto'>
                                        {btnText}
                                    </button>
                                </div>
                                <div className='absolute top-0 w-full h-full'>
                                    <img className='object-cover h-full w-full' src={bg} />
                                </div>
                                <div className='absolute w-full h-full bg-black/70'>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default HeroSlider