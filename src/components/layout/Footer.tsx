'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0f0f] pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Media */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Sheryians Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-white helvetica-medium">Let's connect with our socials</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/sheryians_coding_school" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                </svg>
              </a>
              <a href="https://in.linkedin.com/company/the-sheryians-coding-school" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.335 18.339H15.67v-4.177c0-1.256-.023-2.878-1.752-2.878-1.756 0-2.026 1.37-2.026 2.786v4.269h-2.665V7.75h2.56v1.17h.035c.45-.85 1.549-1.748 3.188-1.748 3.411 0 4.026 2.239 4.026 5.15v6.017zM5.982 6.57a1.56 1.56 0 1 1 .005-3.12 1.56 1.56 0 0 1-.005 3.12zm1.336 11.769H4.656V7.75h2.662v10.589zM19.67 2H4.33C3.046 2 2 3.03 2 4.297v15.406C2 20.97 3.046 22 4.33 22h15.34c1.284 0 2.33-1.03 2.33-2.297V4.297C22 3.03 20.954 2 19.67 2z" />
                </svg>
              </a>
              <a href="https://discord.gg/D23JkFqrgz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.127 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@sheryians" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://twitter.com/sheryians_" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xl mb-4 neue-bold">COMPANY</h3>
            <ul className="space-y-2 helvetica-light">
              <li>
                <Link href="/aboutUs" className="text-white hover:text-[#24cca6] transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@sheryians.com" className="text-white hover:text-[#24cca6] transition">
                  Support
                </a>
              </li>
              <li>
                <Link href="/terms-and-conditions/Terms_and_Conditions.pdf" className="text-white hover:text-[#24cca6] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions/Terms_and_Conditions.pdf" className="text-white hover:text-[#24cca6] transition">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="/Pricing&Refund-Policy/Pricing-and-Refund_policy.pdf" className="text-white hover:text-[#24cca6] transition">
                  Pricing and Refund
                </Link>
              </li>
              <li>
                <Link href="/hire" className="text-white hover:text-[#24cca6] transition">
                  Hire From Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white text-xl mb-4 neue-bold">COMMUNITY</h3>
            <ul className="space-y-2 helvetica-light">
              <li>
                <a href="https://www.instagram.com/inertiabysheryians" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#24cca6] transition">
                  Inertia
                </a>
              </li>
              <li>
                <a href="https://discord.gg/D23JkFqrgz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#24cca6] transition">
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl mb-4 neue-bold">Get In Touch</h3>
            <ul className="space-y-2 helvetica-light">
              <li>
                <a href="tel:+919691778470" className="text-white hover:text-[#24cca6] transition">
                  +91 9691778470
                </a>
              </li>
              <li>
                <a href="tel:+918109161752" className="text-white hover:text-[#24cca6] transition">
                  +91 8109161752,
                </a>
              </li>
              <li>
                <a href="mailto:hello@sheryians.com" className="text-white hover:text-[#24cca6] transition">
                  hello@sheryians.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Sheryians+Coding+School/@23.2512609,77.4627502,17z/data=!3m1!4b1!4m6!3m5!1s0x397c43977890a98d:0x928a948dc6de732e!8m2!3d23.251256!4d77.4653251!16s%2Fg%2F11gvy2g2z8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#24cca6] transition"
                >
                  23-B, Indrapuri Sector C, Bhopal(MP), 462021
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
          <p className="text-white helvetica-light">
            Copyright © 2025 Sheryians Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
