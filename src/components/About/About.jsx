import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from'../../assets/dhiraj.jpg'
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
     <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dhiraj Yadav
          </h2>

          {/* Skills Heading with Typing Effect */}

<h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
  <span className="text-white">I am a </span>

  <TypeAnimation
    sequence={[
      "Full Stack Developer",
      2000,
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-[#8245ec]"
  />
</h3>
 <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           I'm Dhiraj Yadav, a passionate Computer Science Engineering student and aspiring Full Stack Developer. I enjoy building modern, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, React, Node.js, Express js, Java ,and MongoDB.I am constantly learning new technologies and improving my problem-solving skills.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1pO0jwVzVoBqt3tVf_icrehsPraz5vbfW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

          </div>

          <div  className="md:w-1/2 flex justify-center md:justify-end" >
           <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] border-4 border-purple-700 rounded-full md:translate-x-32"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
           <img
              src={profileImage}
              alt="Dhiraj yadav "
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
            </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;