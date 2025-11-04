import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail, FolderGit2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[85vh] min-h-[520px] w-full overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950/90" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-300">Creative Professional</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-6xl">
          Alex Carter
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300 md:text-lg">
          Designer & Frontend Developer crafting modern, minimalist experiences at the intersection of creativity and technology.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-1px] hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700/80 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition hover:translate-y-[-1px] hover:bg-zinc-800/70 focus:outline-none focus:ring-2 focus:ring-zinc-600/60"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-zinc-400">
          <span>Scroll</span>
          <ArrowRight className="h-4 w-4 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
