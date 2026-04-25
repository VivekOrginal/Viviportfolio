"use client";
import React from "react";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-24" style={{ backgroundColor: "#C3D809" }}>
      <div className="w-full max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-black mb-3">Get In Touch</p>
          <h2 className="text-5xl md:text-7xl font-thin text-black">
            Let&apos;s Work<br />Together
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left - Info */}
          <div className="flex flex-col gap-8 p-8 rounded-2xl border border-black/20 bg-[#222022] backdrop-blur-md">
            <div>
              <h3 className="text-2xl font-light text-white mb-2">Say Hello 👋</h3>
              <p className="text-white text-sm leading-relaxed">
                Have a project in mind or just want to connect? Feel free to reach out.
                I&apos;m always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a href={`mailto:${config.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#222022] hover:bg-[#2e2c2e] transition group">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition">
                  <FaEnvelope className="text-white w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm">{config.email}</p>
                </div>
              </a>

              <a href={config.social.linkedin} target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#222022] hover:bg-[#2e2c2e] transition group">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition">
                  <SiLinkedin className="text-white w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white text-sm">vivek-p-s-158817282</p>
                </div>
              </a>

              <a href={config.social.github} target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#222022] hover:bg-[#2e2c2e] transition group">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition">
                  <SiGithub className="text-white w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white uppercase tracking-wider">GitHub</p>
                  <p className="text-white text-sm">VivekOrginal</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#222022] backdrop-blur-md">
            <h3 className="text-2xl font-light text-white mb-6">Send a Message</h3>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
