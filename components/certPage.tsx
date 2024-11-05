"use client";

import Image from "next/image";
import qr from "./images/qr.svg";
import iconCert from "./images/logos/cert-icon.svg";

const CertPage = () => {
  return (
    <section className="relative h-[600px] bg-[#414A4C] overflow-hidden">
      <div className="container max-w-7xl mx-auto items-center h-full flex">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white">Our Certificate</h2>
          <p className="text-lg text-gray-300 mt-5">
            Our team holds essential certifications that demonstrate our commitment to quality and security. We continuously improve to meet your needs with trust and expertise, ensuring your security is always our priority.
          </p>
          <Image
            src={iconCert}
            alt="Icon Certificate"
            quality={100}
            className="mt-5"
          />
        </div>
      </div>
      <Image 
        src={qr}
        quality={100}
        width={1000}
        height={1000}
        alt="background image qr in certPage"
        className="absolute -right-96 -bottom-40"
        style={{ transform: 'rotate(25deg)' }}
      />
    </section>
  )
}

export default CertPage