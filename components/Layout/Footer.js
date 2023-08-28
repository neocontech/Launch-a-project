import Link from "next/link";
import React from "react";
import Image from "next/image";
import insta from "../../public/assets/footer/instagram.png";
import facebook from "../../public/assets/footer/facebook.png";
import twitter from "../../public/assets/footer/twitter.png";
import youtube from "../../public/assets/footer/youtube.png";
import apple from "../../public/assets/footer/Apple Download.png";
import google from "../../public/assets/footer/Google Download.png";
import logo from "../../public/assets/logo.png";

function Footer() {
  return (
    <>
      <div className="bg-lap_gray_200">
        <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
          <div className="py-20">
            <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2  gap-6">
              <div>
                <div className="flex flex-col">
                  <div className="border-b border-lap_green">
                    <p className="text-lap_black_100 text-lg font-semibold mb-5">
                      Most In-demand Talent
                    </p>
                  </div>
                  <div className="flex flex-col pt-7">
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      iOS Developers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Front-end Developers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      UX Designers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      UI Designers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Financial Modeling Consultants
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      nterim CFOs
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Digital Project Managers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular"
                    >
                      AWS Experts
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="border-b border-lap_green">
                    <p className="text-lap_black_100 text-lg font-semibold mb-5">
                      Most In-demand Talent
                    </p>
                  </div>
                  <div className="flex flex-col pt-7">
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Clients
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Developers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Designers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Finance Experts
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Project Managers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Product Managers
                    </Link>

                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Freelance Jobs
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Specialized Services
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Utilities & Tools
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="border-b border-lap_green">
                    <p className="text-lap_black_100 text-lg font-semibold mb-5">
                      Contacts
                    </p>
                  </div>
                  <div className="flex flex-col pt-7">
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Press Center
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className="border-b border-lap_green">
                    <p className="text-lap_black_100 text-lg font-semibold mb-5">
                      Social
                    </p>
                  </div>
                  <div className="flex flex-col pt-7">
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      <Image
                        src={google}
                        alt="google.png"
                        className="w-auto h-10"
                      />
                    </Link>
                    <Link
                      href="/"
                      className="text-lap_gray_light text-sm font-regular mb-4"
                    >
                      <Image
                        src={apple}
                        alt="apple.png"
                        className="w-auto h-10"
                      />
                    </Link>
                    <div className="flex flex-row">
                      <Link href="/">
                        <Image
                          src={facebook}
                          alt="facebook.png"
                          className="w-auto h-6"
                        />
                      </Link>
                      <Link href="/" className="ml-3">
                        <Image
                          src={twitter}
                          alt="twitter.png"
                          className="w-auto h-6"
                        />
                      </Link>
                      <Link href="/" className="mx-3">
                        <Image
                          src={youtube}
                          alt="youtube.png"
                          className="w-auto h-6"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src={insta}
                          alt="insta.png"
                          className="w-auto h-6"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lap_gray_300">
        <div className="xsm:px-5 sm:px-5 md:px-5 px-40">
          <div className="py-5">
            <div className="flex justify-between xsm:flex-col sm:flex-col">
              <div className="flex flex-row">
                <Image src={logo} alt="logo.png" className="w-auto h-5" />
                <p className="text-base font-regular text-lap_black_100 pb-0 pl-2 mb-0">
                  © - 2022 Global Inc.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2 xsm:gap-2 sm:gap-2 xsm:pt-5 sm:pt-5 gap-3">
                  <Link
                    href="/"
                    className="text-base font-regular text-lap_black_100"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/"
                    className="text-base font-regular text-lap_black_100"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/"
                    className="text-base font-regular text-lap_black_100"
                  >
                    Cookie Settings
                  </Link>
                  <Link
                    href="/"
                    className="text-base font-regular text-lap_black_100"
                  >
                    Accessibility
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
