

const Banner = () => {
    return (
        <div className="">
            <div className="banner hero h-[600px] lg:h-[810px]  lg:min-h-screen " style={{ backgroundImage: 'url(../../../../public/Images/banner_img11.png'}}>
                <div className="w-full lg:max-w-7xl px-[20px] lg:px-[0px] mx-auto">
                    <div className="w-full lg:w-[610px] 2xl:w-[810px]">
                        <h1 className="mb-[30px] text-4xl lg:text-7xl font-extrabold text-white uppercase font-montserrat text-center lg:text-left">Refresh Your Routine Shape
                            Your <span className="bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text ">Fitness</span></h1>
                        <p className="mb-[80px] text-[#E8E8E8] text-[16px] lg:text-[20px] font-medium lg:font-medium text-center lg:text-left">Engaging in regular exercise not only amplifies well-being <br className="hidden lg:block" /> and fortifies the body but also diminishes the likelihood of <br className="hidden lg:block"/> injuries thereby optimizing.</p>
                        <div className="text-center lg:text-left">
                            <button className="text-[14px] lg:text-[20px] font-montserrat bg-[#51B700] text-[#E8E8E8] font-semibold rounded py-[10px] px-[14px] lg:py-[18px] lg:px-[30px] cursor-pointer relative hover:bg-[#A1F65E] hover:text-[#191919] ease-in duration-300 translate-x-1 hover:translate-x-2 hover:translate-y-1 ">Join Now</button>
                            <a className="text-[#E8E8E8] font-medium text-[14spx] lg:text-[20px] pl-5 hover:bg-gradient-to-r from-green-500 to-[#A1F65E] hover:text-transparent hover:bg-clip-text hover:translate-x-1 hover:ease-in-out cursor-pointer duration-200 hover:translate-y-1"><i className="fa-regular fa-circle-play mr-1 items-center text-[14px] lg:text-[24px]"></i> Watch Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;