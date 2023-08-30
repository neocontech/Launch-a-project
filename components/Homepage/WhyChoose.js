import React from "react";
import Image from "next/image";
import star from "../../public/assets/homepage/about/star.png";
import help from "../../public/assets/homepage/about/help.png";
import borderstar from "../../public/assets/homepage/about/bordstar.png";
import doller from "../../public/assets/homepage/about/doller.png";
import lock from "../../public/assets/homepage/about/lock.png";
import vector from "../../public/assets/homepage/about/vector.png";
import Link from "next/link";

function WhyChoose() {
  return (
    <>
      <div className="py-5">
        <div className="flex justify-between xsm:flex-col sm:flex-col w-full">
          <div className="w-1/2 xsm:w-full sm:w-full">
            <div className="bg-gradient-to-tr from-[#DEF7F2] to-[#0DB14B]/30 rounded-r-md">
              <div className="flex flex-col py-20 px-10 pl-40 xsm:px-5  xsm:py-10 sm:px-5  sm:py-10">
                <p className="text-4xl text-lap_black font-medium pb-5">
                  We've <br />
                  earned lot of <br />
                  achievements
                </p>
                <div className="flex flex-row pb-2">
                  <Image src={star} alt="star.png" className="w-auto h-7" />
                  <div className="flex flex-col pl-1">
                    <p className="text-2xl font-medium text-lap_black">4.9/5</p>
                    <p className="text-base font-regular text-lap_gray_light">
                      Clients rate professionals on Project
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <Image src={help} alt="help.png" className="w-auto h-7" />
                  <div className="flex flex-col pl-1">
                    <p className="text-2xl font-medium text-lap_black">
                      24/h Supports
                    </p>
                    <p className="text-base font-regular text-lap_gray_light">
                      We provide 24 hours best Supports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 xsm:hidden sm:hidden block"></div>
          <div className="hidden xsm:block sm:block">
            <Image
              src={vector}
              alt="vector.png"
              className="w-auto h-auto mx-auto"
            />
          </div>
          <div className="w-full">
            <div className="bg-gradient-to-r from-[#E1F5FE]/50 to-[#0089D0]/40 rounded-l-md">
              <div className="flex flex-col pt-12 pb-20 px-10 pl-40 xsm:px-5  xsm:py-10 sm:px-5  sm:py-10">
                <p className="text-4xl text-lap_black font-medium pb-6">
                  Why Everybody Choose <br />
                  <span className="text-lap_blue font-extrabold">
                    Launch
                  </span> a{" "}
                  <span className="text-lap_green font-extrabold">Project</span>
                  ?
                </p>
                <div className="flex flex-row pb-2">
                  <Image
                    src={borderstar}
                    alt="borderstar.png"
                    className="w-auto h-7"
                  />
                  <div className="flex flex-col pl-1">
                    <p className="text-2xl font-medium text-lap_black">
                      Proff of quality
                    </p>
                    <p className="text-base font-regular text-lap_gray_light">
                      Check any pro’s work samples, client reviews, and identity
                      verification.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row pb-2">
                  <Image src={doller} alt="doller.png" className="w-auto h-7" />
                  <div className="flex flex-col pl-1">
                    <p className="text-2xl font-medium text-lap_black">
                      No cost until you hire
                    </p>
                    <p className="text-base font-regular text-lap_gray_light">
                      Check any pro’s work samples, client reviews, and identity
                      verification.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <Image src={lock} alt="lock.png" className="w-auto h-7" />
                  <div className="flex flex-col pl-1">
                    <p className="text-2xl font-medium text-lap_black">
                      Safe and secure
                    </p>
                    <p className="text-base font-regular text-lap_gray_light">
                      We help protect your data and privacy. We’re here with
                      24/7 support if you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative xsm:hidden sm:hidden block">
          <div className="absolute -top-80 -mt-32 left-80 w-5/12">
            <Image src={vector} alt="vector.png" className=" h-auto" />
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="text-center">
          <p className="text-4xl font-medium text-lap_black pb-10">
            Ready to get started?
          </p>
          <Link href="/">
            <button className="text-white bg-lap_blue px-6 py-3 text-base font-bold rounded-md">
              Post a project now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
