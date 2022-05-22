import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { WasherCard } from "components/WasherCard";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <WasherCard />
          <WasherCard />
          <WasherCard />
          <WasherCard />
          <WasherCard />
          <WasherCard />
         
        </div>
      </div>
      <Footer/>
    </>
  );
}
