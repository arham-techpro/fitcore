const ClassSection = () => {
  <style></style>;
  return (
    <section id="classes">
      <div className="mt-[60px] lg:mt-[120px] mb-[60px] lg:mb-[120px] w-full lg:max-w-7xl px-[20px] lg:px-[0px] mx-auto">
        <div>
          <h1 className="text-base pb-5 font-bold text-[#fff] tracking-[8px] uppercase font-poppins">
            Our Classes
          </h1>
          <div className="flex justify-between lg:items-center flex-col lg:flex-row">
            <h1 className="mb-[30px] lg:mb-0 text-3xl lg:text-5xl font-montserrat bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text font-extrabold pb-2">
              Personalized Fitness <br />
              Classes for Every Goal
            </h1>
            <button className="text-[14px] lg:text-[20px] font-montserrat text-[#E8E8E8] border border-[#A1F65E] font-semibold rounded py-[10px] px-[14px] lg:py-[18px] lg:px-[30px] cursor-pointer relative hover:bg-[#A1F65E] hover:text-[#191919] ease-in duration-300 translate-x-1 hover:translate-x-2 hover:translate-y-1 w-[140px] lg:w-[230px]">
              {" "}
              More Classes
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-[57px]">
          <div className="w-full lg:w-1/2 mb-[2%] lg:mb-0">
            <div className="card before--none rounded-none w-full lg:w-[98%]  image-full">
              <figure>
                <img
                  className="w-full"
                  src="../../../Images/class1.png"
                  alt="gym"
                />
              </figure>
              <div className="card-body flex items-center justify-center">
                <div className="w-[330px] text-center">
                  <h2 className="text-[32px] lg:text-4xl font-bold text-[#fff] font-poppins mb-[28px]">
                    Strength Training
                  </h2>
                  <p className="text-[#F3F3F3] font-normal text-[16px] lg:text-[20px] pb-[20px] lg:pb-[48px]">
                    Classes focusing on building muscle strength and endurance
                    through weightlifting and resistance exercises.
                  </p>
                  <div className="card-actions justify-center">
                    <button className="text-[14px] lg:text-[20px] font-montserrat bg-[#51B700] text-[#E8E8E8] font-semibold rounded py-[10px] px-[14px] lg:py-[18px] lg:px-[30px] cursor-pointer relative hover:bg-[#A1F65E] hover:text-[#191919] ease-in duration-300 translate-x-1 hover:translate-x-2 hover:translate-y-1">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-between">
            <div className="card w-[49%] rounded-none before--none  image-full">
              <figure>
                <img src="../../../Images/class2.png" alt="gym-body" />
              </figure>
              <div className="card-body"></div>
            </div>
            <div className="card w-[49%] rounded-none before--none  image-full">
              <figure>
                <img src="../../..//Images/class3.png" alt="gym-body" />
              </figure>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSection;
