"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Img1 from "./images/img_1.webp";


const listTask = [
  {
    text: "Flexible Time",
  },
  {
    text: "Perfect Work",
  },
  {
    text: "Client Priority",
  },
  {
    text: "Flexible Time",
  },
  {
    text: "Perfect Work",
  },
  {
    text: "Client Priority",
  },
]

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = Math.ceil(end / (duration / 50)); // Adjusting increment for smooth counting

      const counter = setInterval(() => {
          start += increment;
          if (start > end) {
              start = end;
              clearInterval(counter);
          }
          setCount(start);
      }, 50);

      return () => clearInterval(counter);
  }, [end]);

  return (
      <div className="text-center">
          <h2 className="font-[1000] text-4xl">{count}{end === 5 ? 'Y' : '+'}</h2>
          <span className="text-[#008CF3]">{label}</span>
      </div>
  );
}


const About = () => {
  return (
    <section className="sliding-edge bg-[#F8F8F8] text-black py-32">
      <div className="container mx-auto max-w-7xl flex flex-col space-y-28">
        <div className="flex justify-between gap-10">
            <div className=" w-[600px] h-[300px] rounded-xl border-[2px] shadow-xl flex-shrink-0 overflow-hidden">
              <Image 
                src={Img1}
                alt="Pict About"
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-urgency">
              <h2 className="text-[#77CDFF] text-2xl font-bold mb-1">URGENCY</h2>
              <h1 className="font-extrabold text-3xl text-[#C62E2E] mb-5">WE ARE PERFECT TEAM FOR YOUR PROBLEM</h1>
              <p className="leading-relaxed">Indonesia menghadapi tantangan serius dalam cyber security, dengan meningkatnya serangan siber dan kebocoran data. Menurut laporan Badan Siber dan Sandi Negara (BSSN), pada tahun 2023, terdapat lebih dari 403.990.813 anomali. (Sumber: BSSN)</p>
            </div>
        </div>

        <div className="flex justify-between gap-10">
          <div className="grid grid-row-4 space-y-10 ">
            <div className="head-box-text space-y-1">
              <h2 className="text-[#77CDFF] text-2xl font-bold">ABOUT US</h2>
              <h1 className="font-[1000] text-4xl text-[#C62E2E]">WE ARE PERFECT TEAM FOR YOUR PROBLEM</h1>
            </div>
            <div className=" leading-relaxed ">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <br></br>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
            <div className="grid grid-cols-2 ">
              {listTask.map((text, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className="bx bxs-check-circle text-2xl text-[#008CF3]"></i>
                  <span>{text.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Counter end={5} label="EXPERIENCE" />
              <Counter end={25} label="COMPLETE PROJECT" />
              <Counter end={500} label="TOTAL CLIENT" />
            </div>
          </div>
          <div className=" w-[550px] h-[600px] rounded-xl border-[2px] shadow-xl flex-shrink-0 overflow-hidden">
            <Image 
              src={Img1}
              alt="Pict About"
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About