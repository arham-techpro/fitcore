import { useState } from "react";

const PricingSection = () => {
  const [activeBtnTwo, setActiveBtnTwo] = useState(true);
  return (
    <div className="pt-[60px] lg:pt-[120px] bg-[#121212]">
      <div className="max-w-7xl px-[8px] lg:px-0 mx-auto">
        <h2 className="text-xl font-bold text-[#fff] tracking-[8px] uppercase mb-[10px] lg:mb-[30px] text-center font-poppins">
          Pricing
        </h2>
        <h3 className="text-3xl lg:text-5xl font-montserrat bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-bold text-center pb-2 mb-[30px] lg:mb-[60px]">
          Affordable Pricing Plans
        </h3>
      </div>

      {/* Card section  */}
      <div>
        <div className="flex justify-around w-[300px] mx-auto bg-white items-center py-2 rounded-sm">
          <label
            className={`btn  ${activeBtnTwo ? "bg-black text-[#eee]" : "text-[#000] bg-[#eee]"
              } hover:text-[#eee] hover:bg-[#000]` }
            onClick={() => {
              setActiveBtnTwo((activeBtnTwo) => !activeBtnTwo);
            }}
          >
            Billed Monthly
          </label>
          <label className={`btn hover:text-[#eee] hover:bg-[#000] ${activeBtnTwo ? "text-[#000] bg-[#eee]" : "bg-[#000] text-[#eee]"
              }`}
            onClick={() => {
              setActiveBtnTwo((activeBtnTwo) => !activeBtnTwo);
            }}
          >
            Billed Yearly
          </label>
        </div>

        <div
          role="tablist"
          className="tabs tabs-bordered w-full lg:max-w-7xl mx-auto px-[20px] lg:px-[0px]"
        >
          <div
            role="tabpanel"
            className={`${activeBtnTwo ? "block" : "hidden"}`}
          >
            <div className="w-full lg:max-w-7xl mx-auto px-[20px]  lg:px-[0px] mt-[80px] pb-[120px] flex flex-col lg:flex-row  gap-0 lg:gap-[5%]  ">
              {/* First card section */}
              <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover relative overflow-hidden lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
                <h1 className="text-[20px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] transition duration-200 ease-in-out">
                  Basic Package
                </h1>
                <p className="text-[#FFFFFF] font-montserrat text-6xl font-bold">
                  $25
                </p>
                <p className="text-[16px] font-normal text-[#959595] hover:text-[#FFFFFF] font-poppins">
                  per month, bill annually
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] font-poppins text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px] ">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i> 2x
                    Fitness Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i>1x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>3 Days per
                    week
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className="px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>

              {/* Second card section */}
              <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left bg-[#72AF43] relative overflow-hidden  lg:mt-[-40px]">
                <span className="absolute bg-white w-[200px] font-montserrat right-[-50px] top-[30px] text-center text-black py-2 rotate-45">
                  Best Offer
                </span>
                <h1 className="text-[20px] font-bold text-[#FFFFFF] font-montserrat">
                  Mid Package
                </h1>
                <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">
                  $55
                </p>
                <p className="text-[16px] font-normal text-[#FFFFFF] font-poppins">
                  per month, bill annually
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] font-poppins pb-[30px] lg:pb-[120px]">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> 4x Fitness
                    Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>3x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>5 Days per
                    week
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className=" px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>

              {/* third card section */}
              <div className="pricing-card lg:mb-0  border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover  relative overflow-hidden  lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
                <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-500 font-montserrat to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] ">
                  Pro Package
                </h1>
                <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">
                  $75
                </p>
                <p className="text-[16px] font-normal text-[#959595] font-poppins">
                  per month, bill annually
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px] font-poppins">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> 5x Fitness
                    Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>5x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Gym Card
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className=" px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className={`${activeBtnTwo ? "hidden" : "block"}`}>
            <div className="px-[20px] lg:px-[0px] mt-[80px] pb-[120px] flex flex-col lg:flex-row  gap-0 lg:gap-[5%]  ">
              {/* First card section */}
              <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover relative overflow-hidden lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
                <h1 className="text-[20px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px]">
                  Basic Package
                </h1>
                <p className="text-[#FFFFFF] font-montserrat text-6xl font-bold">
                  $285
                </p>
                <p className="text-[16px] font-normal text-[#959595] hover:text-[#FFFFFF] font-poppins">
                  Per year, save 5% Less
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] font-poppins text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px]">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i> 2x
                    Fitness Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2 "></i>1x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>3 Days per
                    week
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className=" px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>
              {/* Second card section */}
              <div className="pricing-card mb-[32px] lg:mb-0 border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left bg-[#72AF43] relative overflow-hidden  lg:mt-[-40px]">
                <span className="absolute bg-white w-[200px] font-montserrat right-[-50px] top-[30px] text-center text-black py-2 rotate-45">
                  Best Offer
                </span>
                <h1 className="text-[20px] font-bold text-[#FFFFFF] font-montserrat">
                  Mid Package
                </h1>
                <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">
                  $610
                </p>
                <p className="text-[16px] font-normal text-[#FFFFFF] font-poppins">
                  Per year, save 7% Less
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] font-poppins pb-[30px] lg:pb-[120px]">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> 4x Fitness
                    Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>3x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>5 Days per
                    week
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className=" px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>
              {/* third card section */}
              <div className="pricing-card lg:mb-0  border border-white lg:border-0 p-[68px] w-full lg:w-[30%] space-y-3 lg:space-y-6 text-left custom-paragraph-hover  relative overflow-hidden  lg:hover:mt-[-40px] hover:bg-[#72AF43] group lg:hover:translate-y-0 transition ease-in duration-300">
                <h1 className="text-[20px] font-bold bg-gradient-to-r from-green-500 font-montserrat to-[#A1F65E] text-transparent bg-clip-text group-hover:pt-[22px] ">
                  Pro Package
                </h1>
                <p className="text-[#FFFFFF] text-6xl font-bold font-montserrat">
                  $820
                </p>
                <p className="text-[16px] font-normal text-[#959595] font-poppins">
                  Per year, save 9% Less
                </p>
                <div className="space-y-2 font-medium text-[14px] lg:text-[16px] text-[#E1E1E1] group-hover:pb-[30px] lg:group-hover:pb-[120px] font-poppins">
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Unlimited
                    Gym Access
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> 5x Fitness
                    Consultant
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i> Nutrition
                    Tracking
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>5x Free
                    Suplement
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Gym Card
                  </p>
                  <p>
                    <i className="fa-solid fa-circle-check mr-2"></i>Personal
                    Trainer
                  </p>
                </div>
                <button className=" px-[38px] py-[14px] font-medium text-base lg:text-lg rounded  font-poppins bg-white hover:bg-[#A1F65E] text-black border-[#72AF43]  transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;