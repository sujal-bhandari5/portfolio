// src/components/Education.tsx
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { portfolio } from '../data/education';
import { MapPin, ChevronDown, Award } from 'lucide-react';

export function Education() {
  const lineRef = useRef(null);
  // Triggers the timeline drawing animation only when it scrolls into view
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="education overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="education-timeline relative z-10">
        {/* Animated Horizontal Timeline Line */}
        <motion.div
          ref={lineRef}
          className="education-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isLineInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {portfolio.education.map((item, index) => (
          <EducationCard key={item.institution} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

// Sub-component for clean architecture and independent state management
function EducationCard({ item, index }: { item: any, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      className="education-item group relative z-10 flex flex-col items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="education-logo relative mx-auto mb-4 bg-white shadow-md ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden"
      >
        <img 
          src={item.logo} 
          alt={item.institution} 
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </a>

      <div className="education-info w-full text-center">
        <span className="text-blue-600 dark:text-blue-400 font-extrabold tracking-widest text-xs uppercase">
          {item.period}
        </span>
        <h3 className="font-bold text-slate-900 dark:text-white mt-2 mb-1">
          {item.institution}
        </h3>
        <p className="font-medium text-slate-600 dark:text-slate-400">
          {item.degree}
        </p>

        {/* Expandable Details Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-5 text-left"
            >
              <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 mb-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
                <span>{item.location}</span>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <Award className="w-4 h-4 text-purple-500" />
                {item.result}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 mx-auto flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}