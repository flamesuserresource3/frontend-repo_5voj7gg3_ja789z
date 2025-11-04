import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || 'Someone'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Contact</h2>
          <p className="mt-2 max-w-3xl text-zinc-400">Have a project in mind or want to collaborate? Let’s connect.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-xl shadow-black/30">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-zinc-700/70 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-indigo-500/70"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-zinc-700/70 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-indigo-500/70"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-md border border-zinc-700/70 bg-zinc-950 px-3 py-2 text-zinc-100 placeholder-zinc-500 outline-none transition focus:border-indigo-500/70"
                  placeholder="Tell me a bit about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:translate-y-[-1px] hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-lg font-medium text-white">Let’s work together</h3>
              <p className="mt-2 text-sm text-zinc-400">
                I’m available for select freelance projects, collaborations, and creative consulting. Prefer email? Reach out directly.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-4 inline-flex items-center gap-2 text-indigo-400 transition hover:text-indigo-300"
              >
                <Mail className="h-4 w-4" /> hello@example.com
              </a>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-lg font-medium text-white">Connect</h3>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 transition hover:border-indigo-500 hover:text-indigo-400"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 transition hover:border-indigo-500 hover:text-indigo-400"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
