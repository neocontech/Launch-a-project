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
                <Link href="/" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_gray_light font-regular">
                    Why
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_gray_light font-regular">
                    Community
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_gray_light font-regular">
                    Blog
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_gray_light font-regular">
                    About Us
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_gray_light font-bold">
                    Login
                  </a>
                </Link>
                <Link href="/" className="" legacyBehavior>
                  <a className="under mx-2 text-base text-lap_green font-bold">
                    Apply as Freelancer
                  </a>
                </Link>
              </div>

              <Link
                href="/"
                className="mx-2 text-base text-white font-bold p-3 bg-lap_blue rounded-lg"
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
