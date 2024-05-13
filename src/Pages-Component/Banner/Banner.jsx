import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";


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
                        <div id="slide1" className="carousel-item relative w-full">

                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>ORDER FOOD DELIVERY</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            
                        <Link to="/allFoods">
                        <button className="btn btn-outline btn-secondary">Explore Now</button>
                        </Link>
                        </div>
                    </div>
                </div>
                          
                            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnQlMjBtYW5hZ2VyfGVufDB8fDB8fHww" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
                    {/* slider 2 */}
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative w-full  rounded-xl">

                            {/* ************ */}

                            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>WE GET WHAT YOU LOVE</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <Link to="/allFoods">
                        <button className="btn btn-outline btn-secondary">Explore Now</button>
                        </Link>
                        </div>
                    </div>
                </div>
                            {/* ************ */}

                            <img src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg" className="w-full h-[650px] rounded-xl" />
                        </div> 
                    </SwiperSlide>
                    {/* slider 3 */}
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative w-full ">

                            {/* ************ */}
                            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>ORDER TAKEAWAY ONLINE</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <Link to="/allFoods">
                        <button className="btn btn-outline btn-secondary">Explore Now</button>
                        </Link>
                        </div>
                    </div>
                </div>

                            {/* ************ */}

                            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
                    {/* slider 4 */}
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative w-full">

                            {/* ************ */}

                            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Foods Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <Link to="/allFoods">
                        <button className="btn btn-outline btn-secondary">Explore Now</button>
                        </Link>
                        </div>
                    </div>
                </div>
                            {/* ************ */}

                            <img src="https://png.pngtree.com/background/20230621/original/pngtree-rapidly-satisfy-your-hunger-with-3d-fast-food-background-03-picture-image_3910286.jpg" className="w-full h-[650px] rounded-xl" />
                        </div>
                    </SwiperSlide>
               </div>
       </Swiper>
    );
};

export default Banner;


