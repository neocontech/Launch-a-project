import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/logo.png";
import { FiCircle, FiX } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuClass = `fixed top-12 right-0 h-full w-full bg-white z-50 p-4 transform transition-transform ease-in-out duration-700 ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <>
      <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
        <div className="py-5 ">
          {/* desktop view */}
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
            <div className="flex justify-between xsm:hidden sm:hidden">
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
            <div className="hidden xsm:block sm:block ">
              {isMobileMenuOpen ? (
                <FiX
                  className="my-auto text-2xl text-ngl_black"
                  onClick={closeMobileMenu}
                />
              ) : (
                <HiMenuAlt3
                  className="my-auto text-2xl text-black"
                  onClick={toggleMobileMenu}
                />
              )}
            </div>
          </div>
          {/* mobile view */}

          <div className={mobileMenuClass}>
            {" "}
            {isMobileMenuOpen && (
              <div className="text-end">
                <div className="my-2">
                  <Link href="/" className="text-base font-regular">
                    <p className="text-lap_gray_light">Why</p>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href="/" className="text-base font-regular">
                    <p className="text-lap_gray_light">Community</p>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href="/" className="text-base font-regular">
                    <p className="text-lap_gray_light">Blog</p>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href="/" className="text-base font-regular">
                    <p className="text-lap_gray_light">About Us</p>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href="/" className="text-base font-bold">
                    <p className="text-lap_gray_light">Login</p>
                  </Link>
                </div>

                <div className="my-2">
                  <Link href="/" className="text-base font-bold">
                    <p className="text-lap_green">Apply as Freelancer</p>
                  </Link>
                </div>

                <div className="my-5">
                  <Link
                    href="/"
                    className="text-base text-white font-bold p-3 bg-lap_blue rounded-md hover:bg-blue-900 duration-700"
                  >
                    <button> Post a Project</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
