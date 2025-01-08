import React from "react";

const Header = () => {
  return (
    <div className="bg-Button__color py-3">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h3 className="text-Text__color font-Poppins font-normal text-base">
              AhNaFjR
            </h3>
          </div>
          <div>
            <p className="text-Text__color font-Poppins font-normal text-sm">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <span className="cursor-pointer text-Button2__color">
                ShopNow
              </span>
            </p>
          </div>
          <div>
            <select
              name=""
              id=""
              className="text-Text__color bg-transparent font-Poppins font-normal text-base"
            >
              <option value="#">English</option>
              <option value="#">Bangla</option>
              <option value="#">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
