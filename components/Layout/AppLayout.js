import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = ({ header, children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
