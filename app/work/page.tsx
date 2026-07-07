import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work · Portfolio",
};

const caseStudies = [
  {
    slug: "vodafone-nbn",
    title: "Vodafone NBN — Brand Awareness & Customer Acquisition Strategy",
    company: "UTS Sydney · Master's Capstone",
    year: "2024",
    tags: ["Marketing strategy", "Consumer research", "Positioning"],
    description:
      "How I used primary research and competitor analysis to identify why Vodafone was losing the NBN market — and what a repositioning strategy could look like.",
    inProgress: false,
  },
  {
    slug: null,
    title: "Onboarding and time-to-value",
    company: "In progress",
    year: null,
    tags: ["B2C", "Growth", "Research"],
    description:
      "An area I want to dig into next: how products help users reach their first real \"aha\" moment faster, and what gets in the way of that in the first ten minutes.",
    inProgress: true,
  },
  {
    slug: null,
    title: "Search and findability in B2B products",
    company: "In progress",
    year: null,
    tags: ["B2B", "Search", "Retention"],
    description:
      "Another problem space I'm exploring: why search so often fails users in B2B SaaS tools, and how that quietly erodes trust and retention.",
    inProgress: true,
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 sm:py-16 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 mb-4">Work</h1>
      <p className="text-gray-500 mb-16 leading-relaxed max-w-xl">
        A selection of product case studies. Each one covers the problem, the process, and what I
        learned.
      </p>

      <div className="space-y-6">
        {caseStudies.map((cs, i) => {
          const cardContent = (
            <>
              <div className="flex items-center gap-3 mb-3">
                {cs.inProgress ? (
                  <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wide">
                    {cs.company}
                  </span>
                ) : (
                  <>
                    <span className="font-mono text-xs text-gray-400 uppercase tracking-wide">{cs.company}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="font-mono text-xs text-gray-400">{cs.year}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {cs.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{cs.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {cs.slug && (
                <span className="text-sm text-accent font-semibold">Read case study →</span>
              )}
            </>
          );

          return cs.slug ? (
            <Link
              key={i}
              href={`/work/${cs.slug}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {cardContent}
            </Link>
          ) : (
            <article
              key={i}
              className="bg-white border border-gray-200 border-dashed rounded-xl p-6"
            >
              {cardContent}
            </article>
          );
        })}
      </div>

      <p className="mt-12 text-sm text-gray-400">
        Full case studies available on request.{" "}
        <a
          href="mailto:mt.rajguru@gmail.com"
          className="text-accent underline underline-offset-2 hover:text-accent-dark transition-colors"
        >
          Get in touch.
        </a>
      </p>
    </div>
  );
}
