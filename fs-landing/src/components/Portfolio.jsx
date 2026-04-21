import { useState } from 'react';

const CATEGORIES = [
  'All',
  'Infrastructure',
  'Waterplants & Wastewater Plants',
  'Airports',
  'County Buildings',
  'City Buildings',
];

const PROJECTS = [
  {
    title: 'Northeast Water Purification Plant',
    category: 'Waterplants & Wastewater Plants',
    value: '$1.8B',
    location: 'Houston, TX',
  },
  {
    title: 'High Service Pump Station',
    category: 'Waterplants & Wastewater Plants',
    value: '$45M',
    location: 'Houston, TX',
  },
  {
    title: 'Lake Intake Pump Station',
    category: 'Waterplants & Wastewater Plants',
    value: '$32M',
    location: 'Houston, TX',
  },
  {
    title: 'IAH Terminal B Redevelopment',
    category: 'Airports',
    value: '$1.2B',
    location: 'Houston, TX',
  },
  {
    title: 'HAS Aerospace Institute',
    category: 'Airports',
    value: '$50M',
    location: 'Houston Spaceport',
  },
  {
    title: 'Airport Admin Building 3',
    category: 'Airports',
    value: '$28M',
    location: 'Houston, TX',
  },
  {
    title: 'Fort Bend Emergency Operations',
    category: 'County Buildings',
    value: '$12M',
    location: 'Fort Bend, TX',
  },
  {
    title: 'Fort Bend IT Building',
    category: 'County Buildings',
    value: '$18M',
    location: 'Fort Bend, TX',
  },
  {
    title: 'Municipal Water Treatment Facility',
    category: 'Infrastructure',
    value: '$85M',
    location: 'Harris County, TX',
  },
  {
    title: 'Stormwater Management Center',
    category: 'Infrastructure',
    value: '$42M',
    location: 'Houston, TX',
  },
  {
    title: 'City Hall Annex',
    category: 'City Buildings',
    value: '$22M',
    location: 'Houston, TX',
  },
  {
    title: 'Public Works Administration Complex',
    category: 'City Buildings',
    value: '$35M',
    location: 'Houston, TX',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-brand-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-red text-[11px] tracking-[0.3em] uppercase font-body mb-4">
            Our Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand-dark uppercase tracking-wide">
            Featured <span className="text-brand-red">Projects</span>
          </h2>
          <div className="w-12 h-[2px] bg-brand-red mx-auto mt-6" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-body transition-all duration-300 rounded-sm cursor-pointer ${
                activeFilter === cat
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20'
                  : 'bg-white text-brand-dark/60 hover:text-brand-dark hover:bg-white/80 border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <ProjectCard key={`${project.title}-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-brand-charcoal rounded-sm overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video Thumbnail Placeholder */}
      <div className="aspect-[16/10] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%),
              linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }} />
        </div>

        {/* Hover Play Indicator */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          hovered ? 'bg-black/40' : 'bg-transparent'
        }`}>
          <div className={`transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center backdrop-blur-sm bg-white/5">
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sound-off indicator */}
        <div className={`absolute top-3 right-3 transition-all duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </div>
        </div>

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-block bg-brand-red/90 text-white text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm font-body backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5">
        <h3 className="text-white font-heading text-sm md:text-base uppercase tracking-[0.08em] leading-tight mb-3 group-hover:text-brand-red transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-[10px] tracking-[0.1em] uppercase font-body">
            {project.location}
          </span>
          <span className="text-brand-red/80 text-[11px] tracking-wider font-heading font-bold">
            {project.value}
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-500 ${
        hovered ? 'w-full' : 'w-0'
      }`} />
    </div>
  );
}
