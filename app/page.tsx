import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const featuredCaseStudy = {
  slug: "vodafone-nbn",
  title: "Vodafone NBN — Brand Awareness & Customer Acquisition Strategy",
  company: "UTS Sydney · Master's Capstone · 2024",
  description:
    "How I used primary research and competitor analysis to identify why Vodafone was losing the NBN market — and what a repositioning strategy could look like.",
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-16 sm:pt-24 md:pt-32 pb-20">
      {/* Hero */}
      <section className="mb-16 sm:mb-20 md:mb-24">
        <p className="flex items-center gap-2 font-mono text-xs text-accent mb-4 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-accent rounded-sm" />
          Product-minded, marketing-trained
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.05]">
          I close the gap between what a product offers and{" "}
          <span className="text-accent">how people actually experience it.</span>
        </h1>
        <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-xl">
          Master's in Marketing from UTS Sydney, with hands-on experience across CRM, digital
          marketing, and retail. I've spent years on the customer side of the screen, and I'm now
          bringing that perspective into product management — through research, case studies, and
          honest writing about what I'm learning along the way.
        </p>
      </section>

      {/* Selected work */}
      <section className="mb-16 sm:mb-20 md:mb-24">
        <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-8">
          01 — Selected work
        </h2>
        <Link
          href={`/work/${featuredCaseStudy.slug}`}
          className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <p className="font-mono text-xs text-gray-400 mb-2 uppercase tracking-wide">{featuredCaseStudy.company}</p>
          <h3 className="text-base font-semibold text-gray-900 mb-2">{featuredCaseStudy.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{featuredCaseStudy.description}</p>
          <span className="text-sm text-accent font-semibold">Read case study →</span>
        </Link>
        <Link
          href="/work"
          className="inline-block mt-6 text-sm text-accent hover:text-accent-dark transition-colors"
        >
          See all work →
        </Link>
      </section>

      {/* Recent writing */}
      <section>
        <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-8">
          02 — Recent writing
        </h2>
        <div className="space-y-5">
          {recentPosts.map((post) => (
            <div key={post.slug} className="flex items-baseline justify-between gap-4">
              <Link
                href={`/writing/${post.slug}`}
                className="text-sm text-accent hover:text-accent-dark transition-colors"
              >
                {post.title}
              </Link>
              <span className="font-mono text-xs text-gray-400 shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
            </div>
          ))}
        </div>
        <Link
          href="/writing"
          className="inline-block mt-8 text-sm text-accent hover:text-accent-dark transition-colors"
        >
          See all writing →
        </Link>
      </section>
    </div>
  );
}
