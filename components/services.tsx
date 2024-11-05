"use client";

import Image from "next/image";
import icon1 from "./images/icons/iot.svg";
import icon2 from "./images/icons/Eye.svg";
import icon3 from "./images/icons/Shield.svg";
import icon4 from "./images/icons/User.svg";
import ServiceCard from "./ui/serviceCard";

const data = [
  {
    title: "INTERNET OF THINGS",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: icon1,
    url: "/#",
  },
  {
    title: "Security Operation Center",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: icon2,
    url: "/#",
  },
  {
    title: "Penetration Testing",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: icon3,
    url: "/#",
  },
  {
    title: "Security Consultant",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    icon: icon4,
    url: "/#",
  },
];

const Services = () => {
  return (
    <section className="py-14">
      <div className="container max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {data.map((d, index) => (
                <ServiceCard key={index} title={d.title} description={d.description} icon={d.icon} url={d.url}/>
                ))}
      </div>
      </div>
    </section>
  )
}

export default Services