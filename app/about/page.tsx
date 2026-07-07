import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Portfolio",
};

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 sm:py-16 md:py-20">
      <img
        src="/meet.jpg"
        alt="Meet Rajguru"
        className="w-24 h-24 rounded-full object-cover mb-8"
      />
      <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 mb-12">About</h1>

      <div className="space-y-6 text-gray-500 leading-relaxed">
        <p>
          Hi, I'm Meet Rajguru — a marketing graduate turned aspiring product manager, currently
          building my career at the intersection of customer experience, business strategy, and
          technology.
        </p>

        <p>
          I completed my Master's in Marketing from the University of Technology Sydney and have
          spent the last few years working across digital marketing, CRM, and retail sales —
          always gravitating toward the "why" behind products and the problems they solve.
        </p>

        <p>
          I'm now focused on breaking into product management, documenting that journey here
          through case studies, product teardowns, and honest writing about what I'm learning
          along the way.
        </p>

        <p>
          I believe you don't need all the answers to start — just curiosity, consistency, and
          the willingness to keep going.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-6">
          Elsewhere
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-400 w-24">Email</span>
            <a
              href="mailto:mt.rajguru@gmail.com"
              className="text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
            >
              mt.rajguru@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-400 w-24">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/meet-rajguru-879096a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
            >
              linkedin.com/in/meet-rajguru-879096a1
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gray-400 w-24">Resume</span>
            <a
              href="/resume.pdf"
              download
              className="text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-2"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
