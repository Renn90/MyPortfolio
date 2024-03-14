import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import StaggeredText from "./Staggered";

const Menu = ({ open }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-[99]">
      <div
        className={`text-black menu ${open ? "active" : ""} overflow-hidden`}
      >
        <div className="flex flex-col h-full justify-center bebas-neue text-6xl">
          <span className="">
            <p className="cursor-pointer py-1 pl-2 overflow-hidden"><StaggeredText text={'Home'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden"><StaggeredText text={'About'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden"><StaggeredText text={'Projects'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden"><StaggeredText text={'Contact'.split('')}/></p>
          </span>

          <div className="p-2 text-black flex justify-between w-2/3 text-4xl mt-[50px]">
            <a href="https://github.com/Renn90">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Renny900">
              <FaXTwitter />
            </a>
            <a href="mailto:faithfulokondu@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;