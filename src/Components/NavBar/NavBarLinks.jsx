import React from "react";
import { Link, Element } from "react-scroll";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavBarLinks({ onClick }) {

  const handleClick = (page) => {
    onClick(false); // Call the parent's function with data
  };
  return (
    <ul className="flex gap-6 sm:gap-2 md:gap-6 text-white  text-center  lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl  backdrop-blur-lg md:bg-none lg:bg-none sm:w-full py-2">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            onClick={() => handleClick(link)}
            className={`group text-cyan `}
          >
            <Link
              onClick={() => handleClick(link)}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              to={link.section}
              className={`text-white cursor-pointer font-body text-[15px]  hover:text-cyan transition-all duration-500`}
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarLinks;
