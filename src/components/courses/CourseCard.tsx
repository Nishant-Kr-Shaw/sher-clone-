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
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm helvetica-light">₹ {originalPrice}</span>
            )}
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

export default CourseCard;
