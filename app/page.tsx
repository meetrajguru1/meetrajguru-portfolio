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
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
      {/* Hero */}
      <section className="mb-24">
        <p className="text-sm text-gray-400 mb-3 tracking-wide">Product-minded, marketing-trained</p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          I close the gap between what a product offers and how people actually experience it.
        </h1>
        <p className="text-gray-500 leading-relaxed text-lg">
          Master's in Marketing from UTS Sydney, with hands-on experience across CRM, digital
          marketing, and retail. I've spent years on the customer side of the screen, and I'm now
          bringing that perspective into product management — through research, case studies, and
          honest writing about what I'm learning along the way.
        </p>
      </section>

      {/* Selected work */}
      <section className="mb-24">
        <h2 className="text-sm font-semibold text-navy uppercase tracking-widest mb-8">
          Selected work
        </h2>
        <Link
          href={`/work/${featuredCaseStudy.slug}`}
          className="block bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
          style={{ borderLeftWidth: '4px', borderLeftColor: '#1B3A6B' }}
        >
          <p className="text-xs text-gray-400 mb-1">{featuredCaseStudy.company}</p>
          <h3 className="text-base font-medium text-gray-900 mb-2">{featuredCaseStudy.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{featuredCaseStudy.description}</p>
          <span className="text-sm text-navy font-medium">Read case study →</span>
        </Link>
        <Link
          href="/work"
          className="inline-block mt-6 text-sm text-navy hover:text-navy-dark transition-colors"
        >
          See all work →
        </Link>
      </section>

      {/* Recent writing */}
      <section>
        <h2 className="text-sm font-semibold text-navy uppercase tracking-widest mb-8">
          Recent writing
        </h2>
        <div className="space-y-5">
          {recentPosts.map((post) => (
            <div key={post.slug} className="flex items-baseline justify-between gap-4">
              <Link
                href={`/writing/${post.slug}`}
                className="text-sm text-navy hover:text-navy-dark transition-colors"
              >
                {post.title}
              </Link>
              <span className="text-xs text-gray-400 shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
            </div>
          ))}
        </div>
        <Link
          href="/writing"
          className="inline-block mt-8 text-sm text-navy hover:text-navy-dark transition-colors"
        >
          See all writing →
        </Link>
      </section>
    </div>
  );
}
