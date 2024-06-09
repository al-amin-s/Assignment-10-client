// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// const Slider = () => {
//     return (
//         <div className='p-14 '>
//             <Swiper
//                 className='rounded-2xl shadow-xl'
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={50}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 // onSlideChange={() => console.log('slide change')}
//                 // onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PYF3T2z/12828.jpg)' }}>
//                     <div className="hero-overlay  bg-opacity-30"></div>
//                     <div className="hero-content text-center text-neutral-content">
//                         <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl rounded-lg ">
//                             <h2 className='mb-5 text-5xl font-bold text-[#0a0a0a]'>Welcome to CraftopiaHub</h2>
//                             <p className='mt-4 text-xl text-[#a0a0a0]'>Join Us in Celebrating Creativity and Expression - Add Your Artwork to Our Diverse Portfolio</p>

import { Link } from "react-router-dom";

//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>
//                 <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LSQtXMz/watercolor-painting-with-multi-colored-abstract-backgrounds-generative-ai.jpg)' }}>
//                     <div className="hero-overlay bg-opacity-30"></div>
//                     <div className="hero-content text-center text-neutral-content">
//                         <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
//                             <h2 className='mb-5 text-5xl font-bold text-[#ea8f8f]'>Welcome to CraftopiaHub</h2>
//                             <p className='mt-4 text-xl text-[#e3afaf]'>Let Your Imagination Flourish - Showcase Your Talent by Uploading Your Handcrafted Treasures Here</p>

//                         </div>
//                     </div>
//                 </div></SwiperSlide>
//                 <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/hZVKSpr/people-making-paper-flowers-craft-art-work-handicraft.jpg)' }}>
//                     <div className="hero-overlay bg-opacity-30"></div>
//                     <div className="hero-content text-center text-neutral-content">
//                         <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
//                             <h2 className='mb-5 text-5xl font-bold text-[#ea8f8f]'>Welcome to CraftopiaHub</h2>
//                             <p className='mt-4 text-xl text-[#e3afaf]'>Contribute to Our Tapestry of Creativity - Share Your Artisanal Creations with Our Worldwide Audience</p>

//                         </div>
//                     </div>
//                 </div></SwiperSlide>
//                 <SwiperSlide><div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YPkwnDy/portrait-young-woman-who-is-posing-covered-with-black-paint.jpg)' }}>
//                     <div className="hero-overlay bg-opacity-30"></div>
//                     <div className="hero-content text-center text-neutral-content">
//                         <div className="max-w-lg bg-[#ffe3e3] bg-opacity-30 p-9 shadow-2xl ">
//                             <h2 className='mb-5 text-5xl font-bold text-[#c48181]'>Welcome to CraftopiaHub</h2>
//                             <p className='mt-4 text-xl text-[#e3afaf]'>Discover handcrafted treasures that inspire.</p>

//                         </div>
//                     </div>
//                 </div></SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default Slider;





const Slider = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero border rounded-xl  bg-[#ded2fa]">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ibb.co/8P2Q1mC/yellow-throated-sericornis-sericornis-citreogularis-illustrated-by-elizabeth-gould.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold"> Discover the Serenity of Landscape Painting</h1>
                                <p className="py-6">Landscape painting invites you to capture the beauty of the natural world on canvas. From serene countryside scenes to dramatic mountain vistas, learn to paint landscapes that evoke a sense of place and wonder. Master the techniques of composition, color mixing, and brushwork to bring the great outdoors into your artwork.</p>
                                <Link to="/allcraft"> <button className="btn btn-primary">Explore Now</button></Link>
                            </div>
                        </div>
                    </div>                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#bda4f7]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#bda4f7]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero border rounded-xl   bg-[#ded2fa]">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className="max-w-sm rounded-lg shadow-2xl" src="https://i.ibb.co/G3yZcBs/side-view-man-painting-canvas.jpg" />
                            <div>
                                <h1 className="text-5xl font-bold"> Capture the Human Spirit with Portrait Drawing!</h1>
                                <p className="py-6">Portrait drawing is an art form that goes beyond capturing likeness; it is about conveying the essence and emotion of the subject. Learn to draw lifelike portraits that tell a story and connect with viewers on a deep, emotional level. Explore techniques for rendering facial features, expressions, and personality in your drawings.</p>
                                <Link to="/allcraft"> <button className="btn btn-primary">Explore Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#bda4f7]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#bda4f7]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero border rounded-xl  bg-[#ded2fa]">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className="max-w-sm rounded-lg shadow-2xl" src="https://i.ibb.co/zxFksK8/medium-shot-woman-holding-comics.jpg"  />
                            <div>
                                <h1 className="text-5xl font-bold">Embrace the Fluid Beauty of Watercolour Painting</h1>
                                <p className="py-6">Experience the delicate and expressive nature of watercolour painting. This medium is perfect for capturing the subtle nuances of light and color in your artwork. Learn to control the fluidity of watercolours to create beautiful washes and intricate details, making each painting a unique masterpiece.</p>
                                <Link to="/allcraft"> <button className="btn btn-primary">Explore Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#bda4f7]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#bda4f7]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero border rounded-xl  bg-[#ded2fa]">
                        <div className="hero-content flex-col lg:flex-row">
                            <img className="max-w-sm rounded-lg shadow-2xl" src="https://i.ibb.co/31S4Y9H/guitar-painting-image.jpg"  />
                            <div>
                                <h1 className="text-5xl font-bold">Unleash Your Creativity with Oil Painting!</h1>
                                <p className="py-6">Step into the world of oil painting, a beloved medium for artists throughout history. Known for its versatility and vibrant colors, oil painting lets you create stunning artworks with depth and realism. Whether you are a beginner or an experienced artist, explore techniques that will elevate your artistry to new heights.</p>
                                <Link to="/allcraft"> <button className="btn btn-primary">Explore Now</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#bda4f7]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#bda4f7]">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;