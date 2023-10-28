import React from "react";
import netflix1 from "../assets/netflix.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={netflix1} alt="logo" className="w-44" />
    </div>
  );
};

export default Header;
