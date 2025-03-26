'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  category: string;
  language: string;
  liveBatch?: boolean;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  imageUrl: string;
  link: string;
  discountType: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  category,
  language,
  liveBatch,
  originalPrice,
  discountedPrice,
  discount,
  imageUrl,
  link,
  discountType,
}) => {
  return (
    <div className="bg-zinc-900 rounded-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Link href={link}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </Link>
        <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 text-xs rounded-sm helvetica-medium uppercase">
          {category}
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2 helvetica-bold">{title}</h3>

        <div className="flex gap-2 mb-3">
          {liveBatch && (
            <span className="text-xs uppercase bg-red-600 text-white px-2 py-1 rounded-sm">
              Live Batch
            </span>
          )}
          <span className="text-xs uppercase bg-zinc-800 text-white px-2 py-1 rounded-sm">
            {language}
          </span>
        </div>

        <div className="mt-auto">
          <div className="text-xs text-gray-400 mb-1 helvetica-light">{discountType}</div>
          <div className="flex items-center gap-2">
            <span className="text-white text-lg helvetica-bold">₹ {discountedPrice}</span>
            <span className="text-gray-400 line-through text-sm helvetica-light">₹ {originalPrice}</span>
            <span className="bg-zinc-800 text-white px-2 py-1 text-xs helvetica-medium ml-auto">
              {discount} OFF
            </span>
          </div>
        </div>
      </div>

      <Link href={link}>
        <div className="bg-[#24cca6] text-black py-3 text-center helvetica-medium hover:bg-opacity-90 transition">
          View Details
        </div>
      </Link>
    </div>
  );
};

const CourseSection: React.FC = () => {
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
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-12 neue-bold">Courses Offered.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/courses">
            <span className="inline-block bg-[#24cca6] text-black px-8 py-3 rounded hover:bg-opacity-90 transition helvetica-medium">
              Explore Courses
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
