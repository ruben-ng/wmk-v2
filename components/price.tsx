import PriceCard from "./ui/priceCard";


const prices = [
  {
    title: "Basic",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent sagittis nascetur cubilia placerat inceptos efficitur.",
    asset: "50 Assets",
    lists: [
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
    ],
  },
  {
    title: "Medium",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent sagittis nascetur cubilia placerat inceptos efficitur.",
    asset: "100 Assets",
    lists: [
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
    ],
  },
  {
    title: "Advance",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Praesent sagittis nascetur cubilia placerat inceptos efficitur.",
    asset: "150 Assets",
    lists: [
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
      "All analytics features",
    ],
  },
]



const price = () => {
  return (
    <section className="my-20">
      <div className="container max-w-7xl mx-auto">
        <div className=" grid md:grid-cols-3 gap-10">
          {prices.map((price, index) => (
            <div
              key={index} className={`flex items-center space-x-2 ${
                index === 1 ? "text-white bg-[#020015] rounded-[40px] scale-105" : "text-black"}`}>
              <PriceCard 
                key={index} 
                title={price.title} 
                description={price.description} 
                asset={price.asset} 
                lists={price.lists}
                titleColour={index === 1 ? "text-[#008CF3]" : "text-[#C62E2E]"}
                iconColour={index === 1 ? "text-[#C62E2E]" : "text-[#008CF3]"}
                cardIndex={index}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default price