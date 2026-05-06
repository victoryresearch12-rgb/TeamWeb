export interface Professor {
  id: string;
  name: string;
  title: string;
  img: string;
  email: string;
  phone?: string;
  office?: string;
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
  { id: 'ulziibayar-sonom-ochir',
    name: 'С.Өлзийбаяр, дэд профессор, Ph.D',
    title: 'Дэд профессор — Компьютерийн хараа, Мультимодаль AI',
    img: '/images/professors/ulziibayar.png',
    email: 'ulziibayar@must.edu.mn',
    phone: '+976 7015-7333',
    office: '314',
    researchInterests: [
      'Компьютерийн хараа',
      'Видио шинжилнээ',
      'Их өгөгдлийн боловсруулалт',
      'Дүрс таних технологи',
      'Мультимодаль AI',
      'Гүн сургалт'
    ],
    expertise: ['AI', 'CV', 'Deep Learning', 'Multi-Camera Systems'],
    education: [
      {
        degree: 'Ph.D Системийн инновацийн инженерчлэл',
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
        title: 'Low-resource noisy transliteration normalization using large-scale language model',
        authors: 'Ulziibayar S., et al.',
        venue: 'IEEE Access',
        year: 2025,
        link: '#'
      },
      {
        title: 'Domain adaptation for driver\'s gaze mapping',
        authors: 'Ulziibayar, S., et al.',
        venue: 'IEEE Conference on Computer Vision',
        year: 2024,
        link: '#'
      },
      {
        title: 'Appearance-based Driver\'s Gaze Mapping Using a Dash Camera',
        authors: 'Ulziibayar S., et al.',
        venue: 'Joint 12th SCIS & 23rd ISIS',
        year: 2023,
        link: '#'
      }
    ],
  },
  {
    id: 'altangerel-ayush',
    name: 'А.Алтангэрэл, профессор, Ph.D',
    title: 'Профессор — NLP, TTS',
    img: '/images/professors/altangerel.png',
    email: 'altangerel@must.edu.mn',
    phone: '+976 7015-9111',
    office: 'Лаборатори 302',
    researchInterests: [
      'Эх хэлний боловсруулалт',
      'Ярианы синтез',
      'Хэлний загвар'
    ],
    expertise: ['NLP', 'TTS', 'Language Models', 'Mongolian NLP'],
    education: [
      {
        degree: 'Ph.D Мэдээллийн технологи',
        institution: 'МХТС, ШУТИС',
        year: '2012'
      },
      {
        degree: 'Магистр, Мэдээллийн технологи',
        institution: 'МХТС, ШУТИС',
        year: '1996'
      }
    ],
    publications: [
      {
        title: 'Multivariate time series prediction with multi-feature analysis',
        authors: 'Altangerel, A., et al.',
        venue: 'Expert Systems with Applications',
        year: 2025,
        link: '#'
      },
      {
        title: 'Residual trio feature network for efficient super-resolution',
        authors: 'Altangerel, A. et al.',
        venue: 'Complex & Intelligent Systems',
        year: 2023,
        link: '#'
      },
      {
        title: 'Text-to-speech system for low-resource language using cross-lingual transfer learning and data augmentation',
        authors: 'Altangerel, A., et al.',
        venue: 'EURASIP Journal on Audio, Speech, and Music Processing',
        year: 2021,
        link: '#'
      }
    ],
    
  },
  {
    id: 'zolzaya-byambadorj',
    name: 'Б.Золзаяа, дэд профессор, Ph.D',
    title: 'Дэд профессор — Эх хэлний боловсруулалт',
    img: '/images/professors/zolzaya.png',
    email: 'zolzaya@must.edu.mn',
    phone: '+976 7015-7333',
    office: 'Лаборатори 314',
    researchInterests: [
      'Эх хэлний боловсруулалт',
      'Бага нөөцтэй хэлний боловсруулалт',
      'Хэлний загвар',
      'Ярианы синтез'
    ],
    expertise: ['NLP', 'Text Processing', 'Low-Resource Languages', 'Speech synthesis'],
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
        authors: 'Zolzaya, B., et al.',
        venue: 'IEEE Access',
        year: 2025,
        link: '#'
      },
      {
        title: 'Text-to-speech system for low-resource language using cross-lingual transfer learning and data augmentation',
        authors: 'Zolzaya, B., et al.',
        venue: 'EURASIP Journal on Audio, Speech, and Music Processing',
        year: 2021,
        link: '#'
      },
      {
        title: 'Normalization of transliterated mongolian words using Seq2Seq model with limited data',
        authors: 'Zolzaya, B., et al.',
        venue: 'ACM Transactions on Asian and Low-Resource Language Information Processing',
        year: 2021,
        link: '#'
      }
    ],
    
  }
];

export function getProfessorById(id: string): Professor | undefined {
  return professors.find(p => p.id === id);
}

export function getAllProfessorIds(): string[] {
  return professors.map(p => p.id);
}
