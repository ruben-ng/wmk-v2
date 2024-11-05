import bPaper from "../images/scrunched-up-paper.webp";

interface BgPaperProps {
  z: number;
  radius: number;
  opacity: number;
}

const BgPaper = ({ z, radius, opacity } : BgPaperProps) => {
  return (
    <>
        <div 
            className={`absolute inset-0 opacity-${opacity}`} 
            style={{
                backgroundImage: `url(${bPaper.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                zIndex: z,
                borderRadius: radius,
        }}></div>
    </>
  )
}

export default BgPaper