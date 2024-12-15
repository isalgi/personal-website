import { ScrollArea } from "@/components/ui/scroll-area";

const educations = {
  title: "Educations",
  description: "Academic qualifications and certifications acquired.",
  items: [
    {
      institution: "Universitas Mercu Buana",
      degree: "Informatics Engineering",
      duration: "Sep 2020 - Dec 2024",
      url: "https://www.mercubuana.ac.id/",
    },
    {
      institution: "Alterra Academy",
      degree: "Mastering Golang Programming Engineer",
      duration: "Aug 2022 - Dec 2022",
      url: "https://academy.alterra.id/",
    },
    {
      institution: "Bangkit Academy",
      degree: "Cloud Computing Cohort",
      duration: "Aug 2023 - Jan 2024",
      url: "https://grow.google/intl/id_id/bangkit/",
    },
    {
      institution: "Dibimbing.id",
      degree: "Front-end Web Development",
      duration: "Jul 2024 - Dec 2024",
      url: "https://www.dibimbing.id/",
    },
  ],
};

const Education = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{educations.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {educations.description}
    </p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-2  gap-[20px]">
        {educations.items.map((item, idx) => {
          return (
            <li
              key={idx}
              className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col gap-1"
            >
              <span className="text-accent xl:w-[300px] text-left">
                {item.duration}
              </span>
              <h3 className="text-xl max-w-[560px] min-h-[60px] text-left">
                {item.degree}
              </h3>
              <div className="flex gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  className="text-white/60 text-left"
                >
                  {item.institution}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
);

export default Education;
