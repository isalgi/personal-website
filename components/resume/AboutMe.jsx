import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description: "An overview of my personal details.",
  items: [
    {
      fieldName: "Name",
      fieldValue: "Faishal Makarim Kamali",
    },
    {
      fieldName: "Email",
      fieldValue: "faishalmakarimk@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+6281219355959",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bahasa Indonesia",
    },
    {
      fieldName: "Domicile",
      fieldValue: "Bekasi, Indonesia",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
  ],
};

const AboutMe = () => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {about.description}
    </p>
    <ScrollArea className="h-[300px]">
      <ul className="grid gap-[20px]">
        {about.items.map((item, idx) => (
          <li key={idx} className="rounded-xl flex flex-row items-center gap-1">
            <p className="text-accent text-left text-sm md:text-lg w-[100px] md:w-[140px] xl:w-44">
              {item.fieldName}
            </p>
            <p className="text-sm md:text-lg xl:max-w-[360px] xl:min-h-[30px] text-left lg:text-left">
              : {item.fieldValue}
            </p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export default AboutMe;
