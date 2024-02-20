// import from 

const Footer = () => {
    return (
        <div className="w-full lg:max-w-7xl mx-auto px-[20px] lg:px-0">
            <footer className="footer bg-[#1D2229] text-[#E8E8E8] pb-[40px]  justify-between font-poppins">

               
                    <nav>
                        <img src="../../../../public/Images/Logo.png" alt="" />
                        <p>A gym, also known as a fitness center or health <br />
                            club, is a facility dedicated to physical fitness and <br />
                            exercise gyms and typically offer a range</p>
                        <div className="grid grid-flow-col mt-5 lg:mt-10 gap-4">
                        <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] lg:h-[40px] border border-white hover:border-none flex items-center justify-center rounded-lg bg-transparent">
                                <i className="fab fa-facebook-f text-[#FFFFFF] text-[20px] "></i>
                            </a>
                            <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] lg:h-[40px] border border-white hover:border-none flex items-center justify-center  rounded-lg bg-transparent">
                                <i className="fab fa-twitter text-[#FFFFFF] text-[20px] "></i>
                            </a>
                            <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] lg:h-[40px] border border-white hover:border-none flex items-center justify-center  rounded-lg bg-transparent">
                                <i className="fab fa-instagram text-[#FFFFFF] text-[20px] "></i>
                            </a>
                            <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] lg:h-[40px] border border-white hover:border-none flex items-center justify-center  rounded-lg bg-transparent">
                                <i className="fab fa-linkedin-in text-[#FFFFFF] text-[20px] "></i>
                            </a>
                            <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] lg:h-[40px] border border-white hover:border-none flex items-center justify-center  rounded-lg bg-transparent">
                                <i className="fab fa-youtube text-[#FFFFFF] text-[20px] "></i>
                            </a>
                            <a href="#" className="w-[30px] lg:w-[40px] hover:bg-[#72AF43] custom-icon-hover h-[30px] border border-white hover:border-none lg:h-[40px] flex items-center justify-center rounded-lg bg-transparent">
                                <i className="fab fa-behance text-[#FFFFFF] text-[20px] "></i>
                            </a>
                        </div>
                    </nav>
                    <nav>
                        <header className="footer-title text-[#FFFFFF] hover:text-[#A1F65E]">Category</header>
                        <a className="link link-hover hover:text-[#A1F65E]">Strength Training</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Body Building</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Weight Lost</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Basic Yoga</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Physical Fitness</a>
                    </nav>
                    <nav>
                        <header className="footer-title text-[#FFFFFF] hover:text-[#A1F65E]">Company</header>
                        <a className="link link-hover hover:text-[#A1F65E]">About us</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Classes</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Trainers</a>
                        <a className="link link-hover hover:text-[#A1F65E]">Price</a>
                    </nav>
                    <nav >
                        <header className="footer-title  text-[#FFFFFF]  hover:text-[#A1F65E]">Contact Us</header>
                        <a className="link link-hover flex items-center hover:text-[#A1F65E]"><i className="fa fa-phone mr-2"></i> +1  269-537-1744</a>
                        <a className="link link-hover flex items-center hover:text-[#A1F65E]"> <i className="fa fa-envelope mr-2"></i>  Info@fitcore.com</a>
                        <a className="link link-hover flex items-center hover:text-[#A1F65E]"> <i className="fa fa-map-marker mr-2"></i>  3033 Goff Avenue, Michigan, <br />
                            Grand Rapids, USA</a>
                    </nav>
       

            </footer>

            <div className=" border-t-[1px] border-[#D8D4D433]"> 
                    <div className="flex flex-col-reverse lg:flex-row gap-[20px] justify-center lg:justify-between  pb-[20px] lg:pb-[40px] pt-5"> 
                    <p className="hover:text-[#A1F65E]">Copyright © 2024 FitCore</p>
                    <p className="hover:text-[#A1F65E]">CTerms Of Use | Privacy Policy</p>
                    </div>
                </div>

        </div>
    );
};

export default Footer;