'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Facebook, Youtube, Chromium } from 'lucide-react';

// Align quick links with the main header navigation
const quickLinks = [
  { name: 'Нүүр', href: '/' },
  { name: 'Багийн гишүүд', href: '/professors' },
  { name: 'Судалгаа', href: '/publications' },
  { name: 'Холбоо барих', href: '/contact' },
];

const departments = [
  { name: 'Хиймэл оюун ухааны лаборатори', href: '/research/ai' },
  { name: 'Систем ба сүлжээ', href: '/research/systems' },
  { name: 'Өгөгдлийн шинжлэх ухааны бүлэг', href: '/research/data-science' },
  { name: 'Хүний-компьютер харилцах', href: '/research/hci' },
  { name: 'Аюулгүй байдал ба нууцлал', href: '/research/security' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/mustsict' },
  { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/@%D0%A8%D0%B8%D0%BD%D0%B6%D0%BB%D1%8D%D1%85%D0%A3%D1%85%D0%B0%D0%B0%D0%BD%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9%D0%BD%D0%98%D1%85%D0%A1%D1%83%D1%80%D0%B3%D1%83' },
  { name: 'Website', icon: Chromium, href: 'https://www.sict.edu.mn/?fbclid=IwY2xjawOlowlleHRuA2FlbQIxMABicmlkETFJYXRkVXRqcHhXRzNOT0Y5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgSNDt35m76dxd_SpIkB2tphqouOuZ-IJ24Pm4H2h5oo6lptHNmRYBy_CH8j_aem_ugyUocDY4QUmbBkliur1Ug' },
];

export default function Footer() {

  return (
    <footer className="bg-[#0A2647] text-white border-t border-[#144272]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center space-x-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden">
                  <Image 
                    src="/images/mustLogo.png" 
                    alt="MUST Logo" 
                    width={48} 
                    height={48}
                    className="h-full w-full object-contain scale-100" 
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold leading-tight">
                    Шинжлэх Ухаан Технологийн <br />Их Сургууль
                  </h3>
                  <p className="text-xs text-[#FFC300] font-medium tracking-wide mt-1">
                    Их өгөгдлийн судалгааны баг
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed max-w-sm text-justify">
                Их өгөгдлийн судалгааны баг нь дижитал эринд хурдтай өсч буй өгөгдлийг үр ашигтай боловсруулж, шинжилгээ хийх замаар инноваци, судалгаа, боловсролд хувь нэмэр оруулдаг. 
              </p>

            </div>

            <div className="md:col-span-1 lg:col-span-4 lg:pl-8">
              <h3 className="font-serif text-lg font-semibold mb-6 text-white border-b border-[#144272] pb-2 inline-block">
                Холбоос
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#FFC300] text-sm transition-all duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 transition-all duration-200 overflow-hidden mr-0 group-hover:mr-2 text-[#FFC300] font-bold">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1 lg:col-span-4">
              <h3 className="font-serif text-lg font-semibold mb-6 text-white border-b border-[#144272] pb-2 inline-block">
                Холбоо барих
              </h3>
                <div className="mt-4 sm:mt-0 space-y-4 mb-4">
                 
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#FFC300] shrink-0" />
                    <span className="text-sm text-white/80">Захирлын туслах: 77601333, 70151333 <br /> Сургалтын алба: 77602333, 70152333</span>

                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#FFC300] shrink-0" />
                    <a href="mailto:ulziibayar@must.edu.mn" className="text-sm text-white/80 hover:underline decoration-[#FFC300] underline-offset-4">
                      ulziibayar@must.edu.mn
                    </a>
                  </div>
                   <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#FFC300] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/80">
                    ШУТИС-ийн Мэдээлэл, холбооны технологийн сургууль, 22-р хороо, Баянзүрх дүүрэг, Улаанбаатар 13341, Монгол улс
                  </span>
                </div>
                </div>
              
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Бидэнтэй холбогдох</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-lg bg-[#144272] flex items-center justify-center text-white
                                 hover:bg-[#FFC300] hover:text-[#0A2647] transition-all duration-300
                                 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FFC300] focus:ring-offset-2 focus:ring-offset-[#0A2647]"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}