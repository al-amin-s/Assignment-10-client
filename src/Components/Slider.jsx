import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
const Slider = () => {
    return (
        <div className='p-14 '>
            <Swiper
                className='rounded-2xl shadow-xl'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PYF3T2z/12828.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl rounded-lg ">
                            <h2 className='mb-5 text-5xl font-bold text-[#0a0a0a]'>Welcome to CraftopiaHub</h2>
                            <p className='mt-4 text-xl text-[#a0a0a0]'>Join Us in Celebrating Creativity and Expression - Add Your Artwork to Our Diverse Portfolio</p>

                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LSQtXMz/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai.jpg)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
                            <h2 className='mb-5 text-5xl font-bold text-[#ea8f8f]'>Welcome to CraftopiaHub</h2>
                            <p className='mt-4 text-xl text-[#e3afaf]'>Let Your Imagination Flourish - Showcase Your Talent by Uploading Your Handcrafted Treasures Here</p>

                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hZVKSpr/people-making-paper-flowers-craft-art-work-handicraft.jpg)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
                            <h2 className='mb-5 text-5xl font-bold text-[#ea8f8f]'>Welcome to CraftopiaHub</h2>
                            <p className='mt-4 text-xl text-[#e3afaf]'>Contribute to Our Tapestry of Creativity - Share Your Artisanal Creations with Our Worldwide Audience</p>

                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YPkwnDy/portrait-young-woman-who-is-posing-covered-with-black-paint.jpg)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
                            <h2 className='mb-5 text-5xl font-bold text-[#c48181]'>Welcome to CraftopiaHub</h2>
                            <p className='mt-4 text-xl text-[#e3afaf]'>Discover handcrafted treasures that inspire.</p>

                        </div>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;