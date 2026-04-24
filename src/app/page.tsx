'use client';

import { experience, projects } from '@/src/lib/constant';
import { cn } from '@/src/lib/utils';
import { Dot, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div id='Hero' className={cn('py-20 px-4 md:px-12')}>
        <div className=''>
          <div className='font-inter text-xs text-foreground/80 mb-4'>
            - FRONTEND WEB DEVELOPER -
          </div>
          <div className='font-passion text-2xl md:text-7xl lg:8xl'>
            BAGAS SATRIO PAMUNGKAS
          </div>

          <div className='mt-12 space-y-3 md:w-full md:flex md:justify-between md:items-center'>
            <div className='font-inter text-sm text-foreground/80 md:w-[25%]'>
              Frontend Developer focused on building fast, scalable, and
              user-friendly web applications.
            </div>
            <div className='space-y-2 md:space-y-4 mt-8 md:mt-0'>
              <div className='flex items-center font-inter border border-emerald-600/50 text-emerald-700 rounded-full w-fit pr-3 py-1'>
                <Dot className='' />
                <p className='text-xs font-normal'>AVAILABLE FOR WORK</p>
              </div>
              <div className='flex items-center font-inter border text-foreground/80 rounded-full w-fit px-3 py-2'>
                <p className='text-xs font-normal'>TANGERANG, INDONESIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='Projects' className={cn('py-20 px-4 md:px-12')}>
        <div className=''>
          <div className='mb-10 flex items-center gap-4'>
            <h1 className='font-inter text-sm text-foreground/80 whitespace-nowrap'>
              OUR PROJECTS
            </h1>
            <div className='bg-foreground/80 w-full h-px' />
          </div>
          <div className='space-y-4 md:space-y-8'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='border rounded-xl overflow-hidden md:flex md:flex-row-reverse'
              >
                <div className='relative aspect-video md:h-75'>
                  <Image
                    src={project.image || '/'}
                    alt={project.head}
                    fill
                    sizes=''
                    className='object-cover flex items-center justify-center text-center font-inter text-foreground/80 text-xs'
                  />
                </div>
                <div className='p-4 md:p-8'>
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
      <div className='md:grid md:gap-x-0 md:grid-cols-2'>
        <div id='MyStory' className={cn('py-20 px-4 md:px-12')}>
          <div className=''>
            <div className='mb-10 flex items-center gap-4'>
              <h1 className='font-inter text-sm text-foreground/80 whitespace-nowrap'>
                MY STORY
              </h1>
              <div className='bg-foreground/80 w-full h-px' />
            </div>
            <div className=''>
              <article className='prose prose-sm max-w-none font-inter text-sm text-foreground/80'>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    My journey in web development started in 2020
                  </span>
                  , driven by curiosity about how websites and digital products
                  are actually built. At the beginning, I explored the
                  fundamentals of HTML, CSS, and JavaScript, gradually building
                  small projects to understand how everything works together.
                </p>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    As I continued learning
                  </span>
                  , I became more interested in frontend development, where I
                  could focus on creating user interfaces and improving user
                  experience. I started working with modern tools like React and
                  Next.js, which allowed me to build more structured, scalable,
                  and efficient web applications.
                </p>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    Along the way
                  </span>
                  , I’ve worked on several projects, including company profile
                  websites and web-based applications for internal use. Through
                  these experiences, I learned how to translate requirements
                  into functional features, collaborate within a team, and write
                  cleaner and more maintainable code.
                </p>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    I also gained exposure to backend technologies
                  </span>{' '}
                  such as Node.js, Express, and PostgreSQL, which helped me
                  better understand how frontend and backend systems work
                  together. This allows me to build applications more
                  effectively, even when working across different parts of the
                  stack.
                </p>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    I’m particularly interested
                  </span>{' '}
                  in building clean, responsive, and user-friendly interfaces,
                  while maintaining performance and scalability. I believe that
                  good design is not only about how things look, but also how
                  they work and feel for the user.
                </p>
                <p>
                  <span className='text-foreground/95 font-semibold'>
                    Currently
                  </span>
                  , I continue to improve my skills by building projects,
                  learning new tools, and exploring better ways to develop
                  modern web applications. I’m always open to new challenges and
                  opportunities that allow me to grow as a developer.
                </p>
              </article>
              <div className=''>
                <div className='mt-8'>
                  <Link
                    href={'#'}
                    className='text-xs font-medium border flex items-center gap-x-2 w-fit font-inter px-3 py-2 rounded-full'
                  >
                    VIEW CV <MoveUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div id='Experience' className={cn('pb-15 md:pb-0 md:py-20 px-4')}>
            <div className=''>
              <div className='mb-10 flex items-center gap-4'>
                <h1 className='font-inter font-semibold text-sm text-foreground/80 whitespace-nowrap'>
                  - EXPERIENCE
                </h1>
                {/* <div className='bg-foreground/80 w-full h-px' /> */}
              </div>
              <div className='space-y-4'>
                {experience.map((ex, i) => (
                  <div
                    key={i}
                    className='font-inter text-xs flex justify-between'
                  >
                    <div className=''>
                      <h1 className='font-bold'>{ex.company}</h1>
                      <h2 className='text-foreground/80'>{ex.role}</h2>
                    </div>
                    <div className=''>
                      <p className=''>{ex.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='Skills' className={cn('pb-20 px-4')}>
            <div className=''>
              <div className='mb-10 flex items-center gap-4'>
                <h1 className='font-inter font-semibold text-sm text-foreground/80 whitespace-nowrap'>
                  - SKILLS
                </h1>
                {/* <div className='bg-foreground/80 w-full h-px' /> */}
              </div>
              <div className='font-inter space-y-2 text-xs'>
                <div className='flex gap-2'>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Team Collaboration
                  </div>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Problem Solver
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Technical Communications
                  </div>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Consistent
                  </div>
                </div>
                <div className='flex gap-2'>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Team Works
                  </div>
                  <div className='border px-3 py-1 text-foreground/80 rounded-full'>
                    Individual Work
                  </div>
                </div>
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
          <div className='font-passion space-y-2 text-2xl md:text-4xl lg:8xl cursor-pointer'>
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
            href={'/'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            EMAIL
          </Link>
          <Link
            href={'/'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            LINKEDIN
          </Link>
          <Link
            href={'/'}
            className='text-foreground/80 hover:underline hover:text-emerald-700'
          >
            GITHUB
          </Link>
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
