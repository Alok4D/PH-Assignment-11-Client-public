import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";


const Banner = () => {
    return (
        <Swiper
        
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper">
            
                <div className="carousel w-full">
                    {/* slider 1 */}
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-[80%] mx-auto ">

                            <div className="flex-1 absolute text-black md:ml-60 mt-10 md:mt-20 w-full md:w-auto">

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                Welcome <i className="text-[#FF497C]">Southeast <br /> Asia</i> Popular
                                Tourist Spots... 
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                A tourist spot, also referred to as a tourist <br /> attraction or destination, is a discernible geographical location...
                                </p>

                                <div className="flex justify-center md:justify-start">
                                <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                    <span className="mr-3"><i className="bx bx-hive"></i></span>Explore Now</button>
                                </div>
                            </div>
                          
                            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnQlMjBtYW5hZ2VyfGVufDB8fDB8fHww" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
                    {/* slider 2 */}
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative w-[80%] mx-auto rounded-xl">

                            {/* ************ */}

                            <div className="flex-1 absolute md:ml-60 text-black mt-10 md:mt-20 w-full md:w-auto">

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                Welcome <i className="text-[#FF497C]">Southeast <br /> Asia</i> Popular
                                Tourist Spots...
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                A tourist spot, also referred to as a tourist <br /> attraction or destination, is a discernible geographical location...
                                </p>

                                <div className="flex justify-center md:justify-start">
                                <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                    <span className="mr-3">
                                    <i className="bx bx-hive"></i>
                                    </span>
                                    Explore Now
                                </button>
                                </div>
                            </div>

                            {/* ************ */}

                            <img src="https://jalebi.io/wp-content/uploads/2023/08/mealpro-bqrz4lyA3PM-unsplash-1024x683.jpg" className="w-full h-[650px] rounded-xl" />
                        </div> 
                    </SwiperSlide>
                    {/* slider 3 */}
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative w-[80%] mx-auto">

                            {/* ************ */}

                            <div className="flex-1 absolute md:ml-60 text-black mt-10 md:mt-20 w-full md:w-auto">

                               <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                Welcome <i className="text-[#FF497C]">Southeast <br /> Asia</i> Popular
                                Tourist Spots... 
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                A tourist spot, also referred to as a tourist <br /> attraction or destination, is a discernible geographical location...
                                </p>

                                <div className="flex justify-center md:justify-start">
                                <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                    <span className="mr-3">
                                    <i className="bx bx-hive"></i>
                                    </span>
                                    Explore Now
                                </button>
                                </div>
                            </div>

                            {/* ************ */}

                            <img src="https://www.business-management-degree.net/wp-content/uploads/2021/04/shutterstock_780888979.jpg" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
                    {/* slider 4 */}
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative w-[80%] mx-auto">

                            {/* ************ */}

                            <div className="flex-1 absolute md:ml-60 text-black mt-10 md:mt-20 w-full md:w-auto">

                                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                                Welcome <i className="text-[#FF497C]">Southeast <br /> Asia</i> Popular
                                Tourist Spots...
                                </p>
                                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                                A tourist spot, also referred to as a tourist <br /> attraction or destination, is a discernible geographical location...
                                </p>

                                <div className="flex justify-center md:justify-start">
                                <button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#ab3154]">
                                    <span className="mr-3">
                                    <i className="bx bx-hive"></i>
                                    </span>
                                    Explore Now
                                </button>
                                </div>
                            </div>

                            {/* ************ */}

                            <img src="https://foodmanagement-deborah.weebly.com/uploads/4/7/3/7/47375131/4253692_orig.jpg" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
               </div>
       </Swiper>
    );
};

export default Banner;