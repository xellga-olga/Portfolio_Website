import {
   Frontend_skill,
   Frontend_skill2,
   Frontend_skill3,
   Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
   return (
      <section
         id="skills"
         className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-20"
         style={{ transform: "scale(0.9" }}
      >
         <SkillText />

         <div className="flex flex-row justify-around flex-wrap mt-9 gap-10 items-center">
            {Skill_data.map((image, index) => (
               <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
               />
            ))}
         </div>

         <div className="flex flex-row justify-around flex-wrap mt-9 gap-10 items-center">
            {Frontend_skill.map((image, index) => (
               <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
               />
            ))}
         </div>
         <div className="flex flex-row justify-around flex-wrap mt-9 gap-10 items-center">
            {Frontend_skill2.map((image, index) => (
               <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
               />
            ))}
         </div>
         <div className="flex flex-row justify-around flex-wrap mt-9 gap-10 items-center">
            {Frontend_skill3.map((image, index) => (
               <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
               />
            ))}
         </div>

         <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
               <video
                  className="w-full h-auto"
                  preload="false"
                  playsInline
                  loop
                  muted
                  autoPlay
                  src="/video.mp4"
               />
            </div>
         </div>
      </section>
   );
};

export default Skills;
