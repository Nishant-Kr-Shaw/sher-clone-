'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center text-center bg-[#0e0f0f] relative overflow-hidden">
      <div className="container">
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 max-w-5xl mx-auto leading-tight neue-bold">
          We only teach<br />
          what we are <span className="highlight-text">really</span><br />
          <span className="highlight-text">really</span> good at.
        </h1>

        <div className="mt-8 mb-16 max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 helvetica-light">
            Get ready to accelerate your career with customized courses and leave your mark in the tech industry
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="bg-white text-black px-8 py-3 rounded-sm uppercase font-medium text-sm tracking-wider hover:bg-opacity-90 transition">
              Check Courses-Make an Impact
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-1 neue-bold">25k+</h2>
            <p className="text-gray-400 helvetica-light">Students taught</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-1 neue-bold">20+</h2>
            <p className="text-gray-400 helvetica-light">Instructors</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-1 neue-bold">504K+</h2>
            <p className="text-gray-400 helvetica-light">Youtube Subs.</p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center w-full px-4">
        <p className="text-xl md:text-2xl mb-2 max-w-4xl mx-auto">
          we do whatever it takes to help you understand the concepts.
        </p>
        <a
          href="https://www.youtube.com/@sheryians"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-[#24cca6] text-black px-5 py-2 rounded hover:bg-opacity-90 transition helvetica-medium"
        >
          Explore free learning
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
