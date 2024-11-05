import React from "react";
import Image, { StaticImageData } from 'next/image';
interface ProjectCardProps {
    imgUrl: string | StaticImageData;       // Define imgUrl as a string
    title: string;        // Define title as a string
    description: string;  // Define description as a string
  }
  
const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  return (
    <div className="hover:opacity-80 hover:border-2 border-yellow-300 rounded-xl overflow-hidden cursor-pointer">
        <div 
            className="h-52 md:h-72 rounded-t-xl"
            style={{ background: `url(${typeof imgUrl === 'string' ? imgUrl : imgUrl.src})`, backgroundSize: "cover" }}>

        </div>
        <div className="text-black leading-relaxed ">
            <h5 className="font-bold text-2xl mt-5">{title}</h5>
            <p className="mt-4">{description}</p>
            <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md mt-5">View Details</button>
        </div>
    </div>
  )
}

export default ProjectCard;