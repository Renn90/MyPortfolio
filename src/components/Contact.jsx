import React, { useEffect, useState } from "react";
import StaggeredText from "./UI/Staggered";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { client } from "../client";

const Contact = () => {
    const [contactLink, setContactLink] = useState([])
    const fetchParam = `*[_type == 'links']{
        x,
        gitHub,
        instagram,
        linkedIn
    }`
    useEffect(()=> {
       const fetchLinks = async ()=> {
        try{
          const response = await client.fetch(fetchParam)
          console.log(response, 'contact')
          if(response){
            setContactLink(response)
          }
        }catch(error){
            console.log(error)
        }
       }
       fetchLinks()
    },[])

    const textArray = 'Reach out to me!'.split("").map(char => char === ' ' ? '\u00A0' : char);

  return (
    <div className="container text-white flex flex-col items-center mt-[250px]">
      <h1 className="uppercase font-bold text-4xl overflow-hidden text-center"><StaggeredText text={textArray} once={false}/></h1>
      <p className="text-center my-4 w-[90%] mx-auto md:w-[70%]">
      I'm open to taking on creative and engaging web development projects.
       <br /> I'm available for freelance work, part-time roles, and junior developer positions. Feel free to contact me!
      </p>
      <a href="mailto:faithfulokondu@gmail.com" className="border-[1px] px-4 py-2 my-6 rounded transition-all duration-5000 hover:bg-white hover:text-black">
        SEND AN EMAIL
      </a>
     {contactLink.map((link, index)=> (
        <div className="flex my-4 text-4xl" key={index}>
        <a href={link?.x} className="mx-3">
        <FaXTwitter />
        </a>
        <a href={link?.gitHub} className="mx-3">
        <FaGithub />
        </a>
        <a href={link.instagram} className="mx-3">
        <FaInstagram />    
        </a>
        <a href={link.linkedIn} className="mx-3">
        <FaLinkedin />
        </a>
      </div>
     ))}
    </div>
  );
};

export default Contact;
