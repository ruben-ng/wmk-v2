import BgPaper from "./ui/bgPaper";

const contact = () => {
  return (
    <section className="bg-[#020014] relative py-20 -z-0">
      <BgPaper z={-1} radius={0} opacity={10}/>
      
      <div className="container max-w-7xl mx-auto flex justify-between">
        <div className="max-w-xl space-y-5">
          <h2 className="text-[#77CDFF] font-semibold text-2xl">Contact Us</h2>
          <h1 className="text-[#C62E2E] font-bold text-5xl">We would Love To Hear From You</h1>
          <p className="text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          <div className="flex gap-4">
            <div className="hover:opacity-70 duration-200 w-[50px] h-[50px] rounded-full bg-[#0D92F4] justify-center items-center flex cursor-pointer">
              <i className='text-white text-2xl bx bxl-instagram-alt' ></i>
            </div>
            <div className="hover:opacity-70 duration-200 w-[50px] h-[50px] rounded-full bg-[#0D92F4] justify-center items-center flex cursor-pointer">
              <i className='text-white text-2xl bx bxl-linkedin'></i>
            </div>
            <div className="hover:opacity-70 duration-200 w-[50px] h-[50px] rounded-full bg-[#0D92F4] justify-center items-center flex cursor-pointer">
              <i className='text-white text-2xl bx bxl-facebook'></i>
            </div>
            <div className="hover:opacity-70 duration-200 w-[50px] h-[50px] rounded-full bg-[#0D92F4] justify-center items-center flex cursor-pointer">
              <i className='text-white text-2xl bx bxl-twitter' ></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <input 
                type="text" 
                placeholder="Name" 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
                type="text" 
                placeholder="Phone Number" 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <input 
              type="email" 
              placeholder="Email" 
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
              placeholder="Write Your Message" 
              className="h-44 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              
          />
      </div>
      
      </div>
    </section>
  )
}

export default contact