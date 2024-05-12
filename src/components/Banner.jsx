import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {  NavLink } from 'react-router-dom';


const img1 = "https://i.ibb.co/3p77c5H/pexels-souvenirpixels-417074.jpg"
const img2 = "https://i.ibb.co/GdDCf18/pexels-freestockpro-2166553.jpg"
const img3 = "https://i.ibb.co/YfLNcNz/pexels-jaime-reimer-1376930-2662116.jpg"
const img4 = "https://i.ibb.co/Gpc3YVT/pexels-sudipta-1603650.jpg"
const Banner = () => {
    return (
        <div className='rounded-md'>


            <Swiper className="mySwiper h-[500px]"
                // install Swiper modules
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >

                {/* 1 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img2})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Your Journey Begins With{' '}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>

                                        <Typewriter
                                            words={['Adventure', 'Travel', 'Tour', 'Camping!']}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h1>


                                <p>It`s not Just Travel. we create Lifelong Adventures</p>

                                <div>
                                    <NavLink to="/signIn" > <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Get Started`}</button></NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img3})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Your Journey Begins With{' '}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>

                                        <Typewriter
                                            words={['Adventure', 'Travel', 'Tour', 'Camping!']}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h1>


                                <p >It`s not Just Travel. we create Lifelong Adventures</p>
                                <div>
                                    <NavLink to="/signIn" > <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Get Started`}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img4})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Your Journey Begins With{' '}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>

                                        <Typewriter
                                            words={['Adventure', 'Travel', 'Tour', 'Camping!']}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h1>


                                <p >It`s not Just Travel. we create Lifelong Adventures</p>
                                <div>
                                    <NavLink to="/signIn" > <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Get Started`}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img1})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-200">
                                    Your Journey Begins With{' '}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>

                                        <Typewriter
                                            words={['Adventure', 'Travel', 'Tour', 'Camping!']}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h1>


                                <p>It`s not Just Travel. we create Lifelong Adventures</p>
                                <div>
                                    <NavLink to="/signIn" > <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">{`Get Started`}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>

        </div>
    );
};

export default Banner;