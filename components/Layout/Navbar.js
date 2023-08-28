import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="px-40">
        <div className="py-5 ">
          <div className="flex justify-between ">
            <div className="my-auto">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo.png"
                  className=""
                  height={25}
                  width={205}
                />
              </Link>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between my-auto">
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-regular"
                >
                  <p className="text-lap_gray_light">Why</p>
                </Link>
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-regular"
                >
                  <p className="text-lap_gray_light">Community</p>
                </Link>
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-regular"
                >
                  <p className="text-lap_gray_light">Blog</p>
                </Link>
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-regular"
                >
                  <p className="text-lap_gray_light">About Us</p>
                </Link>
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-bold"
                >
                  <p className="text-lap_gray_light">Login</p>
                </Link>
                <Link
                  href="/"
                  className="under navlink mx-2 text-base font-bold"
                >
                  <p className="text-lap_green">Apply as Freelancer</p>
                </Link>
              </div>

              <Link
                href="/"
                className="mx-2 text-base text-white font-bold p-3 bg-lap_blue rounded-md hover:bg-blue-900 duration-700"
              >
                <button> Post a Project</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
