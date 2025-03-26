'use client';

import React from 'react';
import Image from 'next/image';
import HoliOfferPopup from '@/components/home/HoliOfferPopup';

interface CourseDetailClientProps {
  slug: string;
}

const CourseDetailClient: React.FC<CourseDetailClientProps> = ({ slug }) => {
  // In a real app, you would fetch course data based on the slug
  // For now, we'll use mock data for the "Front-End Domination" course
  const courseData = {
    title: decodeURIComponent(slug as string) || "Front-End Domination: Create Anything with Code",
    categories: ["Web Development", "Animations"],
    price: "3999",
    originalPrice: "9999",
    description: "Domin8 the web game with 'Front-End Domination.'! Nail HTML, CSS, JS, and Solve real problems, dive into fun projects, and be interview-ready!",
    imageUrl: "https://ext.same-assets.com/1600289364/2233625580.jpeg",
    logoUrl: "https://ext.same-assets.com/1600289364/3278179387.png",
    projects: [
      "Shop Jacket Project",
      "Cotton Weave Brand Website",
      "Trendline Modern Web UI Development",
      "Coding Dribbles website (with animations)",
      "Complete Responsive Project - Retro Website",
      "ReactJS based Project - Refokus",
      "ReactJS based Project - ExoApe - Modern Animated Project",
      "ReactJS based Functional Project - Movie Showcase App"
    ],
    modules: [
      "Course Walkthrough",
      "HTML - Making Architecture",
      "CSS - Styling things up",
      "JavaScript - Everything about JavaScript",
      "GSAP and Locomotive - Fun Stuff",
      "Final Project - Obys Agency Clone",
      "React JS",
      "React JS Project - Refokus Clone",
      "Redux",
      "React JS Final Project - SCSDB",
      "ExoApe - Bonus Project"
    ]
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Course Info */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 neue-bold">{courseData.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {courseData.categories.map((category, index) => (
                <span key={index} className="text-sm bg-zinc-800 text-white px-3 py-1 rounded-sm">
                  {category}
                </span>
              ))}
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold mb-1">Only ₹{courseData.price}*</div>
              <div className="text-gray-400 text-sm line-through mb-3">₹{courseData.originalPrice}</div>
              <button className="bg-[#24cca6] text-black px-8 py-3 rounded-sm font-medium hover:bg-opacity-90 transition w-full lg:w-auto">
                Buy Now - Start Learning
              </button>
            </div>

            <p className="text-gray-300 mb-10 helvetica-light text-lg">
              {courseData.description}
            </p>
          </div>

          {/* Right Column - Course Image */}
          <div>
            <div className="relative h-80 w-full mb-8">
              <Image
                src={courseData.imageUrl}
                alt={courseData.title}
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-sm text-sm">
                INDEPTH
              </div>
            </div>

            <div className="relative h-44 w-full flex items-center justify-center bg-zinc-900 rounded-md p-8">
              <Image
                src={courseData.logoUrl}
                alt="Course Logo"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-8 neue-bold">
            projects<br />
            <span className="text-2xl">which matters.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 helvetica-light">Beyond Projects, Towards Purpose.</p>

          <div className="space-y-8">
            {courseData.projects.map((project, index) => (
              <div key={index} className="border-b border-zinc-800 pb-4">
                <h3 className="text-xl mb-2">
                  <span className="text-[#24cca6] mr-2">Project {index + 1}</span>
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold mb-2 neue-bold">Dominate.</h2>
          <p className="text-xl text-gray-300 mb-12 helvetica-light">From Start to Victory.</p>

          <div className="space-y-4">
            {courseData.modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between border-b border-zinc-800 py-4">
                <div className="flex items-center">
                  <span className="text-[#24cca6] mr-4">{index + 1}.</span>
                  <h3 className="text-xl helvetica-medium">{module}</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold mb-4 neue-bold">More Value, Less Cost.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto helvetica-light">
            Frontend Domination stands tall as the ultimate choice, delivering top-notch quality and unbeatable prices. *Course validity is for 1 year from date of purchase
          </p>

          <div className="bg-zinc-900 max-w-md mx-auto p-6 rounded-md">
            <div className="text-center mb-2 text-gray-400 text-sm">Scratch this to get a discount coupon</div>
            <div className="bg-zinc-800 p-4 rounded-md text-center">
              <span className="text-2xl font-bold text-[#24cca6]">HOLI2025</span>
            </div>
          </div>
        </div>
      </div>

      <HoliOfferPopup />
    </div>
  );
};

export default CourseDetailClient;
