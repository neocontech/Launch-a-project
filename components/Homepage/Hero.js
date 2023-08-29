import React from 'react'
import Image from "next/image";
import herovector from "../../public/assets/homepage/hero/herovector.png";

function Hero() {
  return (
    <>
      <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
        <div className="py-5">
          <div className="flex justify-between xsm:flex-col sm:flex-col">
            <div className="w-1/2 xsm:w-full sm:w-full my-auto">
              <p className="text-lap_black font-bold xsm:text-4xl sm:text-4xl text-56 leading-none">
                Hire the Top{" "}
                <span className="font-regular italic text-lap_green">
                  Talent
                </span>{" "}
                for your business
              </p>
              <p className="text-lg text-lap_gray_light font-regular text-justify py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                commodo mattis turpis enim sed tempus magna nunc. Lorem mollis
                ultricies consectetur semper.
              </p>
              <div className="flex flex-row">
                <button className="bg-lap_blue text-white text-base font-bold rounded-md px-6 py-3">
                  Post a Project
                </button>
                <button className="bg-lap_green text-white text-base font-bold rounded-md px-6 py-3 ml-10">
                  Find Works
                </button>
              </div>
            </div>
            <div className="w-1/2 xsm:w-full sm:w-full xsm:py-5 sm:py-5">
              <Image
                src={herovector}
                alt="herovector.png"
                className="mx-auto w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero