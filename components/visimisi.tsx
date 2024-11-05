import Image from "next/image";
import visi from "./images/Visibility.svg";
import misi from "./images/Target.svg";
import bPaper from "./images/scrunched-up-paper.webp";

const visimisi = () => {
  return (
    <section className=" py-10 relative">
        {/* <div 
        className="absolute inset-0 opacity-25" 
        style={{
            backgroundImage: `url(${bPaper.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            zIndex: -1,
        }}></div> */}
        <div className="container mx-auto space-y-20 max-w-6xl">
            <div className="flex flex-wrap justify-between text-balance">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold">VISI</h2>
                    <p className="text-lg leading-relaxed">Menjadi penyedia layanan keamanan siber terkemuka global dengan solusi inovatif dan efektif dalam mengidentifikasi dan mengatasi ancaman serta memperkuat ketahanan organisasi melalui pendekatan Red Teaming dan Blue Teaming.</p>
                </div>
                <Image 
                    src={visi}
                    quality={100}
                    alt="visi-icon"
                    className="w-80 h-80 object-cover"
                />
            </div>
            <div className="flex flex-wrap flex-row-reverse justify-between text-balance">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold">MISI</h2>
                    <p className="text-lg leading-relaxed">Menjadi penyedia layanan keamanan siber terkemuka global dengan solusi inovatif dan efektif dalam mengidentifikasi dan mengatasi ancaman serta memperkuat ketahanan organisasi melalui pendekatan Red Teaming dan Blue Teaming.</p>
                </div>
                <Image 
                    src={misi}
                    quality={100}
                    alt="misi-icon"
                    className="w-80 h-80 object-cover"
                />
            </div>
        </div>
    </section>
  )
}

export default visimisi