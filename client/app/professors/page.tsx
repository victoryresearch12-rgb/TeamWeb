'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Merriweather, Inter } from 'next/font/google';
import { professors } from '../data/professors';
import { students } from '../data/students';


const merr = Merriweather({ subsets: ['latin'], weight: ['700','600','400'], variable: '--font-merri' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-inter' });

export default function ProfessorsPage() {

	const studentImageMap: Record<string, string> = {
		'Э. Мөнхсүх': '/images/students/Munkhsukh.jpg',
		'М. Түмэн-Аюуш': '/images/students/Түмэн-Аюуш.jpg',
		'Б. Амаржаргал': '/images/students/Б.Амаржаргал.jpg',
		'Ж. Болдсайхан': '/images/students/Ж.Болдсайхан.pic.png',
		'Б. Эрдэнэмандал': '/images/students/erdenemandal.png',
		'О. Оюунжаргал': '/images/students/Oyunjargal.jpg',
		'С. Азжаргал': '/images/students/Azjargal.jpg',
		'Ч. Мичидгоо': '/images/students/Michidgoo.png',
		'Б. Амартүвшин': '/images/students/Amartuvshin.jpg',
		'Н. Гантөмөр': '/images/students/gantomor.jpg',
		'С. Батмөнх': '/images/students/Батмөнх.jpg',
	};

	function initials(name: string) {
		const parts = name.replace(/\./g, '').split(/\s+/).filter(Boolean);
		if (parts.length === 0) return '';
		if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
		return (parts[0][0] + parts[1][0]).toUpperCase();
	}

		return (
		<main className={`${merr.variable} ${inter.variable} font-sans bg-white text-deepGray`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="mb-8 sm:mb-12">
					<h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0A2647] mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-merri)' }}>
						Судалгааны багийн гишүүд
					</h1>
					<p className="text-sm sm:text-base lg:text-lg text-[#1B1B1B] max-w-3xl">
						Их өгөгдлийн судалгааны багт мэргэжлийн өндөр түвшний багш, судлаачид ажиллаж байна.
					</p>
				</div>				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{professors.map((professor, idx) => (
						<article 
							key={professor.id} 
							className="bg-white border border-neutral-100 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
						>
							<div className="aspect-square relative bg-neutral-100">
								<Image 
									src={professor.img} 
									alt={professor.name} 
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									loading={idx === 0 ? "eager" : "lazy"}
									priority={idx === 0}
									className="object-cover"
								/>
							</div>
							
							<div className="p-4 sm:p-6">
								<h2 className="font-serif text-lg sm:text-xl text-[#0A2647] mb-2" style={{ fontFamily: 'var(--font-merri)' }}>
									{professor.name}
								</h2>
								{/* <p className="text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
									{professor.title}
								</p> */}

								{/* <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
									{professor.expertise.map((tag) => (
										<span 
											key={tag}
											className="text-[10px] sm:text-xs border border-[#FFC300] rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[#0A2647]"
										>
											{tag}
										</span>
									))}
								</div> */}

								<div className="space-y-1 text-xs sm:text-sm text-neutral-600 mb-3 sm:mb-4">
									{/* <div className="flex items-center gap-2">
										<span>📧</span>
										<a href={`mailto:${professor.email}`} className="hover:text-[#0A2647]">
											{professor.email}
										</a>
									</div> */}
									{/* {professor.office && (
										<div className="flex items-center gap-2">
											<span>🏢</span>
											<span>{professor.office}</span>
										</div>
									)} */}
								</div>

								{/* <Link 
									href={`/professors/${professor.id}`}
									className="inline-block w-full text-center px-4 py-2 rounded-lg bg-[#0A2647] text-white text-sm font-medium hover:bg-[#144272] transition"
								>
									Дэлгэрэнгүй үзэх →
								</Link> */}
								{/* <Link 
									href={`/professors/`}
									className="inline-block w-full text-center px-3 sm:px-4 py-2 rounded-lg bg-[#0A2647] text-white text-xs sm:text-sm font-medium hover:bg-[#144272] transition"
								>
									Дэлгэрэнгүй үзэх →
								</Link> */}
								
							</div>
						</article>
					))}
				</div>
				{/* Research Students Section */}
<div className="mt-12 sm:mt-16 lg:mt-24">
	<h2 
		className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#0A2647] mb-6 sm:mb-8 lg:mb-10" 
		style={{ fontFamily: 'var(--font-merri)' }}
	>
		Судлаач оюутнууд
	</h2>

	{/* Doctoral */}
	<div className="mb-8 sm:mb-10 lg:mb-12">
		<h3 
			className="font-serif text-lg sm:text-xl lg:text-2xl text-[#0A2647] mb-4 sm:mb-5 lg:mb-6"
			style={{ fontFamily: 'var(--font-merri)' }}
		>
			Докторын оюутан
		</h3>

		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
			{students.doctoral.map((std, idx) => (
				<article key={idx} className="bg-white border border-neutral-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
					<div className="aspect-square relative bg-neutral-100">
						{studentImageMap[std.name] ? (
							<Image 
								src={studentImageMap[std.name]} 
								alt={std.name} 
								fill
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center bg-neutral-100 text-lg sm:text-xl font-semibold text-[#0A2647]">
								{initials(std.name)}
							</div>
						)}
					</div>
					<div className="p-3 sm:p-4 text-center">
						<div className="font-medium text-xs sm:text-sm text-[#0A2647] mb-1">{std.name}</div>
						<div className="text-[10px] sm:text-xs text-neutral-600">{std.major}</div>
					</div>
				</article>
			))}
		</div>
	</div>

	{/* Master's */}
	<div className="mb-8 sm:mb-10 lg:mb-12">
		<h3 
			className="font-serif text-lg sm:text-xl lg:text-2xl text-[#0A2647] mb-4 sm:mb-5 lg:mb-6"
			style={{ fontFamily: 'var(--font-merri)' }}
		>
			Магистрын оюутан
		</h3>

		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
			{students.master.map((std, idx) => (
				<article key={idx} className="bg-white border border-neutral-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
					<div className="aspect-square relative bg-neutral-100">
						{studentImageMap[std.name] ? (
							<Image 
								src={studentImageMap[std.name]} 
								alt={std.name} 
								fill
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center bg-neutral-100 text-lg sm:text-xl font-semibold text-[#0A2647]">
								{initials(std.name)}
							</div>
						)}
					</div>
					<div className="p-3 sm:p-4 text-center">
						<div className="font-medium text-xs sm:text-sm text-[#0A2647] mb-1">{std.name}</div>
						<div className="text-[10px] sm:text-xs text-neutral-600">{std.major}</div>
					</div>
				</article>
			))}
		</div>
	</div>

	{/* Bachelor's */}
	<div>
		<h3 
			className="font-serif text-lg sm:text-xl lg:text-2xl text-[#0A2647] mb-4 sm:mb-5 lg:mb-6"
			style={{ fontFamily: 'var(--font-merri)' }}
		>
			Бакалаврын оюутан
		</h3>

		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
			{students.bachelor.map((std, idx) => (
				<article key={idx} className="bg-white border border-neutral-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
					<div className="aspect-square relative bg-neutral-100">
						{studentImageMap[std.name] ? (
							<Image 
								src={studentImageMap[std.name]} 
								alt={std.name} 
								fill
								sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
								className="object-cover"
							/>
						) : (
							<div className="w-full h-full flex items-center justify-center bg-neutral-100 text-lg sm:text-xl font-semibold text-[#0A2647]">
								{initials(std.name)}
							</div>
						)}
					</div>
					<div className="p-3 sm:p-4 text-center">
						<div className="font-medium text-xs sm:text-sm text-[#0A2647] mb-1">{std.name}</div>
						<div className="text-[10px] sm:text-xs text-neutral-600">{std.major}</div>
					</div>
				</article>
			))}
		</div>
	</div>
</div>





			</div>
		</main>
	);
}
