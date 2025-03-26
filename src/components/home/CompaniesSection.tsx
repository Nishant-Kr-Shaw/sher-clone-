'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CompaniesSection: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-16 flex justify-center items-center">
          <span className="neue-bold">Top</span>
          <span className="highlight-text mx-2">companies</span>
          <span className="neue-bold">our</span>
          <span className="block neue-bold">students working with</span>
        </h2>

        <div className="relative h-32 md:h-40 mb-16">
          <Image
            src="/images/companies-logo.png"
            alt="Companies our students work with"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <Link href="/courses">
          <span className="inline-block bg-[#24cca6] text-black px-8 py-3 rounded hover:bg-opacity-90 transition helvetica-medium">
            Explore Courses
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CompaniesSection;
