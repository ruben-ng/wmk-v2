import Image from "next/image";
import { Button } from "./button";

interface ServiceCardProps{
  title: string;
  description: string;
  icon: string;
  url: string;
}

const ServiceCard = ({title, description, icon, url} : ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-5">
        <Image 
            src={icon}
            alt="icon"
        />
        <div className="leading-relaxed">
            <h5 className="text-[#008CF3] text-xl font-semibold mb-3">{title}</h5>
            <p className="mb-5">{description}</p>
            {/* <Button>Learn More</Button> */}
            <a href={url} className="border-[3px] border-[#F95454] font-medium py-2 px-3 rounded-md hover:bg-[#F95454] hover:text-white transition-all duration-200">Learn More</a>
        </div>
    </div>
  )
}

export default ServiceCard