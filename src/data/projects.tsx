import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiPython, SiDjango } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  html:      { title: "HTML5",      bg: "black", fg: "white", icon: <SiHtml5 /> },
  css:       { title: "CSS3",       bg: "black", fg: "white", icon: <SiCss3 /> },
  js:        { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  bootstrap: { title: "Bootstrap",  bg: "black", fg: "white", icon: <SiBootstrap /> },
  python:    { title: "Python",     bg: "black", fg: "white", icon: <SiPython /> },
  django:    { title: "Django",     bg: "black", fg: "white", icon: <SiDjango /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "safeher",
    category: "Women's Safety",
    title: "SafeHer - Women's Safety Web App",
    src: "/assets/projects-screenshots/safeher/safeher.jpg",
    screenshots: ["/assets/projects-screenshots/safeher/safeher.jpg"],
    live: "https://safeher2027.pythonanywhere.com/",
    github: "https://github.com/VivekOrginal/SafeHer-Web-Django",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A Comprehensive Women&apos;s Safety Web Application featuring Real-Time SOS Alerts,
            Incident Reporting with Video Evidence, GPS Tracking, and WhatsApp Integration.
            Built with Django and modern web technologies to empower women&apos;s safety through technology.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-Time SOS Alerts with instant notifications</li>
            <li>Incident Reporting with Video Evidence upload</li>
            <li>GPS Tracking for live location sharing</li>
            <li>WhatsApp Integration for emergency contacts</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "gymmanagement",
    category: "Web Application",
    title: "FitZone Pro - Gym Management System",
    src: "/assets/projects-screenshots/gymmanagement/gymmanagement.jpg",
    screenshots: ["/assets/projects-screenshots/gymmanagement/gymmanagement.jpg"],
    live: "https://github.com/VivekOrginal/GYM-MANAGEMENT-PHP",
    github: "https://github.com/VivekOrginal/GYM-MANAGEMENT-PHP",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.bootstrap],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            FitZone Pro is a comprehensive gym management system designed to streamline fitness
            center operations through modern web technology. Combines an intuitive user interface
            with powerful backend functionality for gym owners, trainers, and members.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Member management and registration</li>
            <li>Trainer scheduling and assignment</li>
            <li>Membership plans and billing</li>
            <li>Attendance tracking and reporting</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "collegewebsite",
    category: "Web Development",
    title: "M. C. Varghese College Website",
    src: "/assets/projects-screenshots/collegewebsite/collegewebsite.jpg",
    screenshots: ["/assets/projects-screenshots/collegewebsite/collegewebsite.jpg"],
    live: "https://github.com/VivekOrginal/College-website-",
    github: "https://github.com/VivekOrginal/College-website-",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A responsive college website for M. C. Varghese College featuring interactive sections,
            expandable course details, FAQ accordion, and embedded Google Maps. Built with HTML,
            CSS, and JavaScript with admission portal integration and mobile-friendly design.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Responsive mobile-friendly design</li>
            <li>Interactive expandable course details</li>
            <li>FAQ accordion section</li>
            <li>Embedded Google Maps and admission portal integration</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
