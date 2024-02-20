const AssetSection = () => {
  return (
    <div className="bg-[#191919] py-[60px] lg:py-[120px] " id="about">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[0px] ">
        <div className=" flex flex-col lg:items-center gap-10 lg:gap-16 lg:flex-row">
          <img
            src="../../../../public/Images/asset_section.png"
            className="hidden lg:block lg:w-[630px] rounded-lg shadow-2xl "
          />
          <img
            src="../../../../public/Images/asset_section.png"
            className="block lg:hidden w-full lg:w-[630px] rounded-lg"
          />
          <div className="space-y-2 lg:space-y-8">
            <h1 className="text-3xl lg:text-5xl leading-[32px] lg:leading-[58px] font-montserrat font-bold bg-gradient-to-r from-green-500 to-[#A1F65E] text-transparent bg-clip-text">
              Respect Your Body <br />
              It’s your Greatest <br />
              Asset
            </h1>
            <br />
            <div className="pb-[20px] lg:pb-10 space-y-0 lg:space-y-5 text-[#E8E8E8] font-poppins text-sm leading-5 lg:text-lg lg:leading-8">
              <p>
                <i className="fa-solid fa-circle-check mr-2"></i>Increase Muscle
                and Strength
              </p>
              <p>
                <i className="fa-solid fa-circle-check mr-2"></i>Be Healthier
                than before
              </p>
              <p>
                <i className="fa-solid fa-circle-check mr-2"></i>Increase
                Stamina
              </p>
            </div>
            <div className="flex gap-[15px] ">
              <button className="text-[14px] lg:text-[20px] font-montserrat bg-[#51B700] text-[#E8E8E8] font-semibold rounded py-[10px] px-[14px] lg:py-[18px] lg:px-[30px] cursor-pointer relative hover:bg-[#A1F65E] hover:text-[#191919] ease-in duration-300 translate-x-1 hover:translate-x-2 hover:translate-y-1 ">
                Join Now
              </button>

              <button className="text-[14px] lg:text-[20px] font-montserrat text-[#E8E8E8] border border-[#A1F65E] font-semibold rounded py-[10px] px-[14px] lg:py-[18px] lg:px-[30px] cursor-pointer relative hover:bg-[#A1F65E] hover:text-[#191919] ease-in duration-300 translate-x-1 hover:translate-x-2 hover:translate-y-1">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetSection;
