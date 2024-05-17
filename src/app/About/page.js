import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full h-max py-8 flex justify-center items-center bg-gradient-to-r from-black to-slate-800">
        <div className="w-9/12 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Akshay Bisht</h1>

          <h4 className="italic">Frontend & UI Developer</h4>

          <p className="font-thin">
            With over 2.5 years of hands-on experience in the realm of Frontend
            Development, I am passionate about crafting seamless user
            experiences through intuitive and visually appealing interfaces. My
            expertise lies in UI development, where I leverage a plethora of
            technologies to bring designs to life.
          </p>

          <p className="font-bold">
            <span>Experience:</span> 2.5+ years
          </p>

          <h4 className="font-bold">Skills & Technologies:</h4>

          <ul className="list-disc pl-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Sass</li>
            <li>jQuery</li>
            <li>And more</li>
          </ul>

          <p className="font-thin">
            Throughout my career, I've had the privilege to work on a diverse
            range of projects, honing my skills and staying abreast of the
            latest trends and best practices in the industry. Whether it's
            building responsive layouts, optimizing performance, or enhancing
            accessibility, I thrive on the challenge of turning ideas into
            reality.
          </p>

          <p className="font-thin">
            My dedication to crafting pixel-perfect designs combined with a keen
            eye for detail sets me apart in the ever-evolving landscape of web
            development. I am committed to delivering solutions that not only
            meet but exceed expectations, ensuring a delightful user experience
            across all devices and platforms.
          </p>

          <p>That's All about me. Thank You!</p>
          <p>Best Regards</p>
          <p>Akshay Bisht.</p>
        </div>
      </div>
    </>
  );
};

export default About;
