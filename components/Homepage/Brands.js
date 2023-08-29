import React from "react";
import Image from "next/image";
import lock from "../../public/assets/homepage/company/Vector.png";
import google from "../../public/assets/homepage/company/Google.png";
import github from "../../public/assets/homepage/company/Github.png";
import godaddy from "../../public/assets/homepage/company/Godaddy.png";
import microsoft from "../../public/assets/homepage/company/Microsoft.png";
function Brands() {
  return (
    <>
      <div className="bg-lap_gray_200">
        <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
          <div className="py-5">
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className="flex flex-row  w-3/12 xsm:w-full sm:w-full xsm:flex-col sm:flex-col xsm:pb-5 sm:pb-5 sm:text-center xsm:text-center">
                <div className="xsm:pb-3 sm:pb-3">
                  <Image
                    src={lock}
                    alt="lock.png"
                    className="h-8 w-8 xsm:h-6 sm:h-6 xsm:w-6 sm:w-6 xsm:mx-auto sm:mx-auto "
                  />
                </div>
                <div className="">
                  <p className="text-lg xsm:text-base text-lap_gray_light font-medium leading-none px-2 ">
                    Trusted by Leading{" "}
                    <br className="block xsm:hidden sm:hidden" />
                    Brands & Company
                  </p>
                </div>
              </div>
              <div className="w-9/12 xsm:w-full sm:w-full grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2 gap-4">
                {" "}
                <div>
                  <Image
                    src={google}
                    alt="google.png"
                    className="mx-auto w-auto h-8 xsm:h-6 sm:h-6"
                  />
                </div>
                <div>
                  <Image
                    src={github}
                    alt="github.png"
                    className="mx-auto w-auto h-8 xsm:h-6 sm:h-6"
                  />
                </div>
                <div>
                  <Image
                    src={godaddy}
                    alt="godaddy.png"
                    className="mx-auto w-auto h-8 xsm:h-6 sm:h-6"
                  />
                </div>
                <div>
                  <Image
                    src={microsoft}
                    alt="microsoft.png"
                    className="mx-auto w-auto h-8 xsm:h-6 sm:h-6"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
