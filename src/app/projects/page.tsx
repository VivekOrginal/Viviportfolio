"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "SafeHer - Women's Safety App",
    description: `A Comprehensive Women's Safety Web Application featuring Real-Time SOS Alerts, Incident Reporting with Video Evidence, GPS Tracking, and WhatsApp Integration. Built with Django and modern web technologies to empower women's safety through technology.`,
    link: "https://safeher2027.pythonanywhere.com/",
    images: ["/assets/projects-screenshots/safeher/1.png"],
  },
  {
    id: 2,
    name: "FitZone Pro - Gym Management",
    description: `FitZone Pro is a comprehensive gym management system designed to streamline fitness center operations. Combines an intuitive user interface with powerful backend functionality for gym owners, trainers, and members.`,
    link: "https://github.com/VivekOrginal/GYM-MANAGEMENT-PHP",
    images: ["/assets/projects-screenshots/gymmanagement/1.png"],
  },
  {
    id: 3,
    name: "M. C. Varghese College Website",
    description: `A responsive college website featuring interactive sections, expandable course details, FAQ accordion, and embedded Google Maps. Built with HTML, CSS, and JavaScript with admission portal integration and mobile-friendly design.`,
    link: "https://github.com/VivekOrginal/College-website-",
    images: ["/assets/projects-screenshots/collegewebsite/1.png"],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Project Screenshots"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of ${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                        width={300}
                        height={200}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">{project.description}</p>
                <Link href={project.link} target="_blank" className="mt-3 inline-block text-xs text-blue-400 hover:underline">
                  View Project →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
