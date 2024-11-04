import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi"; // Importing icons from react-icons library
import { MdOutlineContactPhone, MdOutlineHome } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiBubbleChartLine } from "react-icons/ri";

const HeaderNav = () => {
  const [navBg, setNavBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${
        navBg ? "bg-white text-gray-600 font-bold" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl" onClick={closeMobileMenu}>
              <img src="/logo.png" alt="" className="w-16" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="flex items-center gap-2  font-bold hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              <MdOutlineHome className="text-xl" />
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center gap-2  font-bold hover:text-gray-900 focus:outline-none"
              >
                <FaRegUserCircle className="text-xl" />
                About
                <HiChevronDown className="ml-1 h-5 w-5" />
              </button>
              <div
                className={`absolute w-48 hidden group-hover:block bg-white shadow-md border-t-2 border-custom`}
              >
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Our Values
                </Link>
                <Link
                  to="/salient"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Our Salient
                </Link>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Our Team
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center gap-2  font-bold hover:text-gray-900 focus:outline-none"
              >
                <RiBubbleChartLine className="text-xl" />
                Services
                <HiChevronDown className="ml-1 h-5 w-5" />
              </button>
              <div
                className={`absolute w-48 hidden group-hover:block bg-white shadow-md border-t-2 border-custom`}
              >
                <Link
                  to="/JapanesLangCourse"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Japanese Language Course in Pakistan
                </Link>
                <Link
                  to="/japaneseinjapan"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Study Visa Japan
                </Link>
                <Link
                  to="/titp"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Business Manager visa for Japan
                </Link>

                <Link
                  to="/titp"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  TITP Program
                </Link>
                <Link
                  to="/titp"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeMobileMenu}
                >
                  Specified Skilled Workers Visa For Japan
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 font-bold hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              <MdOutlineContactPhone className="text-xl" />
              Contact Us
            </Link>
            <Link
              to="/register"
              className="font-bold bg-custom hover:shadow-lg text-white py-2 px-4 rounded hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              <button className="w-full h-full">Register</button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="font-bold hover:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden bg-white"
        } px-2 pt-2 pb-3 space-y-1 sm:px-3`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMobileMenu}
        >
          <MdOutlineHome className="text-xl" />
          Home
        </Link>
        <div className="relative group">
          <button
            onClick={toggleAboutDropdown}
            className="gap-2 px-3 py-2 rounded-md text-base font-medium focus:outline-none flex items-center justify-between"
          >
            <FaRegUserCircle className="text-xl" />
            About
            <HiChevronDown className="h-5 w-5" />
          </button>
          <div
            className={`bg-white shadow-md ${
              aboutDropdownOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              Our Values
            </Link>
            <Link
              to="/salient"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              Our Salient
            </Link>
            <Link
              to="/team"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              Our Team
            </Link>
          </div>
        </div>
        <div className="relative group">
          <button
            onClick={toggleServicesDropdown}
            className="gap-2 px-3 py-2 rounded-md text-base font-medium focus:outline-none flex items-center"
          >
            <RiBubbleChartLine className="text-xl" />
            Services
            <HiChevronDown className="ml-1 h-5 w-5" />
          </button>
          <div
            className={`bg-white shadow-md ${
              servicesDropdownOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/JapanesLangCourse"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              Japanese Language Course in Pakistan
            </Link>
            <Link
              to="/japaneseinjapan"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              Study Visa Japan
            </Link>
            <Link
              to="/titp"
              className="block px-4 py-2 text-gray-800"
              onClick={closeMobileMenu}
            >
              TITP Program
            </Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMobileMenu}
        >
          <MdOutlineContactPhone className="text-xl" />
          Contact Us
        </Link>
        <Link
          to="/register"
          className="bg-custom hover:shadow-lg text-white py-2 px-4 rounded"
          onClick={closeMobileMenu}
        >
          <button className="w-full h-full">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderNav;
