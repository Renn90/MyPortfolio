import React, {useState, useEffect, useContext} from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import StaggeredText from "./Staggered";
import { client } from "../../client";
import { ScrollContexts } from "../../store/ScrollContext";

const Menu = ({ open, setOpen }) => { 

  const [contactLink, setContactLink] = useState([])
    const fetchParam = `*[_type == 'links']{
        x,
        gitHub,
    }`
    useEffect(()=> {
       const fetchLinks = async ()=> {
        try{
          const response = await client.fetch(fetchParam)
          console.log(response)
          if(response){
            setContactLink(response)
          }
        }catch(error){
            console.log(error)
        }
       }
       fetchLinks()
    },[])

    const {scrollFnc, homeRef, aboutRef, projectRef, contactRef} = useContext(ScrollContexts)

    const scrollHome =()=> {
      setOpen(false)
      scrollFnc(homeRef)
    }
    const scrollProject =()=> {
      setOpen(false)
      scrollFnc(projectRef)
    }
    const scrollAbout =()=> {
      setOpen(false)
      scrollFnc(aboutRef)
    }
    const scrollContact =()=> {
      setOpen(false)
      scrollFnc(contactRef)
    }

  return (
    <div className="fixed top-0 left-0 w-full z-[99]">
      <div
        className={`text-black menu ${open ? "active" : ""} overflow-hidden`}
      >
        <div className="flex flex-col h-full justify-center bebas-neue text-6xl">
          <span className="">
            <p className="cursor-pointer py-1 pl-2 overflow-hidden" onClick={scrollHome}><StaggeredText text={'Home'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden" onClick={scrollAbout}><StaggeredText text={'About'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden" onClick={scrollProject}><StaggeredText text={'Projects'.split('')}/></p>
            <p className="cursor-pointer py-1 pl-2 overflow-hidden" onClick={scrollContact}><StaggeredText text={'Contact'.split('')}/></p>
          </span>

          <div className="p-2 text-black flex justify-between w-2/3 text-4xl mt-[50px]">
            <a href={contactLink[0]?.gitHub}>
              <FaGithub />
            </a>
            <a href={contactLink[0]?.x}>
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
