"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import AboutMe from "../../components/resume/AboutMe";
import Experience from "../../components/resume/Experience";
import Education from "../../components/resume/Education";
import Certificate from "../../components/resume/Certificate";
import Skill from "../../components/resume/Skill";
import Honor from "../../components/resume/Honor";

const courses = {
  title: "Courses",
  description: "A list of courses I have taken.",
  items: [],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex justify-center items-center pt-12 xl:py-0 min-h-[80vh]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <ScrollArea className="h-[250px] xl:h-[440px] w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsList className="flex flex-col gap-6">
              <TabsTrigger value="about">About Me</TabsTrigger>
              <TabsTrigger value="experience">Experiences</TabsTrigger>
              <TabsTrigger value="education">Educations</TabsTrigger>
              <TabsTrigger value="certificate">Certificates</TabsTrigger>
              <TabsTrigger value="skill">Skills and Interests</TabsTrigger>
              <TabsTrigger value="honor">Honors and Awards</TabsTrigger>
            </TabsList>
          </ScrollArea>

          <div className="min-h-[70vh] w-full">
            {/* About Me Content */}
            <TabsContent value="about" className="w-full">
              <AboutMe />
            </TabsContent>

            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>

            {/* Courses Content */}
            <TabsContent value="course" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{courses.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                </p>
              </div>
            </TabsContent>

            {/* Certificates Content */}
            <TabsContent value="certificate" className="w-full">
              <Certificate />
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skill" className="w-full h-full">
              <Skill />
            </TabsContent>

            {/* Honors and Awards */}
            <TabsContent value="honor" className="w-full">
              <Honor />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
