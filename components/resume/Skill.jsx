import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiRuby,
  SiTailwindcss,
  SiNextdotjs,
  SiSequelize,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = {
  title: "Skills and Interests",
  description: "An overview of my technical skills, languages, and interests.",
  programming_languages: [
    {
      title: "Languages",
      items: [
        {
          icon: <FaHtml5 />,
          name: "HTML",
        },
        {
          icon: <FaCss3 />,
          name: "CSS",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
      ],
    },
  ],
  frameworks: [
    {
      title: "Frameworks & Libraries",
      items: [
        {
          icon: <FaReact />,
          name: "ReactJS",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
      ],
    },
  ],

  interests: [
    {
      title: "Interests",
      items: [
        {
          name: "Software Engineering",
        },
        {
          name: "Frontend Development",
        },
      ],
    },
  ],
};

const Skill = () => (
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {skills.description}
      </p>
      <ScrollArea className="h-[400px]">
        <div>
          <p className="text-2xl font-bold pb-3">
            {skills.programming_languages[0].title}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
            {skills.programming_languages[0].items.map((item, idx) => {
              return (
                <li key={idx}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="bg-[#232329] w-full h-[150px] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>

        <Separator className="my-5" />

        {/* Frameworks & Libraries */}
        <div>
          <p className="text-2xl font-bold pb-3">
            {skills.frameworks[0].title}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
            {skills.frameworks[0].items.map((item, idx) => {
              return (
                <li key={idx}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="bg-[#232329] w-full h-[150px] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {item.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </div>
      </ScrollArea>
    </div>
  </div>
);

export default Skill;
