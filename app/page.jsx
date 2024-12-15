import ProfilePhoto from "@/components/ProfilePhoto";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:py-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg">Software Engineer</span>
            <h1 className="h1 xl:my-2 text-accent py-7">
              Faishal Makarim Kamali
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 xl:text-justify">
              I am highly dedicated to website development, with a strong focus
              to become a Frontend Developer. I usually built web applications
              with React and NextJS. Also ability to translate design concepts
              into functional code.
            </p>

            {/* Download CV and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-3 px-5"
              >
                <Link
                  href={
                    "https://drive.google.com/file/d/1eec7y-BV6DoDMrMpRwzf0qUWvo-_Yq2I/view?usp=sharing"
                  }
                >
                  <BsArrowUpRight className="text-xl font-extrabold" />
                  <span>Check My Resume</span>
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles={`
                    w-14 h-14 border border-accent rounded-full 
                    flex justify-center items-center 
                    text-accent text-base 
                    hover:bg-accent hover:text-primary hover:transition-all duration-500
                  `}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
