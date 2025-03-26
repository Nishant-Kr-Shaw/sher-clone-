'use client';

import React from 'react';

const MarqueeBanner: React.FC = () => {
  const bannerText = "Holi Flash Sale! Save 20% TODAY on all Courses Use: HOLI2025 **** Ends at midnight! Don't miss your chance to transform your career!";

  // Double the text for seamless looping
  const repeatedText = `${bannerText} ${bannerText} ${bannerText} ${bannerText}`;

  return (
    <div className="marquee-banner py-1 px-2">
      <div className="marquee-content helvetica-medium">
        {repeatedText.split('****').map((segment, index) => (
          <React.Fragment key={index}>
            {segment.includes('HOLI2025') ? (
              <>
                {segment.split('HOLI2025')[0]}
                <strong className="font-bold">HOLI2025</strong>
                {segment.split('HOLI2025')[1]}
              </>
            ) : (
              segment
            )}
            {index < repeatedText.split('****').length - 1 && (
              <strong className="font-bold"> **** </strong>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
