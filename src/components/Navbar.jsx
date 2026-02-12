import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import CartCountBadge from "./CartCountBadge";
import Login from "../pages/Login"; // make sure this path is correct

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center pt-8">
          {/* Logo */}
          <h1 className="text-4xl font-medium p-[15px]">Logo</h1>

          {/* Search Bar */}
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
              type="text"
              placeholder="search product..."
            />
            <IoSearchOutline
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>

          {/* Right Icons / Login Button */}
          <div className="flex gap-4 items-center">
            {/* Login Button */}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Login
            </button>

            {/* Shopping Cart */}
            <div className="icon_wrapper relative">
              <CiShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && <Login closeModal={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;


