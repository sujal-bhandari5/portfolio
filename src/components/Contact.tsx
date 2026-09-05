// src/components/Contact.tsx
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import githubIcon from "../assets/socailmedia(github).jpg";
import linkedinIcon from "../assets/socailmedia(linkedin).jpg";
import facebookIcon from "../assets/socailmedia(facebook).jpg";
import instagramIcon from "../assets/socailmedia(instagram).jpg";
import mailIcon from "../assets/socailmedia(mail).jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 dark:text-blue-400 font-extrabold tracking-widest text-xs uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Let's Connect.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
              Have a project, idea, or opportunity? Feel free to reach out. I'm always interested in connecting with new people and learning something new.
            </p>
          </motion.div>

          {/* Right Side: Links & Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            {/* Email Card */}
            <a
              href="mailto:sujalbhanyt@gmail.com"
              className="group flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700">
                  <img src={mailIcon} alt="Email" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
                  <strong className="text-sm md:text-base font-bold text-slate-900 dark:text-white">sujalbhanyt@gmail.com</strong>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'GitHub', url: 'https://github.com/sujal-bhandari5', icon: githubIcon },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sujalbhandari/', icon: linkedinIcon },
                { name: 'Facebook', url: 'https://www.facebook.com/Sujal1010/', icon: facebookIcon },
                { name: 'Instagram', url: 'https://www.instagram.com/_sujal.99/', icon: instagramIcon },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700">
                      <img src={social.icon} alt={social.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{social.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}