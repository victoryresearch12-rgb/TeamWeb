'use client';

import Link from 'next/link';
import Image from 'next/image'; 
import { useState } from 'react';
import { usePathname } from 'next/navigation'; 
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Нүүр', href: '/' },
  { name: 'Багийн гишүүд', href: '/professors' },
  { name: 'Судалгаа', href: '/publications' },
  { name: 'Холбоо барих', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative h-16 w-10 shrink-0 flex items-center justify-center  bg-white">
                <Image 
                  src="/images/mustLogo.png" 
                  alt="MUST Logo" 
                  width={36} 
                  height={36} 
                  className="h-full w-full object-contain scale-90"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <div className="font-serif text-[#0A2647] text-md font-bold tracking-tight leading-none group-hover:text-[#144272] transition-colors">
                  Шинжлэх Ухаан Технологийн Их Сургууль
                </div>
                <div className="text-xs text-[#144272] font-medium tracking-wide mt-1">
                  Их өгөгдлийн судалгааны баг
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-[#144272] focus:ring-offset-2
                    ${isActive 
                      ? 'bg-[#F1F3F5] text-[#0A2647]' 
                      : 'text-[#1B1B1B] hover:text-[#0A2647] hover:bg-[#F1F3F5]'
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* <div className="hidden lg:flex items-center">
            <Link
              href="/contact"s
              className="px-6 py-2.5 bg-[#0A2647] text-white text-sm font-medium rounded-lg
                       hover:bg-[#144272] transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-[#0A2647] focus:ring-offset-2
                       hover:scale-[1.02] active:scale-[0.98] shadow-sm"
            >
              Хамтран ажиллах
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#0A2647] hover:bg-[#F1F3F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#144272]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200
                      ${isActive 
                        ? 'bg-[#F1F3F5] text-[#0A2647]' 
                        : 'text-[#1B1B1B] hover:text-[#0A2647] hover:bg-[#F1F3F5]'
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}