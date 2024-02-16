import React from "react";
import Image from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div className="headerContainer">

      <img src={Image} alt="investment calculator" />
      <p>Investment Calculator</p>
    </div>
  );
}

export default Header;
