import { ScrollArea } from "@/components/ui/scroll-area";
import { FaExternalLinkAlt } from "react-icons/fa";

const honors = {
  title: "Honors and Awards",
  description: "Recognition of achievements and excellence.",
  items: [
    {
      name: "2nd Runner Up Performer",
      duration: "December 2024",
      institution: "Dibimbing.id",
      url: "https://drive.google.com/file/d/1MRjwmKfGgaJW1sjAXu9XBheyX_J2SKwz/view?usp=sharing",
      description: [
        "Shown consistent improvement during bootcamp.",
        "Engaged in classes, mentoring sessions, and presentations.",
        "Completed quiz with maximum effort",
      ],
    },
    {
      name: "Best Portfolio Mini Project in React",
      duration: "December 2024",
      institution: "Dibimbing.id",
      url: "https://drive.google.com/file/d/1ZLY7dcFBJEbWIooOKsQnuwQokzZmwzBT/view?usp=sharing",
      description: [
        "Dedication to React and front-end development tools.",
        "Created an attractive, responsive, and modern user interface.",
        "Paid attention to every aspect of the assessment",
      ],
    },
  ],
};

const Honor = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{honors.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {honors.description}
    </p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1  gap-[30px]">
        {honors.items.map((item, idx) => {
          return (
            <li
              key={idx}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1"
            >
              <span className="text-accent text-left">{item.duration}</span>
              <h3 className="text-xl max-w-[480px] min-h-[30px] text-left">
                {item.name}
              </h3>
              <div className="gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-white/60 flex text-left"
                >
                  {item.institution}
                </a>
              </div>

              <p className="pt-5 font-bold text-left">Description : </p>
              <ul className="list-disc list-inside text-white/60">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
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

export default Honor;
