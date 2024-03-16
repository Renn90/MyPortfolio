import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logoWhite.png";
import Menu from "./UI/Menu";
import { ScrollContexts } from "../store/ScrollContext";

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

    const {scrollFnc, homeRef, aboutRef, projectRef, contactRef} = useContext(ScrollContexts)

  return (
    <nav className="fixed top-0 left-0 w-full mx-auto bg-[#1a1a1a] z-[999]">
    <header className="container py-6 flex justify-between items-center">
      <span>
        <img src={logo} className="w-[25px]" />
        {/* <h1 className="text-white font-bold tracking-tighter">FO</h1> */}
      </span>
      <div className="relative hamburger cursor-pointer z-[999] hover:opacity-80 md:hidden" onClick={toggleBar}>
        <span className={`${open ? 'bg-black' : 'bg-white'} ${open && 'bar'}`} />
        <span className={`${open ? 'bg-black' : 'bg-white'} ${open && 'bar'}`} />
      </div>
     <Menu open={open} setOpen={setOpen}/>
      <ul className="text-white hidden md:flex">
        <li className="px-4 text-sm cursor-pointer hover:opacity-80" onClick={()=>scrollFnc(homeRef)}>Home</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80" onClick={()=>scrollFnc(aboutRef)}>About</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80" onClick={()=>scrollFnc(projectRef)}>Project</li>
        <li className="px-4 text-sm cursor-pointer hover:opacity-80 pr-0" onClick={()=> scrollFnc(contactRef)}>Contact</li>
      </ul>
    </header>
    </nav>
  );
};

export default Header;
