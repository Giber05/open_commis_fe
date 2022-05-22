import React from "react";
import AssetConstants from "../../../../../../../core/constants/asset_constants";

function HeroBanner() {
  return (
    <>
      {/* // <!--Hero--> */}

      <div className="pt-24 bg-gradient-to-tr from-cyan-300 to-primary">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">What business are you?</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
            <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <div className="z-50"></div>
            <img className="w-full md:w-4/5 " src={`${AssetConstants.iconURL}logo/open_commiss.png`} />
          </div>
        </div>
       
      </div>
    </>
  );
}

export default HeroBanner;