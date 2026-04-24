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
    image: '/matra_kosala_digdaya.png',
    subHead: 'MATRA KOSALA DIGDAYA / 2024 - 2025',
    head: 'Landing Page Company Profile',
    desc: 'Developing a company profile landing page using Next.js and TailwindCSS, equipped with SEO optimization and responsive display to increase company visibility and credibility.',
    url: '',
  },
  {
    image: '/futura_property.png',
    subHead: 'FUTURA PROPERTY / 2023 - 2024',
    head: 'Real Estate Website',
    desc: 'Developing a property marketing website using Next.js to simplify the management and publication of listings online, with a focus on performance and responsive display.',
    url: '',
  },
];

export const experience: Experience[] = [
  {
    company: 'Matra Kosala Digdaya',
    role: 'Frontend & IT Support',
    duration: '2024 - 2025',
  },
  {
    company: 'Futura Property',
    role: 'Frontend',
    duration: '2022 - 2026',
  },
];
