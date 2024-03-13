import React, { useEffect, useState } from "react";
import logo from "../assets/images/logoWhite.png";
import Menu from "./UI/Menu";

const Header = () => {
    const [open, setOpen] = useState(false)
    const toggleBar =()=> {
        setOpen((open=> !open))
    }
    useEffect(()=>{
      const checkScreen =()=> {
        if(window.innerWidth > 768){
          setOpen(false)
        }
      }
       window.addEventListener('resize', checkScreen)
    },[])
  return (
    <header className="container py-2 flex justify-between items-center">
      <span>
        <img src={logo} className="w-[25px]" />
        {/* <h1 className="text-white font-bold tracking-tighter">FO</h1> */}
      </span>
      <div className="relative hamburger cursor-pointer z-[999] hover:opacity-80 md:hidden" onClick={toggleBar}>
        <span className={`${open ? 'bg-black' : 'bg-white'} ${open && 'bar'}`} />
        <span className={`${open ? 'bg-black' : 'bg-white'} ${open && 'bar'}`} />
      </div>
     <Menu open={open}/>
      <ul className="text-white hidden md:flex">
        <li className="px-4 text-sm cursor-pointer hover:opacity-80">Home</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80">About</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80">Project</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80 pr-0">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
