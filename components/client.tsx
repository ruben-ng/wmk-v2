import Link from "next/link";
import Image from "next/image";
import logo1 from "./images/logos/008_1.png";
import logo2 from "./images/logos/008_2.png";
import logo3 from "./images/logos/008_3.png";
import logo4 from "./images/logos/008_4.png";
import logo5 from "./images/logos/008_5.png";
import logo6 from "./images/logos/008_6.png";

const logoClient = [
    {
        img: logo1,
        alt: 'Logo Client 1',
        title: 'Client 1',
    },
    {
        img: logo2,
        alt: 'Logo Client 2',
        title: 'Client 2',
    },
    {
        img: logo3,
        alt: 'Logo Client 3',
        title: 'Client 3',
    },
    {
        img: logo4,
        alt: 'Logo Client 4',
        title: 'Client 4',
    },
    {
        img: logo5,
        alt: 'Logo Client 5',
        title: 'Client 5',
    },
    {
        img: logo6,
        alt: 'Logo Client 6',
        title: 'Client 6',
    },
]


const Client = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col uppercase mb-10">
        <h2 className="text-[#77CDFF] font-bold text-2xl">Partners</h2>
        <div className="">
            <h1 className="font-bold text-4xl text-[#C62E2E] underline-custom pb-1">Who Believes in Us</h1>
        </div>
        <div className="flex gap-12 mt-5">
            {logoClient.map((logo, index) => (
                <div key={index}>
                    <Image 
                        src={logo.img}
                        alt={logo.alt}
                        width={200}
                        height={200}
                        quality={100}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Client