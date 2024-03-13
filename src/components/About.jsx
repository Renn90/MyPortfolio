import React, { useRef } from "react";
import { useInView } from "framer-motion";
 
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  return (
    <div className="container text-white " ref={ref}>
      <p className="duration-850">About me</p>
      <hr className={`my-4 ${isInView && "width-anim"}`} />
      <h2 className="font-bold text-xl uppercase">
        Hello there!, i'm Faithful (Renn), a frontend developer with passion for
        creating beautiful and interactive user interfaces, i have a solid
        foundation using frontend technologies and an eye for important details.
        <br />i try to improve everyday and aspire to become a proficent
        software engineer. <br />I have over a year of experience working with
        different frontend technologies
      </h2>
      <h4 className="uppercase py-4 text-sm font-bold">
        Some of the few technologies i've worked with and still use include:
      </h4>
      <div className="font-bold text-xl uppercase tracking-wider">
        <h2 className="py-1"><span className="tracking-tighter">Languages:</span> HTML, CSS, JavaScript (ES6+), Typescript</h2>
        <h2 className="py-1"><span className="tracking-tighter">Frameworks:</span> React.js/Next.js, Sanity.io, Framer motion, Gsap</h2>
        <h2 className="py-1"><span className="tracking-tighter">State Management:</span> Redux, Context API </h2>
        <h2 className="py-1"><span className="tracking-tighter">Version Control:</span> Git/GitHub</h2>
      </div>
      <h4 className="font-bold text-xl uppercase pt-4">
      I'm excited to continue my journey and create more magic!
      </h4>
    </div>
  );
};

export default About;
