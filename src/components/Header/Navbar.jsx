// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaAngleDoubleDown, FaBars, FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineContactPhone, MdOutlineHome } from "react-icons/md";
// import { RiBubbleChartLine } from "react-icons/ri";
// import { Navbar, MobileNav, Button } from "@material-tailwind/react";
// import Logo1 from "../../assets/Logo/logo.png";
// import classNames from "classnames";

// const CustomNavbar = () => {
//   const [navbarColor, setNavbarColor] = useState("bg-white");
//   const [textColor, setTextColor] = useState("text-black");
//   const [dropdownVisible, setDropdownVisible] = useState(null);
//   const [openNav, setOpenNav] = useState(false);

//   const changeNavbarColor = useCallback(() => {
//     if (window.scrollY >= 100) {
//       setNavbarColor("bg-black");
//       setTextColor("text-white");
//     } else {
//       setNavbarColor("bg-white");
//       setTextColor("text-black");
//     }
//   }, []);

//   const debouncedChangeNavbarColor = useCallback(() => {
//     const handleScroll = () => changeNavbarColor();
//     const debounceTimer = setTimeout(handleScroll, 100);
//     return () => clearTimeout(debounceTimer);
//   }, [changeNavbarColor]);

//   useEffect(() => {
//     window.addEventListener("scroll", debouncedChangeNavbarColor);
//     return () => {
//       window.removeEventListener("scroll", debouncedChangeNavbarColor);
//     };
//   }, [debouncedChangeNavbarColor]);

//   const handleDropdownToggle = useCallback((index) => {
//     setDropdownVisible((prevIndex) => (prevIndex === index ? null : index));
//   }, []);

//   const navItems = useMemo(() => [
//     {
//       to: "/",
//       exact: true,
//       icon: <MdOutlineHome className="text-xl" />,
//       label: "Home",
//     },
//     {
//       to: "/about",
//       icon: <FaRegUserCircle className="text-xl" />,
//       label: "About Us",
//       dropdown: [
//         { to: "/about", label: "Our Values" },
//         { to: "/salient", label: "Our Salient Features" },
//         { to: "/team", label: "Our Team" },
//       ],
//     },
//     {
//       to: "/services",
//       icon: <RiBubbleChartLine className="text-xl" />,
//       label: "Services",
//       dropdown: [
//         {
//           to: "/JapanesLangCourse",
//           label: "Japanese Language Courses in Pakistan",
//         },
//         { to: "/japaneseinjapan", label: "Study Visa for Japan" },
//         { to: "/titp", label: "TITP Program" },
//       ],
//     },
//     {
//       to: "/contact",
//       icon: <MdOutlineContactPhone className="text-xl" />,
//       label: "Contact Us",
//     },
//   ], []);

//   return (
//     <Navbar className={`fixed top-0 py-0 px-20 ${navbarColor} transition-colors duration-300 z-50`}>
//       <div className="lg:w-[90%] mx-auto flex items-center justify-between">
//         <Link
//           to="/"
//           className="flex items-center"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <img src={Logo1} alt="WSS-Logo" className="h-20 w-24" />
//         </Link>
//         <div className="hidden lg:block">
//           <ul className="flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="relative inline-block text-left"
//                 onMouseEnter={() => handleDropdownToggle(index)}
//                 onMouseLeave={() => handleDropdownToggle(null)}
//               >
//                 {item.dropdown ? (
//                   <>
//                     <button
//                       type="button"
//                       className={`flex items-center ${textColor} hover:text-gray-400 font-bold`}
//                       aria-expanded={dropdownVisible === index}
//                     >
//                       {item.icon}
//                       <span className="ml-2 font-bold">{item.label}</span>
//                       <FaAngleDoubleDown className="ml-1" />
//                     </button>
//                     <div
//                       className={classNames(
//                         "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition duration-300 ease-in-out",
//                         {
//                           "opacity-100 block": dropdownVisible === index,
//                           "opacity-0 hidden": dropdownVisible !== index,
//                         }
//                       )}
//                     >
//                       <ul className="py-1">
//                         {item.dropdown.map((subItem, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to={subItem.to}
//                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                             >
//                               {subItem.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <NavLink
//                     to={item.to}
//                     exact={item.exact}
//                     className={`${textColor} hover:text-gray-400 flex items-center font-bold`}
//                   >
//                     {item.icon}
//                     <span className="ml-2">{item.label}</span>
//                   </NavLink>
//                 )}
//               </li>
//             ))}
//             <Link to="/register">
//               <Button
//                 color=""
//                 size="sm"
//                 className="font-bold bg-[#0e87c4] text-xl"
//               >
//                 Register
//               </Button>
//             </Link>
//           </ul>
//         </div>
//         <div className="lg:hidden">
//           <button
//             className="flex items-center px-3 py-2 hover:text-blue-400"
//             onClick={() => setOpenNav(!openNav)}
//           >
//             <FaBars className="text-3xl text-custom" />
//           </button>
//         </div>
//       </div>
//       <MobileNav open={openNav}>
//         <ul className="flex flex-col items-start p-4 gap-4">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative inline-block text-left w-full">
//               {item.dropdown ? (
//                 <>
//                   <button
//                     type="button"
//                     className={`flex items-center ${textColor} hover:text-gray-400 w-full font-bold`}
//                     onClick={() => handleDropdownToggle(index)}
//                     aria-expanded={dropdownVisible === index}
//                   >
//                     {item.icon}
//                     <span className="ml-2">{item.label}</span>
//                     <FaAngleDoubleDown />
//                   </button>
//                   <div
//                     className={classNames(
//                       "mt-2 w-full bg-white rounded-md shadow-lg transition duration-300 ease-in-out",
//                       {
//                         "opacity-100 block": dropdownVisible === index,
//                         "opacity-0 hidden": dropdownVisible !== index,
//                       }
//                     )}
//                   >
//                     <ul className="py-1 w-full">
//                       {item.dropdown.map((subItem, subIndex) => (
//                         <li key={subIndex}>
//                           <Link
//                             to={subItem.to}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
//                           >
//                             {subItem.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </>
//               ) : (
//                 <NavLink
//                   to={item.to}
//                   exact={item.exact}
//                   className={`${textColor} hover:text-gray-400 flex items-center w-full`}
//                 >
//                   {item.icon}
//                   <span className="ml-2">{item.label}</span>
//                 </NavLink>
//               )}
//             </li>
//           ))}
//           <Link to="/register">
//             <Button color="blue" size="sm" className="w-full font-bold">
//               Register
//             </Button>
//           </Link>
//         </ul>
//       </MobileNav>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
