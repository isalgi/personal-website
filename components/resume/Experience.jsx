import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = {
  title: "Experiences",
  description: "Overview of my experiences and roles held.",
  items: [
    {
      company: "PT. Wong Makmur Sejati",
      position: "Fullstack Developer",
      duration: "Jan 2025 - Present",
      url: "https://tigerwongentertainment.com/",
      place: "Jakarta, Bintaro Raya · Onsite",
      responsibilities: ["Handle project from scratch."],
    },
    {
      company: "Eureka Edutech",
      position: "Frontend Developer Intern",
      duration: "Nov 2024 - Present",
      url: "https://medium.com/eureka-edutech",
      place: "Jakarta, Cilandak Barat · Remote",
      responsibilities: ["Slicing UI design into code.", "API Integration."],
    },
  ],
};

const Experience = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{experiences.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {experiences.description}
    </p>
    <ScrollArea className="h-[400px]">
      <ul className="grid gap-[30px]">
        {experiences.items.map((item, idx) => {
          return (
            <li
              key={idx}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1"
            >
              <div className="flex justify-between flex-col md:flex-row text-left">
                <span className="text-accent text-left order-2">
                  {item.duration}
                </span>
                <h3 className="text-xl max-w-[360px] min-h-[30px] order-1">
                  {item.position}
                </h3>
              </div>

              <div className="flex justify-between flex-col md:flex-row text-left">
                {/* <span className='w-[6px] h-[6px] rounded-full bg-accent'></span> */}
                <a href={item.url} target="_blank" className="text-white/60">
                  {item.company}
                </a>
                <p className="text-white/60">{item.place}</p>
              </div>

              <p className="pt-5 font-bold text-left">Responsibilities: </p>
              <ul className="list-disc ml-[15px] text-left">
                {item.responsibilities.map((detail, detailIdx) => (
                  <li key={detailIdx} className="text-white/60">
                    <p className="ml-1 max-w-[500px] md:max-w-[1070px] xl:max-w-[650px] text-justify text-white/60">
                      {detail}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
);

export default Experience;
