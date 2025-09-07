"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Separator } from "@/components/ui/separator";

import "swiper/css";
import { BsGithub, BsFiletypePpt, BsX } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSliderBtn from "@/components/ProjectSliderBtn";
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "01",
    title: "Better Space",
    description:
      "Better Space is a web-based platform that has been developed to improve the rental of office space in Jakarta. Our platform enables the effortless discovery and reservation of office spaces in Jakarta's dynamic business districts. Five teams were responsible for the development of this project, including UI/UX Designers, Backend Developers (using Go), Frontend Developers (using React JS), Mobile Developers (using Flutter), and Quality Engineers. I was responsible for the backend part.",
    stack: [{ name: "Go" }, { name: "ReactJS" }, { name: "Flutter" }],
    image: "/assets/projects/better-space-img.png",
    github: "https://github.com/Kelompok3-Office-Booking",
    api_doc: "https://documenter.getpostman.com/view/16304674/2s8YzXwg7q",
    document:
      "https://drive.google.com/file/d/1S8voyu7OWdcogKGKAL7XjH3r7gKxRT-r/view?usp=sharing",
  },
  {
    num: "02",
    title: "SalingSapa : Coffee Shop Landing Page",
    description:
      "SalingSapa is a mini project developed as part of the Dibimbing assignments. This project showcases the implementation of front-end development skills using HTML, CSS (with Tailwind CSS), and a slight of JavaScript.",
    stack: [{ name: "HTML" }, { name: "TailwindCSS" }],
    image: "/assets/projects/salingsapa-preview.png",
    github: "https://github.com/iskhafel/minpro-salingsapa",
    live_demo: "https://minpro-salingsapa.netlify.app/",
  },
  // {
  //   num: "03",
  //   title: "BisaEksplor : Travel App",
  //   description:
  //     "This project focuses on developing a booking platform that simplifies the process of finding and booking travel activities. The app also supports admin functionalities for managing content and transactions effectively.",
  //   stack: [
  //     { name: "ReactJS" },
  //     { name: "TailwindCSS" },
  //     { name: "React Router" },
  //     { name: "Axios" },
  //     { name: "Flowbite" },
  //   ],
  //   image: "/assets/projects/bisaeksplor-preview.png",
  //   github: "https://github.com/iskhafel/bisaeksplor",
  //   live_demo: "https://bisaeksplor.vercel.app/",
  //   figma_url:
  //     "https://excalidraw.com/#json=3Qf8DcGsmHDkMYL-aKVCr,ZYRuIoPpNGI2aj6PyBq7zA",
  // },
  // {
  //   num: "04",
  //   title: "SIMS PPOB",
  //   description:
  //     "This project is a frontend application developed as part of a technical test. It is designed as a basic wallet management system called SIMS PPOB. The app allows users to top up their balance, make transactions, view transaction history, and edit account details.",
  //   stack: [{ name: "ReactJS" }, { name: "TailwindCSS" }, { name: "Redux" }],
  //   api_doc: "https://api-doc-tht.nutech-integrasi.com/",
  //   image: "/assets/projects/simsppob-preview.png",
  //   github: "https://github.com/iskhafel/tht-nutech",
  //   live_demo: "https://simsppobfaishal-makarim-kamali.vercel.app/",
  // },
];

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent text-4xl hover:text-accent-hover"
        >
          <BsX />
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });

  const handleSlideChange = (swiper) => {
    const currentIdx = swiper.activeIndex;
    setProject(projects[currentIdx]);
  };

  const openModal = (src, alt) => {
    setModalImage({ src, alt });
    setModalOpen(true);
  };

  const ProjectDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const descriptionRef = useRef(null);

    useEffect(() => {
      const element = descriptionRef.current;
      if (element) {
        // Check if content is overflowing on XL screens
        const isOverflown = element.scrollHeight > element.clientHeight;
        setIsOverflowing(isOverflown);
      }
    }, [description]);

    return (
      <div className="flex flex-col">
        <div
          ref={descriptionRef}
          className={`relative ${
            isExpanded ? "" : "xl:h-[90px] xl:overflow-hidden"
          }`}
        >
          <p className="text-white/60">{description}</p>
          {!isExpanded && isOverflowing && (
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent xl:hidden" />
          )}
        </div>
        {/* Button always visible on XL screens */}
        <div className="hidden xl:block">
          <Button
            variant="link"
            className={`mt-2 self-start p-0 ${
              isOverflowing
                ? "text-accent hover:text-accent-hover"
                : "text-primary cursor-default"
            }`}
            onClick={() => isOverflowing && setIsExpanded(!isExpanded)}
            disabled={!isOverflowing} // Disable the button when not overflowing
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[28px] xl:text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <ProjectDescription description={project.description} />
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, idx) => {
                  return (
                    <li key={idx} className="text-xl text-accent">
                      {item.name}
                      {idx !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <Separator />
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Demo */}
                {project.live_demo ? (
                  <Link href={project.live_demo} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <IoIosRocket className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p> Live Demo </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/* PPT Document */}
                {project.document ? (
                  <Link href={project.document} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsFiletypePpt className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>PPT</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/* GitHub */}
                {project.github ? (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/* API Documentation */}
                {project.api_doc ? (
                  <Link href={project.api_doc} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <SiPostman className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Postman API Documentation</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/* Figma */}
                {project.figma_url ? (
                  <Link href={project.figma_url} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaFigma className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Figma</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              speed={500}
              loop={false}
              allowTouchMove={true}
            >
              {projects.map((project, idx) => {
                return (
                  <SwiperSlide key={idx} className="w-full">
                    <div
                      className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer"
                      onClick={() => openModal(project.image, project.title)}
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <ProjectSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <ImageModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            imageSrc={modalImage.src}
            imageAlt={modalImage.alt}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
