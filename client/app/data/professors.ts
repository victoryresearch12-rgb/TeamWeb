export interface Professor {
  id: string;
  name: string;
  title: string;
  img: string;
  email: string;
  phone?: string;
  office?: string;
  bio: string;
  researchInterests: string[];
  expertise: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  publications: {
    title: string;
    authors: string;
    venue: string;
    year: number;
    link?: string;
  }[];
  courses?: string[];
  awards?: string[];
}

export const professors: Professor[] = [
  {
    id: 'ulziibayar-sonom-ochir',
    name: 'С.Өлзийбаяр, дэд профессор, Ph.D',
    title: 'Дэд профессор — Компьютерийн хараа, Мультимодаль AI',
    img: '/images/professors/ulziibayar.png',
    email: 'ulziibayar@must.edu.mn',
    phone: '+976 7015-7333',
    office: '314',
    bio: 'Би компьютерийн хараа болон мультимодаль AI-ийн салбарт судалгаа явуулж байна. Миний гол сонирхол бол жолоочийн анхаарал илрүүлэх, мульти-камера систем болон дүрс боловсруулалтын шинэлэг аргуудыг хөгжүүлэх явдал юм. Одоогоор тээврийн хэрэгслийн аюулгүй байдлыг сайжруулах зорилготой практик шийдлүүдийг боловсруулж байна.',
    researchInterests: [
      'Компьютерийн хараа',
      'Жолоочийн анхаарал илрүүлэх систем',
      'Мульти-камера боловсруулалт',
      'Дүрс таних технологи',
      'Мультимодаль AI',
      'Гүн сургалт'
    ],
    expertise: ['AI', 'CV', 'Deep Learning', 'Multi-Camera Systems'],
    education: [
      {
        degree: 'Ph.D компьютерийн шинжлэх ухаан',
        institution: 'Токушима их сургууль, Япон',
        year: '2024'
      },
      {
        degree: 'Магистр, Мэдээллийн технологи',
        institution: 'МХТС, ШУТИС',
        year: '2010'
      }
    ],
    publications: [
      {
        title: 'Domain adaptation for driver\'s gaze mapping',
        authors: 'Sonom-Ochir, U., A. Ayush',
        venue: 'IEEE Conference on Computer Vision',
        year: 2024,
        link: '#'
      },
      {
        title: 'Multi-camera system for traffic monitoring',
        authors: 'Ulziibayar S., et al.',
        venue: 'International Journal of Computer Vision',
        year: 2023,
        link: '#'
      }
    ],
    courses: ['Компьютерийн хараа', 'Гүн сургалт', 'AI системийн хөгжүүлэлт'],
    awards: ['Шилдэг судалгааны ажил - 2024', 'Залуу судлаачийн шагнал - 2022']
  },
  {
    id: 'altangerel-ariunaa',
    name: 'А.Алтангэрэл, профессор, Ph.D',
    title: 'Профессор — NLP, TTS',
    img: '/images/professors/altangerel.png',
    email: 'altangerel@must.edu.mn',
    phone: '+976 7015-9111',
    office: 'Лаборатори 302',
    bio: 'Би эх хэлний боловсруулалт (NLP) болон ярианы синтез (TTS) технологийн салбарт 15 гаруй жил судалгаа хийж ирсэн. Монгол хэлний боловсруулалтын онцлог, текстийн нормалчлал, транслитераци зэрэг асуудлуудыг судалж, практик шийдлүүдийг боловсруулж байна. Олон улсын хамтын ажиллагааны хүрээнд хэд хэдэн төслүүдийг удирдсан.',
    researchInterests: [
      'Натурал хэлний боловсруулалт',
      'Текст-рүү-яриа синтез',
      'Монгол хэлний боловсруулалт',
      'Текстийн нормалчлал',
      'Транслитераци',
      'Хэлний загвар'
    ],
    expertise: ['NLP', 'TTS', 'Language Models', 'Mongolian NLP'],
    education: [
      {
        degree: 'Ph.D хэл шинжлэл ба компьютер',
        institution: 'Токиогийн Их Сургууль',
        year: '2008'
      },
      {
        degree: 'Магистр, Компьютерийн шинжлэх ухаан',
        institution: 'Улсын Их Сургууль',
        year: '2003'
      }
    ],
    publications: [
      {
        title: 'Mongolian text-to-speech synthesis using deep learning',
        authors: 'Altangerel, A., et al.',
        venue: 'ACL Conference',
        year: 2024,
        link: '#'
      },
      {
        title: 'Neural machine translation for Mongolian',
        authors: 'Altangerel, A., Byambadorj, Z.',
        venue: 'EMNLP',
        year: 2023,
        link: '#'
      },
      {
        title: 'Mongolian language processing: challenges and solutions',
        authors: 'Altangerel, A.',
        venue: 'Computational Linguistics',
        year: 2022,
        link: '#'
      }
    ],
    courses: ['Натурал хэлний боловсруулалт', 'Машин орчуулга', 'NLP-ийн суурь'],
    awards: ['Шилдэг багш - 2023', 'Олон улсын хамтын ажиллагааны шагнал - 2021', 'Гавьяат судлаач - 2019']
  },
  {
    id: 'zolzaya-byambadorj',
    name: 'Б.Золзаяа, дэд профессор, Ph.D',
    title: 'Дэд профессор — Эх хэлний боловсруулалт',
    img: '/images/professors/zolzaya.png',
    email: 'zolzaya@must.edu.mn',
    phone: '+976 7015-7333',
    office: 'Лаборатори 314',
    bio: 'Би текст болон хэлний боловсруулалтын чиглэлээр докторын зэрэг хамгаалсан бөгөөд одоо бага нөөцтэй хэлний боловсруулалтын асуудлуудыг судалж байна. Миний сүүлийн үеийн судалгаа нь монгол хэлний транслитераци нормалчлал, текст хураангуй гаргах зэрэг асуудалд төвлөрч байна. Залуу судлаачдыг удирдан дэмжихийг эрхэмлэдэг.',
    researchInterests: [
      'Текстийн боловсруулалт',
      'Бага нөөцтэй хэлний боловсруулалт',
      'Транслитераци нормалчлал',
      'Текст хураангуй',
      'Хэлний загвар',
      'LLM хэрэглээ'
    ],
    expertise: ['NLP', 'Text Processing', 'Low-Resource Languages', 'LLM'],
    education: [
      {
        degree: 'Ph.D Системийн инновацийн инженерчлэл',
        institution: 'Токушима их сургууль, Япон',
        year: '2022'
      },
      {
        degree: 'Магистр, Мэдээллийн технологи',
        institution: 'МХТС, ШУТИС',
        year: '2006'
      }
    ],
    publications: [
      {
        title: 'Low-resource noisy transliteration normalization using large-scale language model',
        authors: 'Byambadorj, Z., Ulziibayar S., et al.',
        venue: 'COLING 2025',
        year: 2025,
        link: '#'
      },
      {
        title: 'Mongolian text summarization using transformer models',
        authors: 'Byambadorj, Z., Altangerel, A.',
        venue: 'EMNLP',
        year: 2024,
        link: '#'
      },
      {
        title: 'Neural approaches to Mongolian morphological analysis',
        authors: 'Byambadorj, Z.',
        venue: 'ACL Workshop',
        year: 2023,
        link: '#'
      }
    ],
    courses: ['Текстийн боловсруулалт', 'Машин сургалтын суурь', 'NLP практикум'],
    awards: ['Залуу эрдэмтний шагнал - 2024', 'Шилдэг нийтлэл - COLING 2025']
  }
];

export function getProfessorById(id: string): Professor | undefined {
  return professors.find(p => p.id === id);
}

export function getAllProfessorIds(): string[] {
  return professors.map(p => p.id);
}
