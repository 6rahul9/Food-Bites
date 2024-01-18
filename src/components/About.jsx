import React from "react";
import { FaArrowRight } from "react-icons/fa";
import pasta from "../assets/pasta.png";
import chef from "../assets/chef.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Best food in town awaits you
          </div>
          <p className="text-sm opacity-70">
          Food Bites aren't just meals, they're portals. One bite might take you to a sun-drenched Italian piazza, 
          the next to a bustling Thai night market.
           Every flavor tells a story, transporting you with each chew.
          </p>
          <div className="btn">
            <a href="" className="text-white text-[0.85rem]">
              Explore more
            </a>
            <FaArrowRight className="text-white" />
          </div>
        </div>
        <div className="md:row-start-1">
          <img src={pasta} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Our team of registered nurses and skilled healthcare professionals
            provide in-home nursing.
          </div>
          <p className="text-sm opacity-70">
           
Delicious food is a symphony for the senses, a tantalizing dance on the tongue that leaves you wanting more. But how to put that feeling into words?
 Here are a few ways to describe the magic of a delicious meal:
          </p>
        </div>
        <div className="">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
