export interface Project {
  image?: string;
  subHead: string;
  head: string;
  desc: string;
  url?: string;
}
export interface Experience {
  company: string;
  role: string;
  duration: string;
}

export const projects: Project[] = [
  {
    image: '/multidownloader.png',
    subHead: 'EXPERIMENTAL PROJECT',
    head: 'YouTube Media Downloader',
    desc: 'Built a web application for downloading and converting YouTube media using yt-dlp and ffmpeg, with a frontend interface for handling download requests and format selection. Explored challenges around serverless deployment limitations on Vercel.',
    url: '',
  },
  {
    image: '/PGAS_Training_Center.png',
    subHead: 'PGAS TRAINING CENTER / Jun 2025 - Jan 2026',
    head: 'Corporate Training Portal',
    desc: 'Developed a company profile website and admin-managed content system using Next.js, focused on responsive design, SEO optimization, and scalable content management.',
    url: '',
  },
  {
    image: '/matra_kosala_digdaya.png',
    subHead: 'MATRA KOSALA DIGDAYA / Oct 2024 - Jan 2025',
    head: 'Corporate Website Platform',
    desc: 'Built a company profile website with dynamic content management and responsive UI using Next.js and TailwindCSS, with emphasis on SEO, performance, and maintainable frontend architecture.',
    url: '',
  },
  {
    image: '/futura_property.png',
    subHead: 'FUTURA PROPERTY / Nov 2023 - Dec 2023',
    head: 'Real Estate Management Platform',
    desc: 'Developed a real estate web application with admin dashboard for managing property listings, built with Next.js and PostgreSQL. Implemented CRUD operations, listing management, and responsive interfaces focused on performance and usability.',
    url: '',
  },
];

export const experience: Experience[] = [
  {
    company: 'PGAS Training Center',
    role: 'Freelance Frontend Developer',
    duration: '2025 - 2026',
  },
  {
    company: 'Matra Kosala Digdaya',
    role: 'Frontend Developer / IT Support intern',
    duration: '2024 - 2025',
  },
  {
    company: 'Futura Property',
    role: 'Frontend Developer',
    duration: '2022 - 2023',
  },
];
