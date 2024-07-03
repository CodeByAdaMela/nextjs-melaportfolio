"use client";
import React from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import TiktokIcon from "../../../public/images/assets/TikTok.svg";
import FacebookIcon from "../../../public/images/assets/fb.svg";
import InstaIcon from "../../../public/images/assets/ig.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Link from "next/link";



const HeroSection = () => {
  return (
    <section className="lg:py-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-8">
        {/* social-icons */}
      <div className="socials flex flex-col-reverse gap-2 mb-8 mr-12" >
            <Link href="https://github.com/CodeByAdaMela">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/melanie-ladrillo-abalde-7283b8299/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://www.tiktok.com/@ephsn27">
              <Image src= {TiktokIcon} alt="Tiktok Icon" width={48} height={48}/>
            </Link>
            <Link href="https://web.facebook.com/izme.melanie/" >
              <Image src={FacebookIcon} alt="FacebookIcon" width={48} height={48}  />
            </Link>
            <Link href="https://www.instagram.com/_melkyway"  >
              <Image src={InstaIcon} alt="Linkedin Icon" width={48} height={48} />
            </Link>
          </div>

          
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-neutral-600 mb-8 mt-36 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-fuchsia-500">
              Hello, I&apos;m Mela{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 place-self-end  lg:mt-0 mb-24"
        >
         <div>
            <Image
              src="/images/lucy.jpg"
              alt="hero image"
              className="rounded-full  lg:w-[500px] lg:h-[500px] relative  -transform -translate-x-24 -translate-y-3/4 left-1/2 "
              width={400}
              height={400}
            />
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;
