
import FloatingChatBubble from './FloatingChatBubble';
import React, { useRef } from "react";
import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingPage.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import assets
import backgroundVideo from '../assets/sus.mp4';
import myImage from '../assets/hand.jpg';
import myImage1 from '../assets/dash.jpg';
import myImage2 from '../assets/dash.jpg';
import myImage3 from '../assets/dash.jpg';
import myImage4 from '../assets/dash.jpg';

const LandingPage = () => {
  const page2Ref = useRef(null);
  const h1Ref = useRef(null);

  useGSAP(() => {
    const h1Element = h1Ref.current;
    const parentElement = page2Ref.current;

    if (h1Element && parentElement) {
      // Clone the text
      const duplicateText = h1Element.cloneNode(true);
      duplicateText.style.position = 'absolute';
      duplicateText.style.left = '100%'; // Start right after the original text
      // parentElement.appendChild(duplicateText);

      // Infinite scroll animation
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'linear' } });
      tl.to([h1Element, duplicateText], {
        x: '-100%', // Move both the original and duplicate
        duration: 200,
      });
    }
  }, { scope: page2Ref });

  return (
    <div className="overflow-y-auto h-screen w-screen scroll-smooth">
      <Navbar />
      
      {/* Section 1: Title with Background Video */}      
      <section className="h-screen w-screen flex justify-center items-center bg-blue-500 text-white relative max-w-full max-h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-x-[-1]" 
          autoPlay 
          loop 
          muted
        >
          <source 
            src={backgroundVideo}
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        <div 
          className="absolute top-0 left-0 w-full h-full bg-[#EFE3C2] z-0"
          style={{
            clipPath: 'polygon(0% 0%, 40% 0%, 20% 100%, 0% 100%)',
          }}
        ></div>

        <h1 className="yes text-8xl font-bold z-2 absolute top-[30%] left-[5vw]">
          Where <p>Sustainability</p> meets <p>Possibility</p>
        </h1>
      </section>

      <section 
        ref={page2Ref} 
        className="relative h-[18vh] w-screen bg-[#123524] flex justify-center items-center overflow-hidden"
      >
        <h1 
          ref={h1Ref}
          class="no text-white text-6xl font-bold  text-nowrap absolute left-1/2 transform -translate-x-1/2">
          Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. Live Green. Live Well. Greening Every Step of the Way. L
        </h1>
      </section>


      {/* Section 2: Random Image */}
      <section className="h-screen w-screen flex justify-center items-center bg-gray-200 relative max-w-full max-h-screen overflow-hidden">
        <img
          src={myImage}
          alt="Random"
          className="w-full h-full object-cover"
        />

        {/* Centered Text */}
        <div className="absolute text-black text-8xl font-bold font-Ultra text-center space-y-4">
  {/* Wrapper for each word with hover effect */}
  {["REUSE", "REDUCE", "RECYCLE"].map((word, index) => (
    <div key={index} className="elem">
      <div className="text-div">
        <h1>{word}</h1>
        <h1>{word}</h1>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Section 3: How to Use Title */}
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-[#85A947] text-white px-8 max-w-full max-h-screen">
        <h2 className="text-4xl font-bold mb-6">How to Use This App</h2>
        <div className="flex items-center space-x-6">
          {/* First Image with two arrows pointing to the center */}
          <div className="flex flex-col items-center">
            <img
              src={myImage1}
              alt="Step 1"
              className="w-56 h-56 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg">Step 1</p>
          </div>

          {/* Arrows pointing to the two center images */}
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold transform rotate-[-45deg]">{`→`}</span>
            <span className="text-8xl font-bold transform rotate-[45deg]">{`→`}</span>
          </div>

          {/* Two Center Images */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center">
              <img
                src={myImage2}
                alt="Step 2"
                className="w-56 h-56 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-2 text-lg">Step 2</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={myImage3}
                alt="Step 3"
                className="w-56 h-56 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-2 text-lg">Step 3</p>
            </div>
          </div>

          {/* Arrows pointing to the last image */}
          <div className="flex flex-col items-center space-y-4">
            <span className="text-8xl font-bold transform rotate-[45deg]">{`→`}</span>
            <span className="text-8xl font-bold transform rotate-[-45deg]">{`→`}</span>
          </div>

          {/* Last Image */}
          <div className="flex flex-col items-center">
            <img
              src={myImage4}
              alt="Step 4"
              className="w-56 h-56 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-lg">Step 4</p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-[#85A947] px-8 max-w-full max-h-screen">
        <div className="NEW bg-[#EFE3C2]">
        <h2 className="text-4xl font-bold mb-6 font family-Poppins">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-7xl">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">What is Eco-Connect?</h3>
            <p> Eco-Connect is a sustainability-focused platform dedicated to helping individuals and businesses adopt more eco-friendly practices. We provide tools and resources that promote problem-solving, reducing waste, reusing products, and recycling effectively, while connecting users to eco-conscious vendors and initiatives.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold font family-Poppins">Can I contribute content or share resources on the platform?</h3>
            <p>
            Yes! We welcome community involvement. If you have an article, blog post, or resource that aligns with our mission of sustainability, feel free to share it with us. We’re always looking for contributors to help expand our knowledge base and share new ideas.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">How can I contribute to sustainability through this app?</h3>
            <p>
            By using the app’s resources, you can start implementing sustainable practices in your daily life. You can reduce waste, reuse materials, and recycle responsibly. Additionally, you can share your own tips, use the marketplace, and spread awareness of sustainable practices in your community.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">How can I contribute to sustainability through this app?</h3>
            <p>
            By using the app’s resources, you can start implementing sustainable practices in your daily life. You can reduce waste, reuse materials, and recycle responsibly. Additionally, you can share your own tips, use the marketplace, and spread awareness of sustainable practices in your community.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Section 5: Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-blue-500 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
          </div>
          <FloatingChatBubble />
          {/* Copyright Section */}
          <div className="mt-8 text-center text-lg">
            <p>© {new Date().getFullYear()} Sustainability. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
