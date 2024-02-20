import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Client2 = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-auto lg:max-w-7xl px-[20px] lg:px-0 mx-auto ">
            <h2 className="text-xl font-bold text-[#fff] tracking-[8px] uppercase mt-[60px] lg:mt-[120px] mb-5 font-poppins"> Testimonials</h2>
            <h2 className="text-3xl gl:text-5xl bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-bold mb-8 lg:mb-16 font-montserrat">What Say About Our Clients</h2>


            <div className="max-w-7xl mx-auto mb-[60px] lg:mb-[120px]">
                <Slider {...settings}>
                    <div>
                        <div className="flex items-start w-full lg:items-center flex-col lg:flex-row lg:border-0 p-8 lg:p-0 rounded-md">

                            <img src="../../../../public/Images/Client_Section.jpg" className="w-[150px] lg:w-[384px] rounded-full lg:rounded-[2px] " />
                            <div className=" lg:ml-[140px] text-[#FFFFFFCC] text-[16px] lg:text-[20px] font-medium">
                                <p className="py-6">“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”</p> <br />
                                <p>Jonathan Edward</p>
                                <p className="text-[17px] font-normal">Athletes</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex  items-start lg:items-center flex-col lg:flex-row lg:border-0 p-8 lg:p-0 rounded-md">

                            <img src="../../../../public/Images/client2.jpg" className="w-[150px] lg:w-[384px] rounded-full lg:rounded-[2px] " />
                            <div className=" lg:ml-[140px] text-[#FFFFFFCC] text-[16px] lg:text-[20px] font-medium">
                                <p className="py-6">“ At the Fitness Trainer Company, Coach Davids personalized workouts unlocked newfound strength, speed, and endurance, exceeding my expectations.”</p> <br />
                                <p>Eleanor Pena</p>
                                <p className="text-[17px] font-normal">Athletes</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <div className="w-full flex  items-start lg:items-center flex-col lg:flex-row  lg:border-0 p-8 lg:p-0 rounded-md">

                            <img src="../../../../public/Images/client3.jpg" className="w-[150px] lg:w-[384px] rounded-full lg:rounded-[2px] " />
                            <div className=" lg:ml-[140px] text-[#FFFFFFCC] text-[16px] lg:text-[20px] font-medium">
                                <p className="py-6">“ Thanks to the Trainers personalized sessions and guidance, I shed 20 pounds, regained confidence, and achieved a new level of well-being through diverse fitness attempts.”</p> <br />
                                <p>Cameron Williamson</p>
                                <p className="text-[17px] font-normal">Athletes</p>
                            </div>
                        </div>
                        
                    </div>

                </Slider>
            </div>


        </div>

    );
};
export default Client2;