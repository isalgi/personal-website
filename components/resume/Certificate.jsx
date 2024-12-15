import { FaExternalLinkAlt } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";

const certificates = {
  title: "Certificates",
  description: "A collection of my earned certificates.",
  items: [
    {
      name: "Front-end Web Development",
      org: "Dibimbing.id",
      url: "#",
    },
    {
      name: "Cloud Computing Cohort",
      org: "Bangkit Academy",
      url: "#",
    },
    {
      name: "Golang Backend Engineer",
      org: "Alterra Academy",
      url: "#",
    },
  ],
};

const Certificate = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{certificates.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {certificates.description}
    </p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1  gap-[30px]">
        {certificates.items.map((item, idx) => {
          return (
            <li
              key={idx}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1"
            >
              <h3 className="text-xl max-w-[360px] min-h-[30px] text-left">
                {item.name}
              </h3>
              <div className="gap-3">
                <span className="w-[8px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-left">
                  Issued by :
                  <a href={item.url} target="_blank" className="text-white/60">
                    {" "}
                    {item.org}
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3 text-accent">
                <p className="text-sm w-[8px] h-[6px]">
                  {" "}
                  <FaExternalLinkAlt />{" "}
                </p>
                <a href={item.url} target="_blank" className="h-[23px]">
                  See the certificate{" "}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
);

export default Certificate;
