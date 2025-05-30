"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import FriendLinks from '@/components/FriendLinks';
export default function Footer() {
  const pathname = usePathname();

  // 检查当前路径是否以 '/embed' 开头
  const isEmbedPage = pathname.startsWith('/embed');

  // 如果是 embed 页面，不显示 NavBar
  if (isEmbedPage) {
    return null;
  }

  return (
    <footer className="block"> {/* Container */}
      {/* Component */}
        <div className="w-full border-b border-black mt-16"></div>
        <div className="p-14 md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
          <div className="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
            <a href="/about-us" className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"> About Us </a>
            <a href="/contact-us" className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"> Contact Us </a>
            <a href="/terms-of-use" className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"> Terms Of Use </a>
            <a href="/privacy-policy" className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"> Privacy Policy </a>
          </div>
          <p className="text-gray-500 text-sm sm:text-base"> © Copyright 2024. All rights reserved. </p>
        </div>
        <div className="w-full border-b border-black mt-16">
          <FriendLinks />
        </div>
    </footer>
  )
}