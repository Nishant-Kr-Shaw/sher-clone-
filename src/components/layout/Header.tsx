'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <header className="py-4 px-6 flex items-center justify-between bg-[#0e0f0f] sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <div className="h-10 w-48 relative">
            <Image
              src="/images/logo.png"
              alt="Sheryians Coding School"
              fill
              style={{ objectFit: 'contain' }}
              className="relative"
            />
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-white hover:text-[#24cca6] transition helvetica-regular">
          Home
        </Link>
        <Link href="/courses" className="text-white hover:text-[#24cca6] transition helvetica-regular">
          Courses
        </Link>
        <Link href="/courses/courses-details/Job%20Ready%20AI%20Powered%20Cohort:%20Web%20+%20DSA%20+%20Aptitude" className="text-white hover:text-[#24cca6] transition helvetica-regular">
          Live Course
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsCallbackOpen(true)}
          className="bg-[#24cca6] text-black px-5 py-2 rounded hover:bg-opacity-90 transition helvetica-medium"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
