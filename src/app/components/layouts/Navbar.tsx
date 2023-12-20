import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a
                href="/"
                className="flex items-center py-5 px-2 text-white hover:text-gray-200"
              >
                <span className="font-bold">ロゴ</span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-white hover:text-gray-200">
                ホーム
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-200">
                特徴
              </a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-200">
                料金
              </a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="py-2 px-3 bg-blue-700 hover:bg-blue-600 text-white rounded transition duration-300"
            >
              ログイン
            </a>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}{" "}
      {/*
  <div className="mobile-menu hidden md:hidden">
    <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700">
      ホーム
    </a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700"> 特徴 </a>
    <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-700"> 料金 </a>
  </div>
  */}
    </nav>
  );
};
export default Navbar;
