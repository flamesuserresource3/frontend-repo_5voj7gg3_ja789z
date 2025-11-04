import React from 'react';
import { User, Code2, Camera, Palette } from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code2 className="h-4 w-4" /> },
  { name: 'Tailwind CSS', icon: <Palette className="h-4 w-4" /> },
  { name: 'Framer Motion', icon: <Palette className="h-4 w-4" /> },
  { name: 'Photography', icon: <Camera className="h-4 w-4" /> },
  { name: 'UI/UX', icon: <User className="h-4 w-4" /> },
];

const About = () => {
  return (
    <section id="about" className="relative bg-zinc-950 py-20 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">About</h2>
          <p className="mt-2 max-w-3xl text-zinc-400">
            I’m a multidisciplinary creative blending design, code, and photography to build elegant, purposeful interfaces. My focus is on clean aesthetics, thoughtful motion, and
            delightful details that make products feel alive.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl shadow-black/30">
              <p className="text-zinc-300">
                Over the past few years, I’ve collaborated with startups and studios to craft interfaces for web and mobile. I care about accessibility, performance, and shipping polished experiences.
              </p>
              <p className="mt-4 text-zinc-300">
                Outside of work, you’ll find me exploring minimal photography, capturing geometry and light.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="h-60 w-60 rounded-2xl object-cover ring-1 ring-zinc-800 md:h-72 md:w-72"
            />
            <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-1">
              {skills.map((s) => (
                <li key={s.name} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-200">
                  <span className="flex items-center gap-2 text-zinc-100">{s.icon}{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
