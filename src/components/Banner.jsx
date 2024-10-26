import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const img1 = "https://i.ibb.co/3hTwDQ8/pexels-designecologist-1779487.jpg"
const img2 = "https://i.ibb.co/th3xJts/pexels-pixabay-267507.jpg"
const img3 = "https://i.ibb.co/KVfDHQw/pexels-divinetechygirl-1181271.jpg"
const img4 = "https://i.ibb.co/qYnKB3y/pexels-thisisengineering-3861972.jpg"
const Banner = () => {
    return (
        <div className='rounded-lg container mx-auto'>


            <Swiper className="mySwiper mt-[100px] md:mt-[130px] h-[500px] rounded-lg"
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
                    <div className="hero h-full " style={{ backgroundImage: `url(${img1})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Welcome to Job Assessment by BJET Inc. {""}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={[
                                                "Join",
                                                "Collaborate",
                                                "Innovate",
                                                "Grow",
                                                "Skillful",
                                                "Prosper"
                                            ]}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>


                                <p>This role offers an excellent chance for growth, where you will  be able to enhance your
                                    skills while contributing to the development of innovative web applications.</p>

                                <div>
                                    <NavLink to="/login" > <button className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center hover:bg-transparent border-2 border-primary hover:border-primary hover:text-primary transition-all duration-300 ">{`Explore now`}</button></NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img2})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Welcome to Job Assessment by BJET Inc. {""}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={[
                                                "Join",
                                                "Collaborate",
                                                "Innovate",
                                                "Grow",
                                                "Skillful",
                                                "Prosper"
                                            ]}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>


                                <p>This role offers an excellent chance for growth, where you will be able to enhance your
                                    skills while contributing to the development of innovative web applications.</p>
                                <div>
                                    <NavLink to="/login" > <button className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center hover:bg-transparent border-2 border-primary hover:border-primary hover:text-primary transition-all duration-300 ">{`Explore now`}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img3})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Welcome to Job Assessment by BJET Inc. {""}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={[
                                                "Join",
                                                "Collaborate",
                                                "Innovate",
                                                "Grow",
                                                "Skillful",
                                                "Prosper"
                                            ]}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>


                                <p>This role offers an excellent chance for growth, where you will be able to enhance your
                                    skills while contributing the development of innovative web applications.</p>
                                <div>
                                    <NavLink to="/login" > <button className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center hover:bg-transparent border-2 border-primary hover:border-primary hover:text-primary transition-all duration-300 ">{`Explore now`}</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className="hero h-full" style={{ backgroundImage: `url(${img4})` }}>

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md space-y-6">

                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-300">
                                    Welcome to Job Assessment by BJET Inc. {""}
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={[
                                                "Join",
                                                "Collaborate",
                                                "Innovate",
                                                "Grow",
                                                "Skillful",
                                                "Prosper"
                                            ]}
                                            loop={true}
                                            cursorColor='primary'
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>


                                <p>This role offers an excellent chance for growth, where you'll be able to enhance your
                                    skills while contributing to the development of innovative web applications.</p>
                                <div>
                                    <NavLink to="/login" > <button className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center hover:bg-transparent border-2 border-primary hover:border-primary hover:text-primary transition-all duration-300 ">{`Explore now`}</button></NavLink>
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