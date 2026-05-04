import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Merriweather, Inter } from 'next/font/google';
import { getProfessorById, getAllProfessorIds } from '../../data/professors';
import { notFound } from 'next/navigation';

const merr = Merriweather({ subsets: ['latin'], weight: ['700','600','400'], variable: '--font-merri' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-inter' });

interface ProfessorDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProfessorDetailPage({ params }: ProfessorDetailPageProps) {
  const { id } = await params;
  const professor = getProfessorById(id);

  if (!professor) {
    notFound();
  }

  return (
    <main className={`${merr.variable} ${inter.variable} font-sans bg-white text-deepGray`}>
      
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link href="/professors" className="text-sm text-neutral-600 hover:text-[#0A2647] inline-flex items-center gap-2">
            ← Буцах
          </Link>
        </div>
      </div>

      
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-neutral-100 mb-6">
                <Image 
                  src={professor.img} 
                  alt={professor.name} 
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="font-serif text-3xl text-[#0A2647] mb-3" style={{ fontFamily: 'var(--font-merri)' }}>
                {professor.name}
              </h1>
              <p className="text-lg text-neutral-600 mb-6">
                {professor.title}
              </p>

              
              <div className="bg-[#F8FAFB] rounded-xl p-6 mb-6">
                <h3 className="font-serif text-lg text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                  Холбоо барих
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📧</span>
                    <div>
                      <div className="text-neutral-500 text-xs mb-1">Имэйл</div>
                      <a href={`mailto:${professor.email}`} className="text-[#0A2647] hover:underline">
                        {professor.email}
                      </a>
                    </div>
                  </div>
                  {professor.phone && (
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📞</span>
                      <div>
                        <div className="text-neutral-500 text-xs mb-1">Утас</div>
                        <a href={`tel:${professor.phone}`} className="text-[#0A2647]">
                          {professor.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  {professor.office && (
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🏢</span>
                      <div>
                        <div className="text-neutral-500 text-xs mb-1">Өрөө</div>
                        <span className="text-[#0A2647]">{professor.office}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              
              <div className="flex flex-wrap gap-2">
                {professor.expertise.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs border border-[#FFC300] rounded-full px-3 py-1.5 text-[#0A2647] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-2 space-y-10">
            
            <section>
              <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                Товч танилцуулга
              </h2>
              <p className="text-[#1B1B1B] leading-relaxed text-lg">
                {professor.bio}
              </p>
            </section>

            
            <section>
              <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                Судалгааны сонирхлын чиглэл
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {professor.researchInterests.map((interest, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FFC300] mt-1">▪</span>
                    <span className="text-[#1B1B1B]">{interest}</span>
                  </div>
                ))}
              </div>
            </section>

            
            <section>
              <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                Боловсрол
              </h2>
              <div className="space-y-4">
                {professor.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-[#FFC300] pl-4">
                    <div className="font-medium text-[#0A2647]">{edu.degree}</div>
                    <div className="text-sm text-neutral-600">{edu.institution}</div>
                    <div className="text-sm text-neutral-500">{edu.year}</div>
                  </div>
                ))}
              </div>
            </section>

            
            <section>
              <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                Сонгосон нийтлэлүүд
              </h2>
              <div className="space-y-6">
                {professor.publications.map((pub, idx) => (
                  <article key={idx} className="border-b border-neutral-100 pb-6 last:border-0">
                    <h3 className="font-serif text-lg text-[#0A2647] mb-2" style={{ fontFamily: 'var(--font-merri)' }}>
                      {pub.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-1">{pub.authors}</p>
                    <p className="text-sm text-neutral-500 mb-2">
                      {pub.venue}, {pub.year}
                    </p>
                    {pub.link && (
                      <a 
                        href={pub.link} 
                        className="text-sm text-[#0A2647] underline decoration-transparent hover:decoration-[#FFC300]"
                      >
                        DOI / PDF →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>

            
            {professor.courses && professor.courses.length > 0 && (
              <section>
                <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                  Заадаг хичээлүүд
                </h2>
                <ul className="space-y-2">
                  {professor.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFC300] mt-1">▪</span>
                      <span className="text-[#1B1B1B]">{course}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            
            {professor.awards && professor.awards.length > 0 && (
              <section>
                <h2 className="font-serif text-2xl text-[#0A2647] mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
                  Шагнал, урамшуулал
                </h2>
                <ul className="space-y-2">
                  {professor.awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFC300] mt-1">🏆</span>
                      <span className="text-[#1B1B1B]">{award}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// Generate static params for all professor IDs
export function generateStaticParams() {
  const ids = getAllProfessorIds();
  return ids.map((id) => ({
    id: id,
  }));
}
