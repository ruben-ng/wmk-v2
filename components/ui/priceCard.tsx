interface PriceCardProps {
  title: string;
  description: string;
  asset: string;
  lists: string[];
  titleColour: string;
  iconColour: string;
  cardIndex: number;
}

const PriceCard = ({ title, description, asset, lists, titleColour, iconColour, cardIndex} : PriceCardProps) => {
  return (
    <div className="flex flex-col gap-8 shadow-[0_1px_40px_-10px_rgba(0,0,0,0.3)] py-[70px] px-12 rounded-[30px] hover:bg-[#77CDFF] hover:text-white duration-200  leading-relaxed">
        <h2 className={`uppercase font-bold text-xl ${titleColour}`}>{title}</h2>
        <h5 className="text-4xl font-[1000] tracking-tight uppercase">{asset}</h5>
        <p className="opacity-65 text-justify">{description}</p>
        <span className="w-full bg-[#DEDEE9] h-[1px]"></span>
        <div className="flex flex-col gap-2 font-medium">
            {lists.map((list, index) => {
                const isIconX = (cardIndex === 0 && index > 2) || (cardIndex === 1 && index > 3);
                const iconClass = isIconX 
                    ? `bx bxs-x-circle text-2xl opacity-50`
                    : `bx bxs-check-circle text-2xl ${iconColour}`;
                const textClass = isIconX 
                    ? "opacity-60" 
                    : "";
      
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <i className={iconClass}></i>
                    <span className={textClass}>{list}</span>
                  </div>
                );
            })}
        </div>
    </div>
  )
}

export default PriceCard