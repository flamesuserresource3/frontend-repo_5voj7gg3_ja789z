import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Camera, Menu } from 'lucide-react';

function App() {
  useEffect(() => {
    // Ensure smooth scrolling across the app
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="rounded-md bg-zinc-900 p-2 ring-1 ring-zinc-800 transition group-hover:ring-indigo-500/60">
              <Camera className="h-4 w-4 text-indigo-400" />
            </span>
            <span className="text-sm font-medium tracking-wide text-white">Alex Carter</span>
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden rounded-md border border-zinc-800 bg-zinc-900 p-2 text-zinc-300"><Menu className="h-4 w-4" /></button>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 bg-zinc-950 py-10 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm">© {new Date().getFullYear()} Alex Carter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
