import { Button } from "./ui/button";
import BgPaper from "./ui/bgPaper";

const Main = () => {
  return (
    <section className="sliding-main bg-[#020014] text-white py-0 h-screen flex items-center relative">
        <BgPaper z={-1} radius={0} opacity={10}/>
        <div className="max-w-7xl mx-auto my-10 leading-loose">
          <div className=" flex items-center justify-center max-w-2xl border-b-2 gap-5 py-4 px-5">
            <div className="rectangle-icon bg-[#008CF3]  w-52 h-52 shrink-0 rounded-2xl flex justify-center items-center opacity-100 relative">
              <BgPaper z={1} radius={18} opacity={25}/>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full text-white z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="xMidYMid meet">
                <polyline points="4 6 11 12 4 18"></polyline>
                <line x1="12" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
            <h2 className="md:text-5xl font-bold">No Vulnerability <br /> No Crashes <br /> So Sweet</h2>
          </div>
        </div>
    </section>
  )
}

export default Main