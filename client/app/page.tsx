'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Merriweather, Inter } from 'next/font/google';
import { professors as professorsData } from './data/professors';

const merr = Merriweather({ subsets: ['latin'], weight: ['700','600','400'], variable: '--font-merri' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-inter' });

const researchAreasText = `Тус судалгааны багийн гол судалгааны чиглэлүүдэд дараах асуудлууд багтана:`;
const researchAreasList = [
  'Их өгөгдөл дээр суурилсан текст олборлолт ба эх хэлний боловсруулалт (NLP)',
  'Эрүүл мэнд, боловсролын салбарын өгөгдөлд суурилсан таамаглалтын загвар боловсруулах',
  'Машин сургалтын аргаар эрсдэл тооцоолох, оновчтой шийдвэр гаргах',
  'Ухаалаг төхөөрөмж болон компьютерийн хараанд суурилсан хэрэглээний системүүдийг хөгжүүлэх',
  'Дүрс, дуу, текст зэрэг мультимодаль өгөгдлийг хамтад нь боловсруулж, шинжилгээ хийх',
];
const researchAreasSummary = 'Эдгээр чиглэлээр хэрэгжүүлж буй судалгаа, хөгжүүлэлтийн ажил нь бодит хэрэглээнд нийцсэн, шийдэлд суурилсан инновацлаг үр дүнг бий болгоход чиглэдэг.';

const publications = [
  { title: 'Low-resource noisy transliteration normalization using large-scale language model.', authors: 'Byambadorj, Z., Ulziibayar S., et al.', year: 2025, link: '#' },
  { title: 'Multivariate time series prediction with multi-feature analysis.', authors: 'Chen, J., Azhu G., A. Ayush', year: 2025, link: '#' },
  { title: 'Domain adaptation for driver\'s gaze mapping', authors: 'Sonom-Ochir, U., A. Ayush', year: 2024, link: '#' },
];

export default function Home() {
  return (
    <main className={`${merr.variable} ${inter.variable} font-sans bg-white text-deepGray`}>

      
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-[#0A2647] text-[44px] leading-tight mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
              Их өгөгдлийн судалгааны баг
            </h1>

            <p className="text-[18px] leading-normal text-[#1B1B1B] max-w-2xl mb-6">
Их өгөгдлийн судалгааны баг нь том хэмжээний өгөгдлийг үр ашигтай шинжилж, инноваци, судалгаа болон боловсролын хөгжилд хувь нэмэр оруулахыг зорьдог. Тэд өгөгдөл олборлолт, машин сургалт, хиймэл оюун ухаан зэрэг аргачлалуудыг ашиглан хэрэглээнд суурилсан шийдэл боловсруулж, оюутан судлаачдад сургалт, дадлагын орчин бүрдүүлдэг.            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link href="/publications" className="inline-block px-5 py-3 rounded-lg text-sm font-medium bg-[#0A2647] text-white hover:bg-[#144272] transform transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#144272]">
                Судалгааны чиглэлүүд
              </Link>
              <Link href="/contact" className="inline-block px-5 py-3 rounded-lg text-sm font-medium border border-neutral-200 text-[#0A2647] hover:bg-[#F1F3F5] transition">
                Холбоо барих
              </Link>
            </div>

          </div>

          
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ minHeight: 320 }}>
              <Image
                src="/images/mustOut.jpg"
                alt="Lab environment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-white/0" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-b from-white to-neutral-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <h2 className="font-serif text-3xl text-[#0A2647] mb-16 text-center" style={{ fontFamily: 'var(--font-merri)' }}>
            Гол судалгааны чиглэлүүд
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAreasList.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-6 rounded-xl border border-neutral-100 hover:border-[#FFC300]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#0A2647] to-[#144272] flex items-center justify-center text-white text-sm font-medium">
                  {idx + 1}
                </div>
                <p className="text-sm leading-relaxed text-[#1B1B1B] pl-12 group-hover:text-[#0A2647] transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl text-[#0A2647] mb-6" style={{ fontFamily: 'var(--font-merri)' }}>
            Сүүлийн нийтлэлүүд
          </h2>

          <ul className="divide-y divide-neutral-200">
            {publications.map((p, i) => (
              <li key={i} className="py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[18px] font-serif mb-1" style={{ fontFamily: 'var(--font-merri)' }}>
                      {p.title}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {p.authors} • {p.year}
                    </div>
                  </div>
                  <div className="ml-4 shrink-0">
                    <a href={p.link} className="text-sm underline decoration-transparent hover:decoration-[#FFC300]">
                      DOI / PDF
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link href="/publications" className="text-sm font-medium text-[#0A2647] underline">
              Бүгдийг үзэх →
            </Link>
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl text-[#0A2647] mb-6" style={{ fontFamily: 'var(--font-merri)' }}>
          Судалгааны багийн гишүүд
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {professorsData.map((p) => (
            <article key={p.id} className="flex items-start gap-4 p-4 rounded-xl border border-neutral-100 hover:shadow-sm transition">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-100">
                  <Image src={p.img} alt={p.name} width={80} height={80} className="object-cover" style={{height: 'auto', width: 'auto'}} />
                </div>
              </div>
              <div>
                <div className="text-lg font-serif" style={{ fontFamily: 'var(--font-merri)' }}>{p.name}</div>
                <div className="text-sm text-neutral-600 mb-2">{p.title}</div>
                <div className="flex gap-2 flex-wrap">
                  {p.expertise.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs border border-[#FFC300] rounded-full px-2 py-0.5 text-[#0A2647]">{tag}</span>
                  ))}
                </div>
                <div className="mt-3">
                  <Link href={`/professors/${p.id}`} className="text-sm underline decoration-transparent hover:decoration-[#FFC300]">
                    Дэлгэрэнгүй→
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/professors" className="inline-block px-4 py-2 rounded-lg border border-neutral-200 text-sm">
            Багийн бүрэлдэхүүнийг үзэх →
          </Link>
        </div>
      </section>

      
      <section className="border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl text-[#0A2647] mb-12" style={{ fontFamily: 'var(--font-merri)' }}>
            Хамтран ажиллагч байгууллагууд
          </h2>

          <div className="space-y-12">
            
            <article className="border-b border-neutral-200 pb-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 h-32 relative bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/partners/hospital.jpg"
                    alt="Эм Судлалын Хүрээлэн"
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[#0A2647] mb-2" style={{ fontFamily: 'var(--font-merri)' }}>
                    Эм Судлалын Хүрээлэн
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Судалгааны чиглэл, чадавхын талаар уулзаж, &quotDrug Repositioning&quot-ийн тойм танилцуулан хамтын төсөл эхлүүлэхээр тохиролцлоо.
                  </p>
                </div>
              </div>
            </article>

            
            <article>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 h-32 relative bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/partners/project1.jpg"
                    alt="PD Solutions LLC"
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-[#0A2647] mb-2" style={{ fontFamily: 'var(--font-merri)' }}>
                    PD Solutions LLC
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                    AI судалгаа, хөгжүүлэлтийг хамтран дэмжих Санамж бичиг байгууллаа.
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">Хүлээгдэж буй үр дүн</p>
                    <ul className="text-sm text-neutral-700 space-y-1">
                      <li>• Дотоодын AI шийдлүүд</li>
                      <li>• Технологийн түншлэл бэхжих</li>
                      <li>• Бодит бүтээгдэхүүн, үйлчилгээ</li>
                      <li>• Ур чадвар ба экосистем тэлэх</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
    </main>
  );
}
