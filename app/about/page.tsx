import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Portfolio",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">About</h1>

      <div className="space-y-6 text-gray-500 leading-relaxed">
        <p>
          Hi — I'm Meet. I'm a product manager with [X] years of experience building [type of
          products] for [type of users or industry]. I care deeply about understanding why people do
          what they do, and translating that into products that actually improve their lives.
        </p>

        <p>
          Before moving into product, I [brief background — e.g., studied X, worked in Y, or
          started as Z]. That background shapes how I think: I tend to start with the problem
          before jumping to solutions, and I believe good process is what you fall back on when
          intuition runs out.
        </p>

        <p>
          Outside of work, I [a couple of genuine personal details — hobbies, interests, things
          you care about]. I think these matter because they shape how you see the world, and
          seeing the world differently is half the job.
        </p>

        <p>
          I'm currently [your status — e.g., open to new roles, based in X, looking for Y type of
          company]. If something resonates, I'd love to talk.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
          Elsewhere
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 w-24">Email</span>
            <a
              href="mailto:mt.rajguru@gmail.com"
              className="text-sm text-gray-900 hover:opacity-60 transition-opacity underline underline-offset-2"
            >
              mt.rajguru@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 w-24">LinkedIn</span>
            <span className="text-sm text-gray-400">[Add your LinkedIn URL]</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 w-24">Resume</span>
            <a
              href="/resume.pdf"
              download
              className="text-sm text-gray-900 hover:opacity-60 transition-opacity underline underline-offset-2"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
