"use client";
import { useTransition,useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Figma</li>
        <li>NestJs</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Tailwind</li>
        <li>Data structures and algorithms</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>College Saint Partrick, Diploma in Software Development </li>
        <li>
          University of Kigali, Bachelor of Science with Honoursin Business
          Information Technology
        </li>
      </ul>
    ),
  },
  {
    title: 'Certification',
    id: 'certification',
    content: (
      <ul>
        <li>Programming Foundation with JavaScript from CodeSignal </li>
        <li>Front-End Development Libraries Certification from FreeCodeCamp</li>
        <li>Algorithm & Data Structure from FREECODECAMP</li>
        <li>Advanced UI/UX design from Great Learning </li>
      </ul>
    ),
  },
]
const AboutSection = () => {

  const [tab, setTab]= useState("skills");
  const [isPending, startTransition ] = useTransition();

 const handleTabChange = (id)=>{
  startTransition(() =>{
    setTab(id);
  });
 }
  
   
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/done.png" alt="About-image" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack software engineer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            TypeScript,Tailwind,Figma, HTML, CSS, and Git. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8 ">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {''}
              Skills{''}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {''}
              Education{''}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certification')}
              active={tab === 'certification'}
            >
              {''}
              Certification{''}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
};
export default AboutSection;
