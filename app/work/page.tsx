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
  },
  {
    slug: null,
    title: "Redesigning onboarding to cut time-to-value by 40%",
    company: "Company name",
    year: "2025",
    tags: ["B2C", "Growth", "Research"],
    description:
      "How we identified the moment users understood the product, then rebuilt the first 10 minutes around it. This covers discovery, prototyping, and measuring success after launch.",
  },
  {
    slug: null,
    title: "Solving zero-results search for a B2B SaaS product",
    company: "Company name",
    year: "2024",
    tags: ["B2B", "Search", "Retention"],
    description:
      "A deep-dive into why 30% of searches returned nothing, and how fixing it lifted retention by 12 points. Includes data analysis, cross-functional coordination, and trade-off decisions.",
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Work</h1>
      <p className="text-gray-500 mb-16 leading-relaxed">
        A selection of product case studies. Each one covers the problem, the process, and what I
        learned.
      </p>

      <div className="space-y-16">
        {caseStudies.map((cs, i) => {
          const inner = (
            <>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-400">{cs.company}</span>
                <span className="text-xs text-gray-300">·</span>
                <span className="text-xs text-gray-400">{cs.year}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:opacity-60 transition-opacity">
                {cs.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{cs.description}</p>
              <div className="flex gap-2 flex-wrap">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          return cs.slug ? (
            <Link key={i} href={`/work/${cs.slug}`} className="block group border-t border-gray-100 pt-10">
              {inner}
            </Link>
          ) : (
            <article key={i} className="border-t border-gray-100 pt-10">
              {inner}
            </article>
          );
        })}
      </div>

      <p className="mt-16 text-sm text-gray-400">
        Full case studies available on request.{" "}
        <a href="mailto:mt.rajguru@gmail.com" className="text-gray-900 underline underline-offset-2 hover:opacity-60 transition-opacity">
          Get in touch.
        </a>
      </p>
    </div>
  );
}
