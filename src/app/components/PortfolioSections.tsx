"use client";

import dynamic from "next/dynamic";

// Keep section bundles separate while retaining their server-rendered content.
export const AboutSection = dynamic(() => import("./About"));
export const SkillsSection = dynamic(() => import("./Services"));
export const ProjectSection = dynamic(() => import("./Work"));
export const EducationSection = dynamic(() => import("./Timeline"));
export const ContactSection = dynamic(() => import("./Contact"));
