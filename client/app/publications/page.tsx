'use client';

import React from 'react';
import Link from 'next/link';
import { Merriweather, Inter } from 'next/font/google';

const merri = Merriweather({ subsets: ['latin', 'cyrillic'], weight: ['400', '600', '700'], variable: '--font-merri' });
const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500'], variable: '--font-inter' });

interface Paper {
  title: string;
  authors: string;
  year: string;
  venue?: string;
  link?: string;
  note?: string;
}

interface Project {
  title: string;
  team: string;
  year: string;
  event: string;
  note?: string;
}

export default function ResearchPage() {
  const [activeTab, setActiveTab] = React.useState<'journals' | 'conferences' | 'domestic' | 'projects' | 'achievements'>('journals');

  const indexedJournals: Paper[] = [
    {
      title: "Low-resource noisy transliteration normalization using large-scale language model.",
      authors: "Byambadorj, Zolzaya, Ulziibayar Sonom-Ochir, Munkhsukh Enkhbayar, Hyun-chul Kim, Altangerel Ayush",
      year: "2025",
      venue: "IEEE Access",
      link: "https://ieeexplore.ieee.org/abstract/document/11017577"
    },
    {
      title: "Multivariate time series prediction with multi-feature analysis.",
      authors: "Chen, Junfeng, Azhu Guan, Jingjing Du, Altangerel Ayush",
      year: "2025",
      venue: "Expert Systems with Applications 268, 126302",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417424031695"
    },
    {
      title: "Residual trio feature network for efficient super-resolution.",
      authors: "Chen Junfeng, Mao Mao, Azhu Guan, Altangerel Ayush",
      year: "2025",
      venue: "Complex & Intelligent Systems 11(1):9",
      link: "https://link.springer.com/article/10.1007/s40747-024-01624-8"
    },
    {
      title: "Domain adaptation for driver's gaze mapping for different drivers and new environments.",
      authors: "Sonom-Ochir Ulziibayar, Stephen Githinji Karungaru, Kenji Terada, Altangerel Ayush",
      year: "2024",
      venue: "International Journal of Advances in Intelligent Informatics 10(1):94–108",
      link: "https://ijain.org/index.php/IJAIN/article/view/1168/ijain_vol10i1_pp94-108"
    },
    {
      title: "Detection of Driver's Visual Distraction Using Dual Cameras.",
      authors: "Sonom-Ochir Ulziibayar, Altangerel Ayush",
      year: "2022",
      venue: "International Journal of Innovative Computing, Information and Control 18(5):1445–1461"
    },
    {
      title: "Text-to-speech system for low-resource language using cross-lingual transfer learning and data augmentation.",
      authors: "Byambadorj Zolzaya, Ryota Nishimura, Altangerel Ayush, Kengo Ohta, Norihide Kitaoka",
      year: "2021",
      venue: "EURASIP Journal on Audio, Speech, and Music Processing 2021(1):42",
      link: "https://link.springer.com/article/10.1186/s13636-021-00225-4"
    },
    {
      title: "Normalization of transliterated mongolian words using Seq2Seq model with limited data.",
      authors: "Byambadorj Zolzaya, Ryota Nishimura, Altangerel Ayush, Norihide Kitaoka",
      year: "2021",
      venue: "ACM Transactions on Asian and Low-Resource Language Information Processing 20(6):1–19",
      link: "https://dl.acm.org/doi/abs/10.1145/3464361"
    },
  ];

  const indexedConferences: Paper[] = [
    { title: "Noisy Transliterated Mongolian Text Normalization Using а Correction Module", authors: "Zolzaya Byambadorj, Ulziibayar Sonom-Ochir, Ariunzaya Batgerel", year: "2026", venue: "Судалж, хөгжье 2026 олон улсын эрдэм шинжилгээний хурал" },
    { title: "Хязгаарлагдмал өгөгдөлтэй нөхцөлд буриад аялгын ярианы синтезийн судалгаа", authors: "Б.Золзаяа, С.Өлзийбаяр, Б.Ариунзаяа", year: "2026", venue: "Ази судлал олон улсын эрдэм шинжилгээний хурал XII хурал" },
    { title: "Дүрсийн технологид суурилсан эртний Рүни-Монгол бичгийг орчин цагийн монгол хэл рүү хөрвүүлэх судалгаа", authors: "С.Өлзийбаяр, Б.Золзаяа, Ю. Болдбаатар", year: "2026", venue: "Ази судлал олон улсын эрдэм шинжилгээний хурал XII хурал" },
    { title: "A Study on Efficient Methods for Normalizing Transliterated Social Media Text.", authors: "Sonom-Ochir U., Byambadorj Z., Ayush A., Enkhbayar M., Kim H.", year: "2024", venue: "ICEF 2024" },
    { title: "Automatic player detection and classification using YOLOv8 and Computer Vision Techniques.", authors: "Gantumur Munkhbat, Karungaru S., Terada K., Ayush A.", year: "2024", venue: "ICEF 2024" },
    { title: "Detection of Players on a Soccer Team using YOLOv8 and Unsupervised Methods.", authors: "Batbaatar Namjildorj, Karungaru S., Terada K., Ayush A.", year: "2024", venue: "ICEF 2024" },
    { title: "Cross-lingual, multi-speaker text-to-speech synthesis for low resource languages", authors: "Zolzaya Byambadorj, Ryota Nishimura, Altangerel Ayush, Kengo Ohta, Norihide Kitaoka", year: "2021", venue: "Acoustical Society of Japan (ASJ)" },
    { title: "Text to speech system for low resource languages by cross-lingual transfer learning and data augmentation", authors: "Zolzaya Byambadorj, Ryota Nishimura, Altangerel Ayush, Kengo Ohta, Norihide Kitaoka", year: "2021", venue: "Acoustical Society of Japan (ASJ)" },
    { title: "Normalization of transliterated words using Seq2Seq model with spell checker", authors: "Byambadorj Zolzaya, Ryota Nishimura, Ayush Altangerel, Norihide Kitaoka", year: "2020", venue: "Conference paper" },
    {
      title: "Efficient Training Data Gathering for Federated Learning in Multi-Hop Wireless Network.",
      authors: "Dorj Erdenetuya, Kazuhiko Kinoshita, Altangerel Ayush",
      year: "2025",
      venue: "7th International Conference on Computer Communication and the Internet (ICCCI 2025), pp. 37–43",
      link: "https://ieeexplore.ieee.org/abstract/document/11158624"
    },
    {
      title: "Design and Implementation of VRUs Detection and Speed Estimation Using an Uncalibrated Top-View Perspective Camera.",
      authors: "Khalzaa Khulan, Stephen Karungaru, Kenji Terada, Altangerel Ayush",
      year: "2024",
      venue: "International Symposium on Computer Science and Educational Technology (ISCSET 2024)",
      link: "https://ieeexplore.ieee.org/abstract/document/10807863"
    },
    {
      title: "Dashboard-camera-based Safe Driving Support System.",
      authors: "Sonom-Ochir Ulziibayar, Stephen Karungaru, Kenji Terada, Altangerel Ayush",
      year: "2023",
      venue: "IEEE/ACIS 8th International Conference on Big Data, Cloud Computing, and Data Science (BCD)",
      link: "https://ieeexplore.ieee.org/abstract/document/10466299"
    },
    {
      title: "Influence of subproblem solutions on the quality of traveling thief problem solutions.",
      authors: "Chen Junfeng, Kaijun Zheng, Qingwu Li, Altangerel Ayush",
      year: "2023",
      venue: "Journal of Intelligent & Fuzzy Systems 44(2):1943–1956",
      link: "https://journals.sagepub.com/doi/abs/10.3233/JIFS-221032"
    },
    {
      title: "Appearance-based Driver's Gaze Mapping Using a Dash Camera.",
      authors: "Sonom-Ochir Ulziibayar, Stephen Karungaru, Kenji Terada, Altangerel Ayush",
      year: "2022",
      venue: "Joint 12th SCIS & 23rd ISIS",
      link: "https://ieeexplore.ieee.org/abstract/document/10001875"
    },
    {
      title: "Multi-speaker TTS system for low-resource language using cross-lingual transfer learning and data augmentation.",
      authors: "Byambadorj Zolzaya, Ryota Nishimura, Altangerel Ayush, Kengo Ohta, Norihide Kitaoka",
      year: "2021",
      venue: "APSIPA ASC 2021, pp. 849–853"
    },
  ];

  const nonIndexedPapers: Paper[] = [
    { title: "Бага нөөцтэй нутгийн аялгын ярианы синтезийн судалгаа", authors: "Б.Золзаяа, С.Өлзийбаяр, Б.Ариунзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Нөөц багатай нөхцөлд монгол-англи холимог бичвэрийн мэдрэмжийн шинжилгээний аргачлал", authors: "А.Цолмонбаяр, Б.Золзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Эртний рүни-монгол бичээсийг орчин цагт амилуулах нь: Дүрсэд суурилсан систем", authors: "С.Өлзийбаяр, Б.Золзаяа, Ю.Болдбаатар", year: "2026", venue: "ММТ-2026" },
    { title: "Латин галиглалтаас кирилл рүү: Нөөц багатай хэлэнд хэлний том загвар ашигласан шийдэл", authors: "С.Өлзийбаяр, Б.Золзаяа, Б.Ариунзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Хүүхдийн аюулгүй байдлыг бодит цаг хугацаанд хянах систем", authors: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Компьютерийн хараанд суурилсан обьект илрүүлэх судалгаа", authors: "С.Азжаргал, О.Оюунжаргал, Б.Золзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Гүн сургалтад суурилсан цээжний рентген зургаас эмнэлзүйн тайлан үүсгэх аргын судалгаа", authors: "М.Энхболор, Б.Золзаяа", year: "2026", venue: "ММТ-2026" },
    { title: "Хиймэл оюунд суурилсан SUVMAX тооцооллоор умайн хүзүүний хорт хавдар, үсэрхийллийг үнэлэх нь.", authors: "М.Түмэн-Аюуш, С.Өлзийбаяр", year: "2026", venue: "Монгол инженер 2026" },
    { title: "Тээвэр логистикт дрон ашиглах боломжийн судалгаа.", authors: "Б.Амаржаргал, С.Өлзийбаяр", year: "2026", venue: "Монгол инженер 2026" },
    { title: "SafeKid: хиймэл оюунд суурилсан хүүхэд хяналтын систем.", authors: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2026", venue: "Монгол инженер 2026" },
    { title: "Missingalert: хиймэл оюунд суурилсан хяналтын систем.", authors: "С.Азжаргал, О.Оюунжаргал, Б.Золзаяа", year: "2026", venue: "Монгол инженер 2026" },
    { title: "Хиймэл оюун ухаанд суурилсан жолоочийн аюулгүй байдлыг хянах системийн судалгаа ба хөгжүүлэлт.", authors: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2026", venue: "Монгол инженер 2026" },
    { title: "Хиймэл оюуныг шинжлэх ухаан, технологийн салбарт ашиглах нь", authors: "С.Өлзийбаяр, Б.Золзаяа, Э.Мөнхсүх, А.Алтангэрэл", year: "2025", venue: "Хиймэл оюун ухаан ба цэргийн урлаг" },
    { title: "Нийгмийн сүлжээн дэх стандарт бус галиглагдсан бичвэрийг Кирилл бичвэрт хөрвүүлэх загварын судалгаа", authors: "Б.Золзаяа, С.Өлзийбаяр, А.Алтангэрэл, Э.Мөнхсүх", year: "2025", venue: "ММТ-2025" },
    { title: "Домэйн дасан зохицох аргад суурилсан ухаалаг камерийн тохируулгатай хяналтын систем: Замын хөдөлгөөний аюулгүй байдалд ашиглах нь", authors: "С.Өлзийбаяр, Б.Золзаяа, Э.Мөнхсүх, А.Алтангэрэл", year: "2025", venue: "Авто тээвэр - 100 жил"},
    { title: "Бага өгөгдөлтэй нөхцөлд шуугиантай галиглагдсан бичвэрийг хэвийн болгох аргын судалгаа", authors: "Б.Золзаяа, С.Өлзийбаяр, А.Алтангэрэл, Э.Мөнхсүх", year: "2025", venue: "Эрдмийн чуулган-2025"},
    { title: "Дүрсийн боловсруулалтад суурилсан жолоочийн анхаарал сарнилтыг илрүүлэх ухаалаг систем", authors: "С.Өлзийбаяр, Б.Золзаяа, А.Алтангэрэл", year: "2024", venue: "Барилга замын машин төхөөрөмж мэргэжлийн 60 жилийн ой"},
    { title: "Эх хэлний боловсруулалтыг ашиглан чатботын харилцааны чанарыг сайжруулах судалгаа", authors: "Б.Эрдэнэмандал, С.Өлзийбаяр", year: "2025", venue: "Г.Цогбадрахын нэрэмжит магистр, доктор оюутны ЭШХ" },
    { title: "Гүн сургалтын аргаар материал ангилах нь", authors: "Ж.Болсайхан, С.Өлзийбаяр", year: "2025", venue: "Г.Цогбадрахын нэрэмжит магистр, доктор оюутны ЭШХ" },
    { title: "Дроныг хүргэлтийн үйлчилгээнд ашиглах боломжийн судалгаа", authors: "Б.Амаржаргал, С.Өлзийбаяр", year: "2025", venue: "Г.Цогбадрахын нэрэмжит магистр, доктор оюутны ЭШХ"},
    { title: "Хиймэл оюун ухаанд суурилсан жолоочийн аюулгүй байдлыг хянах системийн судалгаа ба хөгжүүлэлт", authors: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2025", venue: "Эрдмийн чуулган"},
    { title: "SafeKid AI: Хиймэл оюунд суурилсан хүүхэд хяналтын систем", authors: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2025", venue: "Эрдмийн чуулган"},
    { title: "МОНГОЛ ХЭЛ ДЭЭРХ ТЕКСТИЙГ ОНОВЧТОЙ ХУРААНГУЙЛАХ АРГЫН СУДАЛГАА", authors: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2025", venue: "ММТ-2025" },
    { title: "Хүний хоолойн өнгөнд суурилсан уушгины хатгалгааг оношлох судалгаа", authors: "Д.Балжинням, Б.Золзаяа", year: "2025", venue: "ММТ-2025" },
    { title: "AI ашигласан чихрийн шижингийн эрсдэлийг урьдчилан таамаглах, сэргийлэх ухаалаг загвар", authors: "Э.Түвшинжаргал, Б.Золзаяа", year: "2025", venue: "ММТ-2025" },
    { title: "Ухаалаг навигацийн систем", authors: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", venue: "ММТ-2025" },
    { title: "Карго тээврийн бичигнээс мэдээлэл гарган авах ухаалаг систем", authors: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", venue: "ШУТИС 65 жилийн ой" },
    { title: "Контайнерийн дураар таних систем", authors: "Г.Энхбаяр, Э.Жавхлан, С.Өлзийбаяр", year: "2025", venue: "ШУТИС-МХТС бакалаврын оюутны хаврын ЭШХ" },
    { title: "Ухаалаг хөтөч v2.0", authors: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2024", venue: "ШУТИС 65 жилийн ой"},
    { title: "Дүрсийн боловсруулалтад суурилсан ухаалаг хог ангилагч", authors: "А.Цолмонбаяр, Б.Болоржин, Б.Энхзул, Б.Золзаяа", year: "2024", venue: "ШУТИС 65 жилийн ой"},
    { title: "Ухаалаг таяг", authors: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2024", venue: "Хөгжлийн бэрхшээл ба тэгш хүртээмж-2024" },
    { title: "Сэдвийн загварчлал ашиглан текст өгөгдөлд шинжилгээ хийх", authors: "С.Болор-Эрдэнэ, З.Эгшиглэн, С.Өсөхбаяр, Б.Золзаяа", year: "2024", venue: "Г.Цогбадрахын нэрэмжит бакалавр оюутны ЭШХ"},
  ];

  const projects: Project[] = [
    { title: "Сэтгэл хөдлөлийн удирдлагатай ярианы синтезийн систем", team: "Б.Бум-Эрдэнэ, Б.Золзаяа", year: "2026", event: "МХТС-ийн бакалавр оюутны шилдэг бүтээл", note: "III байр" },
    { title: "Байгальд ээлтэй, цаасгүй сургалтын ухаалаг туслах: лекцийг бичвэрт хөрвүүлж, автоматаар тэмдэглэл, асуулт, гол санааг боловсруулах систем", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Даваасамбуу, Б.Золзаяа", year: "2025", event: "Эрдмийн XXIV чуулган" },
    { title: "Хүний хоолойн өнгөнд суурилсан уушгины хатгалгааг оношлох загвар", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Золзаяа", year: "2025", event: "Эрдмийн XXIV чуулган", note: "III байр" },
    { title: "AI ашигласан чихрийн шижингийн эрсдэлийг урьдчилан таамаглах, сэргийлэх ухаалаг загвар", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Золзаяа", year: "2025", event: "Эрдмийн XXIV чуулган" },
    { title: "Карго тээврийн бичигнээс мэдээлэл гарган авах ухаалаг систем", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "ШУТИС 65 жилийн ой" },
    { title: "AI ашигласан чихрийн шижингийн эрсдэлийг урьдчилан таамаглах, сэргийлэх ухаалаг загвар", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Золзаяа", year: "2025", event: "МХТС-ийн бакалавр оюутны шилдэг бүтээл", note: "IV байр" },
    { title: "Хүний хоолойн өнгөнд суурилсан уушгины хатгалгааг оношлох загвар", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Золзаяа", year: "2025", event: "МХТС-ийн бакалавр оюутны шилдэг бүтээл", note: "III байр" },
    { title: "Smart Vision: Дуу хоолойн удирдлагатай систем", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "ШУТИС-МХТС оюутны шилдэг бүтээл", note: "I байр" },
  ];

  const achievements: Project[] = [
    { title: "Дүрсийн технологид суурилсан эртний руни-монгол бичгийг орчин цагийн монгол хэл руу хөрвүүлэх судалгаа.", team: "С.Өлзийбаяр, Б.Золзаяа, Ю.Болдбаатар", year: "2026", event: "Монгол инженер 2026", note: "Шилдэг постер илтгэл" },
    { title: "Тээвэр логистикт дрон ашиглах боломжийн судалгаа.", team: "Б.Амаржаргал, С.Өлзийбаяр", year: "2026", event: "Монгол инженер 2026", note: "III байр" },
    { title: "MissingAlert: хиймэл оюунд суурилсан хяналтын систем.", team: "С.Азжаргал, О.Оюунжаргал, Б.Золзаяа", year: "2026", event: "ШУТИС-ийн оюутны шилдэг өгүүлэл шалгаруулах хурал", note: "I байр" },
    { title: "Цээжний рентген зурагт суурилсан оношилгооны тайлан үүсгэх AI загварын судалгаа.", team: "М.Энхболор, Б.Золзаяа", year: "2026", event: "Доктор (Ph.D.), профессор Г. Цогбадрахын нэрэмжит МХТС-ийн бакалавр оюутны Мэдээлэл Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг сэдэвт 2025-2026 оны хичээлийн жилийн хаврын улирлын эрдэм шинжилгээний хурал", note: "I байр" },
    { title: "MissingAlert: хиймэл оюунд суурилсан хяналтын систем.", team: "С.Азжаргал, О.Оюунжаргал, Б.Золзаяа", year: "2026", event: "Доктор (Ph.D.), профессор Г. Цогбадрахын нэрэмжит МХТС-ийн бакалавр оюутны Мэдээлэл Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг сэдэвт 2025-2026 оны хичээлийн жилийн хаврын улирлын эрдэм шинжилгээний хурал", note: "II байр" },
    { title: "Домэйн дасан зохицох аргад суурилсан ухаалаг камерийн тохируулгатай хяналтын систем: Замын хөдөлгөөний аюулгүй байдалд ашиглах нь", team: "С.Өлзийбаяр, Б.Золзаяа, Э.Мөнхсүх, А.Алтангэрэл", year: "2025", event: "Авто тээвэр - 100 жил", note: "III байр" },
    { title: "Бага өгөгдөлтэй нөхцөлд шуугиантай галиглагдсан бичвэрийг хэвийн болгох аргын судалгаа", team: "Б.Золзаяа, С.Өлзийбаяр, А.Алтангэрэл, Э.Мөнхсүх", year: "2025", event: "Эрдмийн чуулган-2025", note: "III байр" },
    { title: "Дүрсийн боловсруулалтад суурилсан жолоочийн анхаарал сарнилтыг илрүүлэх ухаалаг систем", team: "С.Өлзийбаяр, Б.Золзаяа, А.Алтангэрэл", year: "2024", event: "Барилга замын машин төхөөрөмж мэргэжлийн 60 жилийн ой", note: "II байр" },
    { title: "SafeKid AI: Хиймэл оюунд суурилсан хүүхэд хяналтын систем", team: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2025", event: "Эрдмийн түлхүүр-2025 эрдэм шинжилгээний хурал", note: "III байр" },
    { title: "Дроныг хүргэлтийн үйлчилгээнд ашиглах боломжийн судалгаа", team: "Б.Амаржаргал, С.Өлзийбаяр", year: "2025", event: "Г.Цогбадрахын нэрэмжит магистр, доктор оюутны ЭШХ", note: "I байр" },
    { title: "Хиймэл оюун ухаанд суурилсан жолоочийн аюулгүй байдлыг хянах системийн судалгаа ба хөгжүүлэлт.", team: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2025", event: "Эрдмийн чуулган эрдэм шинжилгээний хурал", note: "I байр" },
    { title: "SafeKid AI: Хиймэл оюунд суурилсан хүүхэд хяналтын систем.", team: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2025", event: "Эрдмийн чуулган эрдэм шинжилгээний хурал", note: "II байр" },
    { title: "Хиймэл оюун ухаанд суурилсан жолоочийн аюулгүй байдлыг хянах системийн судалгаа ба хөгжүүлэлт", team: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2025", event: "Мэдээлэл Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг сэдэвт 2025-2026 оны хичээлийн жилийн намрын улирлын эрдэм шинжилгээний хурал", note: "I байр" },
    { title: "SafeKid AI: Хиймэл оюунд суурилсан хүүхэд хяналтын систем.", team: "О.Оюунжаргал, С.Азжаргал, Б.Золзаяа", year: "2025", event: "Мэдээлэл Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг сэдэвт 2025-2026 оны хичээлийн жилийн намрын улирлын эрдэм шинжилгээний хурал", note: "II байр" },
    { title: "Дотоод орчны камерт суурилсан навигацийн систем", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "Sparkday-2025", note: "III байр" },
    { title: "Бага өгөгдөлтэй нөхцөлд шуугиантай галиглагдсан бичвэрийг хэвийн болгох судалгаа", team: "Б.Золзаяа, С.Өлзийбаяр, А.Алтангэрэл, Э.Мөнхсүх", year: "2025", event: "Эрдмийн чуулган-2025", note: "III байр" },
    { title: "Домэйн дасан зохицох аргад суурилсан ухаалаг камер", team: "С.Өлзийбаяр, Б.Золзаяа, Э.Мөнхсүх, А.Алтангэрэл", year: "2025", event: "Авто тээвэр-100 жил", note: "III байр" },
    { title: "Хүний хоолойн өнгөнд суурилсан уушгины хатгалгааг оношлох загвар", team: "Э.Түвшинжаргал, Б.Алтансүх, Д.Балжинням, Б.Золзаяа", year: "2025", event: "Эрдмийн XXIV чуулган", note: "III байр" },
    { title: "LibSeek", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "ШУТИС-МХТС Мини хакатон", note: "III байр" },
    { title: "Smart Vision: Дуу хоолойн удирдлагатай систем", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "ШУТИС-МХТС оюутны шилдэг бүтээл", note: "I байр" },
    { title: "Монгол хэл дээрх текстийг оновчтой хураангуйлах судалгаа", team: "Б.Амартүвшин, Н.Гантөмөр, Б.Золзаяа", year: "2025", event: "Г.Цогбадрахын нэрэмжит бакалавр ЭШХ", note: "II байр" },
    { title: "Карго тээврийн бичигнээс мэдээлэл гарган авах систем", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2025", event: "ШУТИС-МХТС бакалаврын ЭШХ", note: "III байр" },
    { title: "Дүрсийн боловсруулалтад суурилсан жолоочийн анхаарал сарнилтыг илрүүлэх систем", team: "С.Өлзийбаяр, Б.Золзаяа, А.Алтангэрэл", year: "2024", event: "Барилга замын машин төхөөрөмж 60 жил", note: "II байр" },
    { title: "Ухаалаг хөтөч v2.0", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2024", event: "ШУТИС 65 жилийн ой", note: "III байр" },
    { title: "Smart Vision", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2024", event: "InnoHub Mongolia - ШИЛДГИЙН ШИЛДЭГ, Шанхайд олон улсын уралдаанд оролцох эрх" },
    { title: "Дүрсийн боловсруулалтад суурилсан ухаалаг хог ангилагч", team: "А.Цолмонбаяр, Б.Болоржин, Б.Энхзул, Б.Золзаяа", year: "2024", event: "Г.Цогбадрахын нэрэмжит бакалавр ЭШХ", note: "I байр" },
    { title: "Ухаалаг хөтөч", team: "М.Түмэн-Аюуш, Ч.Мичидгоо, С.Батмөнх, С.Өлзийбаяр", year: "2024", event: "ШУТИС-МХТС бакалаврын ЭШХ", note: "III байр" },
    { title: "Сэдвийн загварчлал ашиглан текст өгөгдөлд шинжилгээ хийх", team: "С.Болор-Эрдэнэ, З.Эгшиглэн, С.Өсөхбаяр, Б.Золзаяа", year: "2024", event: "Г.Цогбадрахын нэрэмжит бакалавр ЭШХ", note: "I байр" },
  ];

  const tabs: { id: 'journals' | 'conferences' | 'domestic' | 'projects' | 'achievements'; label: string; count: number }[] = [
    { id: 'journals', label: 'Сэтгүүл (WoS/Scopus)', count: indexedJournals.length },
    { id: 'conferences', label: 'Олон улсын хурал', count: indexedConferences.length },
    { id: 'domestic', label: 'Дотоодын бүтээл', count: nonIndexedPapers.length },
    { id: 'projects', label: 'Оюутны төсөл', count: projects.length },
    { id: 'achievements', label: 'Амжилт', count: achievements.length },
  ];

  const groupByYear = (papers: Paper[]) => {
    const grouped: { [year: string]: Paper[] } = {};
    papers.forEach((p) => {
      if (!grouped[p.year]) grouped[p.year] = [];
      grouped[p.year].push(p);
    });
    return Object.entries(grouped).sort(([a], [b]) => Number(b) - Number(a));
  };

  const groupProjectsByYear = (items: Project[]) => {
    const grouped: { [year: string]: Project[] } = {};
    items.forEach((p) => {
      if (!grouped[p.year]) grouped[p.year] = [];
      grouped[p.year].push(p);
    });
    return Object.entries(grouped).sort(([a], [b]) => Number(b) - Number(a));
  };

  const renderPaperList = (papers: Paper[]) => {
    const grouped = groupByYear(papers);
    return (
      <div className="space-y-10">
        {grouped.map(([year, yearPapers]) => (
          <div key={year}>
            <h3 className="text-[20px] font-semibold text-[#0A2647] font-serif mb-4 pb-2 border-b border-[#FFC300]">
              {year} <span className="text-[14px] text-neutral-500 font-sans">({yearPapers.length})</span>
            </h3>
            <ul className="space-y-5">
              {yearPapers.map((p, i) => (
                <li key={i} className="pl-4 border-l-2 border-neutral-200 hover:border-[#FFC300] transition-colors">
                  <h4 className="text-[16px] font-semibold text-[#0A2647] font-serif leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-[13px] mt-1.5 text-neutral-600 font-sans">{p.authors}</p>
                  <p className="text-[13px] text-neutral-500 mt-1 font-sans">
                    {p.venue}
                    {p.note && <span className="text-[#C59D0E] ml-2 font-medium">({p.note})</span>}
                  </p>
                  {p.link && (
                    <Link
                      href={p.link}
                      target="_blank"
                      className="text-[13px] mt-1.5 inline-block underline text-[#0A2647] hover:text-[#FFC300] transition-colors"
                    >
                      DOI / PDF ↗
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderProjectList = (items: Project[]) => {
    const grouped = groupProjectsByYear(items);
    return (
      <div className="space-y-10">
        {grouped.map(([year, yearItems]) => (
          <div key={year}>
            <h3 className="text-[20px] font-semibold text-[#0A2647] font-serif mb-4 pb-2 border-b border-[#FFC300]">
              {year} <span className="text-[14px] text-neutral-500 font-sans">({yearItems.length})</span>
            </h3>
            <ul className="space-y-5">
              {yearItems.map((p, i) => (
                <li key={i} className="pl-4 border-l-2 border-neutral-200 hover:border-[#FFC300] transition-colors">
                  <h4 className="text-[15px] font-semibold text-[#0A2647] font-serif leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-[13px] mt-1.5 text-neutral-600 font-sans">{p.team}</p>
                  <p className="text-[13px] text-neutral-500 mt-1 font-sans">
                    {p.event}
                    {p.note && <span className="text-[#C59D0E] ml-2 font-medium">({p.note})</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className={`${merri.variable} ${inter.variable} bg-white text-[#1B1B1B]`}>

      
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/mustOut.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-[38px] sm:text-[44px] lg:text-[48px] font-bold text-white font-serif leading-[130%]">
            Судалгаа, Бүтээл, Амжилт
          </h1>
          <p className="mt-4 sm:mt-6 text-[15px] sm:text-[17px] max-w-3xl leading-[150%] text-white/90 font-sans">
            Манай лаборатори нь хиймэл оюун, хэлний технологи, компьютер харааны чиглэлээр
            олон улсын индекстэй сэтгүүл, хуралд тогтмол хэвлүүлж, оюутнуудтай хамтран
            бодит асуудлыг шийдвэрлэсэн инновацын төслүүдийг хөгжүүлдэг.
          </p>
        </div>
      </section>

      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-8 pb-24">
        <h2 className="text-[30px] sm:text-[34px] font-bold font-serif text-[#0A2647] mb-8">
          Бүтээлийн жагсаалт
        </h2>

        
        <div className="border-b border-neutral-200 mb-10">
          <nav className="flex flex-wrap gap-2 sm:gap-6 -mb-px" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-[14px] sm:text-[15px] font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#FFC300] text-[#0A2647] font-semibold'
                    : 'border-transparent text-neutral-500 hover:text-[#0A2647] hover:border-neutral-300'
                }`}
              >
                {tab.label} <span className="text-[12px] text-neutral-400">({tab.count})</span>
              </button>
            ))}
          </nav>
        </div>

        
        <div className="min-h-[400px]">
          {activeTab === 'journals' && renderPaperList(indexedJournals)}
          {activeTab === 'conferences' && renderPaperList(indexedConferences)}
          {activeTab === 'domestic' && renderPaperList(nonIndexedPapers)}
          {activeTab === 'projects' && renderProjectList(projects)}
          {activeTab === 'achievements' && renderProjectList(achievements)}
        </div>
      </div>
    </main>
  );
}
