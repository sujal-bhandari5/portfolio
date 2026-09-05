// src/data/projects.ts
import portfolioImg from '../assets/projects/portfolio.jpg'
import project2 from '../assets/projects/project-2.svg'
import project3 from '../assets/projects/project-3.svg'

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio designed to showcase my skills, projects and learning journey.',
    image: portfolioImg,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/sujal-bhandari5/portfolio',
    demo: 'https://sujal-bhandari5.github.io/portfolio/',
  },
  {
    title: 'C++ Practice Projects',
    description: 'A collection of beginner-friendly C++ programs covering OOP, operators, functions and core concepts.',
    image: project2,
    tech: ['C++', 'OOP', 'Git'],
    github: 'https://github.com/sujal-bhandari5/CPP',
    demo: '#',
  },
  {
    title: 'Web Development Project',
    description: 'A space for a future web project. Replace this card with a real project as your portfolio grows.',
    image: project3,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sujal-bhandari5/WebDevelopment',
    demo: '#',
  },
]