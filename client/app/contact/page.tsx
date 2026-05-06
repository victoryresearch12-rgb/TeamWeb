"use client";

import React from "react";
import { Merriweather, Inter } from "next/font/google";

const merri = Merriweather({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-merri",
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export default function ContactPage() {
  return (
    <main className={`${merri.variable} ${inter.variable} bg-white text-[#1B1B1B]`}>
      
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16"
        style={{ backgroundImage: 'url(/images/mustOut.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-white font-bold tracking-tight text-[36px] sm:text-[42px] leading-[130%]">
            Холбоо барих
          </h1>
          <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] text-white/90 max-w-xl leading-[150%] font-sans">
            Хамтын ажиллагаа, судалгаа, сургалттай холбоотойгоор бидэнтэй холбогдоно уу.
          </p>
        </div>
      </section>

      
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        
        
        <div className="space-y-4 sm:space-y-5 max-w-2xl">
          
          
          <div className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-6 hover:border-[#FFC300] transition-colors">
            <h2 className="font-serif text-[#0A2647] font-semibold mb-2 text-[20px] sm:text-[22px]">Хаяг</h2>
            <p className="text-neutral-700 font-sans leading-[160%] text-[14px] sm:text-[15px]">
              ШУТИС-ийн Мэдээлэл, холбооны технологийн сургууль
              <br />22-р хороо, Баянзүрх дүүрэг
              <br />Улаанбаатар 13341, Монгол улс
            </p>
            <a 
              href="https://maps.app.goo.gl/Xc1hvtig1zK1zMp49" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-3 text-[13px] px-3 py-1.5 rounded border border-neutral-300 text-[#0A2647] hover:border-[#FFC300] hover:bg-[#FFC300]/5 transition-colors font-sans"
            >
              Газрын зураг →
            </a>
          </div>

          
          <div className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-6 hover:border-[#FFC300] transition-colors">
            <h2 className="font-serif text-[#0A2647] font-semibold mb-2 text-[20px] sm:text-[22px]">И-мэйл</h2>
            <a
              href="mailto:ulziibayar@must.edu.mn"
              className="text-[14px] sm:text-[15px] text-[#0A2647] underline hover:text-[#144272] transition-colors font-sans"
            >
              ulziibayar@must.edu.mn
            </a>
            <p className="text-neutral-500 text-[13px] mt-1 font-sans">Хариу: 2–3 ажлын өдөр</p>
          </div>

          
          <div className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-6 hover:border-[#FFC300] transition-colors">
            <h2 className="font-serif text-[#0A2647] font-semibold mb-2 text-[20px] sm:text-[22px]">Утас</h2>
            <div className="space-y-1">
              <p className="text-[14px] sm:text-[15px] text-neutral-700 font-sans">Захирлын туслах: 77601333, 70151333</p>
              <p className="text-[14px] sm:text-[15px] text-neutral-700 font-sans">Сургалтын алба: 77602333, 70152333</p>
            </div>
            <p className="text-neutral-500 text-[13px] mt-2 font-sans">Ажлын цаг: Даваа–Баасан, 09:00–18:00</p>
          </div>

        </div>
      </section>
    </main>
  );
}
