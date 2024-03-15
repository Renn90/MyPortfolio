import React, { useEffect, useState } from "react";
import { client } from "../client";
import StaggeredText from "./UI/Staggered";
import imageUrlBuilder from "@sanity/image-url";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoDash, GoPlus } from "react-icons/go";
import live from "../assets/images/liveSite.png";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
  const [project, setProject] = useState([]);
  const [showDetails, setShowDetails] = useState(null);
  const [hoverGit, setHoverGit] = useState(false)


  const projectQuery = `*[_type == "Projects"] {
        _id,
        name,
        Detail,
        image,
        stack[] -> {
          name
        },
        gitlink,
        livelink
    }`;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await client.fetch(projectQuery);
        console.log(response);
        if (response) {
          setProject(response);
        } else {
          console.error("No response received from Sanity.io");
        }
      } catch (error) {
        console.error("Error fetching data from Sanity.io:", error);
      }
    };
    fetchProject();
  }, []);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const handleDetail = (id) => {
    console.log(id);
    if (showDetails === id) {
      setShowDetails(null);
    } else {
      setShowDetails(id);
    }
  };

  return (
    <>
      {project.length > 0 && (
        <div className="text-white py-4 pt-[150px] container flex flex-col items-center">
          <h1 className="text-4xl text-center uppercase overflow-hidden mb-[-10px] bebas-neue relative z-[999] md:mb-[-30px] sm:text-6xl md:text-8xl">
            <StaggeredText text={"FEATURED-PROJECTS".split("")} once={true} />
          </h1>
          {project.map((proj) => (
            <div className="w-full mb-8" key={proj._id}>
              <div className="w-full h-[380px] overflow-hidden rounded-t-[20px] relative md:h-[480px]">
                <img
                  src={urlFor(proj.image).url()}
                  className="rounded-t-[20px] h-full w-full object-cover hover:scale-105 transition-all duration-[2s] opacity-65"
                />
                <div
                  className={`${
                    showDetails === proj._id
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  } absolute top-4 right-6 cursor-pointer flex justify-between items-center rounded-full py-2 px-5 transition-all duration-500 ease-in-out z-[999]`}
                  onClick={() => handleDetail(proj._id)}
                >
                  <h1 className="uppercase">Details</h1>
                  <span className="ml-1 text-xl">
                    {showDetails === proj._id ? <GoDash /> : <GoPlus />}
                  </span>
                </div>
                {showDetails === proj._id && (
                  <div className="flex flex-col justify-center w-full h-full top-0 right-0 bg-white rounded-t-lg md:rounded-lg md:top-[70px] md:right-6 text-black absolute md:h-[300px] md:w-[300px]">
                    <p className="p-8 text-sm">
                      <h2 className="font-bold uppercase text-[grey] mb-2 text-center">
                        Project Details
                      </h2>
                      {proj.Detail}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-black px-[15px] py-14 rounded-b-[20px] flex justify-between items-center relative md:px-[80px]">
                <span>
                  <h1
                    className="text-6xl font-bold uppercase mb-4 bebas-neue"
                    style={{ letterSpacing: "-1px" }}
                  >
                    {proj.name}
                  </h1>
                  {proj.stack.map((stack, index) => (
                    <span className="py-2 text-sm inter px-5 rounded-full text-white bg-[#282828] uppercase mr-2" key={index}>
                      {stack.name}
                    </span>
                  ))}
                </span>
                <div className="flex jus items-center absolute right-5 top-[-30%] md:relative">
                <div className="bg-white p-3 rounded-full text-black mr-4 text-3xl cursor-pointer md:mr-8" onMouseLeave={() => setHoverGit(false)} onMouseEnter={() => setHoverGit(true)}>
              {hoverGit ?  <MdOutlineArrowOutward key='arrow' className="text-[grey]"/>  :  <FaGithub key='arrow'/> }
                </div>
                <div className="live rounded-full h-[120px] w-[120px] flex justify-center items-center cursor-pointer relative">
                  <img
                    src={live}
                    className="w-[80%] h-[80%] absolute circle z-[99] md:w-full md:h-full"
                  />
                  <div className="text-black text-2xl relative z-[999]">
                    <MdOutlineArrowOutward />
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Project;
