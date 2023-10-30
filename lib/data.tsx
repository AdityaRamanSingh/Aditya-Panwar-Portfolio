import React from "react";
import { CgWorkAlt } from "react-icons/cg";
//import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopnestImg from "@/public/shopnest.png";
import spendwiseImg from "@/public/spendwise.png";
import aheadImg from "@/public/ahead.png";
import { LinkProps } from "next/link";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intermediate",
    location:"Mandsaur(M.P),India",
    description:
      "I graduated my 12th class in 2020 with 82.4%",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Bachelor's of technology",
    location: "Bhopal(M.P), India",
    description:
    "I'm pursuing B.tech in Computer Science with current cgpa of 8.39 and I'll graduate in 2025",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "ShopNest",
    description:
      "Developed an e-commerce application having user friendly UI and features.User auth with Email and password .Added features such as Checkout and Payment functionality,Admin can perform CRUD operation on products.",
    tags: ["React", "Firebase", "Tailwind", "Redux","Razorpay", ],
    imageUrl: shopnestImg,
     githubUrl :"https://github.com/AdityaRamanSingh/ShopNest",
     liveUrl:"https://shopn3st.netlify.app/"
  },
  {
    title: "SpendWise",
    description:
      "Created an efficient expense tracker platform with React, Node.js, Express, and MongoDB, featuring a user-friendly UI and robust database operations using Mongoose.",
    tags: ["React", "Node", "MongoDB", "Bootstrap", "chartjs"],
    imageUrl: spendwiseImg,
    githubUrl:"https://github.com/AdityaRamanSingh/SpendWise",
    liveUrl:"https://spendwise-expense.netlify.app/"

    
  },
  {
    title: "Animated Website",
    description:
      "Ahead app is a animated website built in proceess of learning Typescript ,Nextjs and framer-motion",
    tags: ["React", "Next.js", "Framer-Motion", "Tailwind", "Typescript"],
    imageUrl: aheadImg ,
    githubUrl:"https://github.com/AdityaRamanSingh/Ahead-app",
    liveUrl:" https://animated-aheadapp.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  //"Prisma",
  "MongoDB",
  "Redux",
  "Postman",
  "VsCode",
  "RestAPI",
  "Firebase",
  //"GraphQL",
  //"Apollo",
  "Express",
  //"PostgreSQL",
  //"Python",
  //"Django",
  "Framer Motion",
  "C++",
] as const;