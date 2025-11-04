import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Minimal Photo Gallery',
    desc: 'A responsive, motion-first gallery experience focused on clarity and speed.',
    img: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop',
    demo: 'https://example.com/gallery',
    code: 'https://github.com/'
  },
  {
    title: 'Creative Portfolio',
    desc: 'A dark, elegant portfolio template with delightful micro-interactions.',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop',
    demo: 'https://example.com/portfolio',
    code: 'https://github.com/'
  },
  {
    title: 'Lens Studio',
    desc: 'Concept interface for a camera companion app with real-time presets.',
    img: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1600&auto=format&fit=crop',
    demo: 'https://example.com/lens',
    code: 'https://github.com/'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Projects</h2>
          <p className="mt-2 max-w-3xl text-zinc-400">
            Selected work exploring modern interfaces, motion, and minimalist aesthetics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 shadow-xl shadow-black/30 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3 py-2 text-xs font-medium text-white transition hover:bg-indigo-400"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:bg-zinc-800"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
