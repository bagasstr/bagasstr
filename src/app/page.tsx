'use client';

import { experience, projects } from '@/src/lib/constant';
import { cn } from '@/src/lib/utils';
import { Dot, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div id='Hero' className={cn('py-12 md:py-24 px-4 md:px-12')}>
        <div className=''>
          <div className='font-inter text-[10px] md:text-xs text-foreground/60 mb-4 tracking-widest'>
            - FRONTEND WEB DEVELOPER -
          </div>
          <div className='font-passion text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-none'>
            BAGAS SATRIO PAMUNGKAS
          </div>

          <div className='mt-10 space-y-6 md:space-y-0 md:flex md:justify-between md:items-end'>
            <div className='font-inter text-sm md:text-base text-foreground/70 max-w-sm leading-relaxed'>
              Frontend Developer focused on building fast, scalable, and
              user-friendly web applications.
            </div>
            <div className='flex flex-col gap-3 mt-4 md:mt-0'>
              <div className='flex items-center font-inter border border-emerald-600/30 text-emerald-700 dark:border-emerald-400/20 dark:text-emerald-400 rounded-full w-fit pr-3 py-1.5 transition-colors'>
                <Dot className='animate-pulse' />
                <p className='text-[10px] md:text-xs font-semibold'>
                  AVAILABLE FOR WORK
                </p>
              </div>
              <div className='flex items-center font-inter border border-foreground/10 text-foreground/70 rounded-full w-fit px-4 py-2 transition-colors'>
                <p className='text-[10px] md:text-xs font-medium uppercase tracking-tight'>
                  TANGERANG, INDONESIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='Projects' className={cn('py-12 md:py-20 px-4 md:px-12')}>
        <div className=''>
          <div className='mb-12 flex items-center gap-4'>
            <h1 className='font-inter text-xs font-bold text-foreground/40 uppercase tracking-widest whitespace-nowrap'>
              OUR PROJECTS
            </h1>
            <div className='bg-foreground/10 w-full h-px' />
          </div>
          <div className='grid grid-cols-1 gap-6 md:gap-10'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='group border border-foreground/5 rounded-2xl overflow-hidden md:flex md:flex-row-reverse bg-background dark:bg-muted/10 dark:border-foreground/5 transition-all hover:border-emerald-500/30'
              >
                <div className='relative aspect-video md:w-1/2 overflow-hidden'>
                  <Image
                    src={project.image || '/'}
                    alt={project.head}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='p-6 md:p-12 md:w-1/2 flex flex-col justify-center'>
                  <div className=''>
                    <p className='font-inter text-xs text-foreground/80 mb-2'>
                      {project.subHead}
                    </p>
                    <h1 className='font-inter font-bold text-xl'>
                      {project.head}
                    </h1>
                    <p className='font-inter text-sm mt-4'>{project.desc}</p>
                    <div className='mt-4 w-full flex justify-end md:justify-start'>
                      <Link
                        href={project.url || '#'}
                        className='text-xs font-medium flex items-center gap-x-2 border font-inter px-3 py-2 rounded-full'
                      >
                        VIEW PROJECT <MoveUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='lg:grid lg:gap-x-0 lg:grid-cols-2 border-t border-foreground/5'>
        <div
          id='MyStory'
          className={cn(
            'py-12 md:py-20 px-4 md:px-12 border-b lg:border-b-0 lg:border-r border-foreground/5',
          )}
        >
          <div className=''>
            <div className='mb-10 flex items-center gap-4'>
              <h1 className='font-inter text-xs font-bold text-foreground/40 uppercase tracking-widest whitespace-nowrap'>
                MY STORY
              </h1>
              <div className='bg-foreground/10 w-full h-px' />
            </div>
            <div className=''>
              <article className='prose prose-sm max-w-none font-inter text-sm md:text-base text-foreground/70 leading-relaxed space-y-4'>
                <p>
                  <span className='text-foreground font-semibold'>
                    My journey in web development started in 2020
                  </span>
                  , driven by curiosity about how websites and digital products
                  are actually built. At the beginning, I explored the
                  fundamentals of HTML, CSS, and JavaScript, gradually building
                  small projects to understand how everything works together.
                </p>
                <p>
                  <span className='text-foreground font-semibold'>
                    As I continued learning
                  </span>
                  , I became more interested in frontend development, where I
                  could focus on creating user interfaces and improving user
                  experience. I started working with modern tools like React and
                  Next.js, which allowed me to build more structured, scalable,
                  and efficient web applications.
                </p>
                <p>
                  <span className='text-foreground font-semibold'>
                    Along the way
                  </span>
                  , I’ve worked on several projects, including company profile
                  websites and web-based applications for internal use. Through
                  these experiences, I learned how to translate requirements
                  into functional features, collaborate within a team, and write
                  cleaner and more maintainable code.
                </p>
                <p>
                  <span className='text-foreground font-semibold'>
                    I also gained exposure to backend technologies{' '}
                  </span>
                  such as Node.js, Express, and PostgreSQL, which helped me
                  better understand how frontend and backend systems work
                  together. This allows me to build applications more
                  effectively, even when working across different parts of the
                  stack.
                </p>
                <p>
                  <span className='text-foreground font-semibold'>
                    I’m particularly interested{' '}
                  </span>
                  in building clean, responsive, and user-friendly interfaces,
                  while maintaining performance and scalability. I believe that
                  good design is not only about how things look, but also how
                  they work and feel for the user.
                </p>
                <p>
                  <span className='text-foreground font-semibold'>
                    Currently{' '}
                  </span>
                  I continue to improve my skills by building projects, learning
                  new tools, and exploring better ways to develop modern web
                  applications. I’m always open to new challenges and
                  opportunities that allow me to grow as a developer.
                </p>
              </article>
              <div className='mt-10'>
                <Link
                  href={'/cv.pdf'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs font-bold border border-foreground/10 flex items-center gap-x-2 w-fit font-inter px-5 py-3 rounded-full hover:bg-foreground hover:text-background transition-all'
                >
                  VIEW CV <MoveUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div
            id='Experience'
            className={cn(
              'py-12 md:py-20 px-4 md:px-12 border-b border-foreground/5',
            )}
          >
            <div className=''>
              <div className='mb-10 flex items-center gap-4'>
                <h1 className='font-inter font-bold text-xs text-foreground/40 uppercase tracking-widest whitespace-nowrap'>
                  - EXPERIENCE
                </h1>
              </div>
              <div className='space-y-6'>
                {experience.map((ex, i) => (
                  <div
                    key={i}
                    className='font-inter text-sm flex justify-between items-start gap-4'
                  >
                    <div className=''>
                      <h1 className='font-bold text-foreground'>
                        {ex.company}
                      </h1>
                      <h2 className='text-xs text-foreground/60 mt-1'>
                        {ex.role}
                      </h2>
                    </div>
                    <div className=''>
                      <p className='text-[10px] md:text-xs font-medium text-foreground/40 whitespace-nowrap bg-foreground/5 px-2 py-1 rounded-md'>
                        {ex.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='Skills' className={cn('py-12 md:py-20 px-4 md:px-12')}>
            <div className=''>
              <div className='mb-10 flex items-center gap-4'>
                <h1 className='font-inter font-bold text-xs text-foreground/40 uppercase tracking-widest whitespace-nowrap'>
                  - SKILLS
                </h1>
              </div>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Team Collaboration',
                  'Problem Solver',
                  'Technical Communications',
                  'Consistent',
                  'Team Works',
                  'Individual Work',
                ].map((skill) => (
                  <div
                    key={skill}
                    className='border font-inter border-foreground/10 px-4 py-2 text-foreground/70 rounded-full text-xs font-medium hover:border-emerald-500/50 transition-colors cursor-default'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='GetInTouch' className={cn('pb-20 px-4 md:px-12')}>
        <div className=''>
          <div className='mb-10 flex items-center gap-4'>
            <h1 className='font-inter text-xs text-foreground/80 whitespace-nowrap'>
              GET IN TOUCH
            </h1>
            {/* <div className='bg-foreground/80 w-full h-px' /> */}
          </div>
          <div className='font-passion space-y-2 text-3xl sm:text-5xl md:text-7xl lg:text-8xl cursor-pointer'>
            <h1 className=''>Say Hi!</h1>
            <span className='hover:text-emerald-700 hover:underline'>
              Let's Talk
            </span>
          </div>
        </div>
      </div>
      <div className='font-inter px-4 md:px-12 text-xs py-20 md:flex md:justify-between'>
        <div className=''>
          <p className='text-foreground/80'>bagassatrio2805@gmail.com</p>
          <p className='text-foreground/80'>Tangerang, Indonesia</p>
        </div>
        <div className='flex items-center justify-evenly md:justify-center md:gap-x-8 mt-8'>
          <Link
            href={'mailto:bagassatrio2805@gmail.com'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            EMAIL
          </Link>
          <Link
            href={'https://www.linkedin.com/in/bagassatrio/'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            LINKEDIN
          </Link>
          {/* <Link
            href={'/'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            GITHUB
          </Link> */}
        </div>
      </div>
      <div id='Footer' className='font-inter text-foreground/80 pb-20'>
        <p className='flex items-center text-xs justify-center'>
          © 2026 Bagas Satrio <Dot /> Frontend Web Developer
        </p>
      </div>
    </>
  );
};

export default Page;
