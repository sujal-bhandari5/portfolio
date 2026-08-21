import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
export function Projects() { return <section id="projects" className="section"><div className="container"><div className="section-head"><div><p className="section-kicker">03 — Projects</p><h2>Things I'm <em>building.</em></h2></div><p>A growing collection of practical projects. Replace these placeholders with your real work as you build.</p></div><div className="project-grid">{projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i}/>)}</div></div></section> }
