'use client';

import React from 'react';
import CourseCard from '@/components/courses/CourseCard';
import HoliOfferPopup from '@/components/home/HoliOfferPopup';

const courses = [
  {
    title: "Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    category: "Job Ready",
    language: "Hindi",
    liveBatch: true,
    originalPrice: "11999",
    discountedPrice: "5999",
    discount: "50%",
    imageUrl: "https://ext.same-assets.com/1600289364/2116689939.jpeg",
    link: "/courses/courses-details/Job Ready AI Powered Cohort: Web + DSA + Aptitude",
    discountType: "Limited Time Discount"
  },
  {
    title: "Three.js Domination",
    category: "Animation",
    language: "Hindi",
    liveBatch: false,
    originalPrice: "3500",
    discountedPrice: "2499",
    discount: "29%",
    imageUrl: "https://ext.same-assets.com/1600289364/195800314.jpeg",
    link: "/courses/courses-details/Three.js Domination",
    discountType: "Black Friday Sale"
  },
  {
    title: "Java & DSA Domination",
    category: "In-depth",
    language: "Hinglish",
    liveBatch: false,
    originalPrice: "9999",
    discountedPrice: "4999",
    discount: "50%",
    imageUrl: "https://ext.same-assets.com/1600289364/1436652544.jpeg",
    link: "/courses/courses-details/Java & DSA Domination",
    discountType: "Limited Time Discount"
  },
  {
    title: "Aptitude & Reasoning for Campus Placements",
    category: "Placements",
    language: "Hinglish",
    liveBatch: false,
    originalPrice: "1500",
    discountedPrice: "999",
    discount: "67%",
    imageUrl: "https://ext.same-assets.com/1600289364/195800314.jpeg",
    link: "/courses/courses-details/Aptitude & Reasoning for Campus Placements",
    discountType: "Black Friday Sale"
  },
  {
    title: "Back-End Domination: Create Efficient Back-End",
    category: "In-depth",
    language: "Hindi",
    liveBatch: false,
    originalPrice: "11999",
    discountedPrice: "3999",
    discount: "67%",
    imageUrl: "https://ext.same-assets.com/1600289364/195800314.jpeg",
    link: "/courses/courses-details/Back-End Domination: Create Efficient Back-End",
    discountType: "Limited Time Discount"
  },
  {
    title: "Front-End Domination: Create Anything with Code",
    category: "In-depth",
    language: "Hindi",
    liveBatch: false,
    originalPrice: "9999",
    discountedPrice: "3999",
    discount: "40%",
    imageUrl: "https://ext.same-assets.com/1600289364/2233625580.jpeg",
    link: "/courses/courses-details/Front-End Domination: Create Anything with Code",
    discountType: "Limited Time Discount"
  }
];

const CoursesPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="pt-20 pb-16 px-4 md:px-8 container mx-auto">
        <h1 className="text-5xl md:text-7xl neue-bold mb-3">
          We're not a<br />
          <span className="highlight-text">course factory.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-16 helvetica-light">
          We focus on courses that really help.
        </p>

        <h2 className="text-3xl neue-bold mb-12 flex items-center">
          Courses which do work
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#24cca6]">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
      </div>
      <HoliOfferPopup />
    </div>
  );
};

export default CoursesPage;
