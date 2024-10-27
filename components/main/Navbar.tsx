import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
   return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
         <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <a
               href="#about-me"
               className="h-auto w-auto flex flex-row items-center"
            >
               <Image
                  src="/logo_navbar.png"
                  priority={true} 
                  alt="logo"
                  width={70}
                  height={70}
                  className="cursor-pointer hover:animate-slowspin"
               />

               <span className="font-bold ml-[10px] hidden text-gray-300 md:block">
                  FrontEndDev
               </span>
            </a>

            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
               <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                  <a href="#about-me" className="cursor-pointer">About me</a>
                  <a href="#skills" className="cursor-pointer">Skills</a>
                  <a href="#projects" className="cursor-pointer">Projects</a>
                  <a href="#contact" className="cursor-pointer">Contact</a>
               </div>
            </div>

            <div className="flex flex-row gap-5">
               {Socials.map((social) => (
                  <a
                     href={social.link}
                     key={social.name}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
                  >
                     <Image
                        src={social.src}
                        alt={social.name}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                     />
                  </a>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Navbar;