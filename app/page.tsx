import Link from "next/link";

const caseStudies = [
  {
    slug: "redesigning-onboarding",
    title: "Redesigning onboarding to cut time-to-value by 40%",
    company: "Company name · 2025",
    description:
      "How we identified the moment users understood the product, then rebuilt the first 10 minutes around it.",
  },
  {
    slug: "search-zero-results",
    title: "Solving zero-results search for a B2B SaaS product",
    company: "Company name · 2024",
    description:
      "A deep-dive into why 30% of searches returned nothing, and how fixing it lifted retention.",
  },
];

const recentPosts = [
  {
    slug: "how-i-think-about-prioritization",
    title: "How I think about prioritization",
    date: "May 2026",
  },
  {
    slug: "placeholder-2",
    title: "What good discovery actually looks like",
    date: "Coming soon",
  },
  {
    slug: "placeholder-3",
    title: "Why metrics are the beginning of the conversation, not the end",
    date: "Coming soon",
  },
];

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
      {/* Hero */}
      <section className="mb-24">
        <p className="text-sm text-gray-400 mb-3 tracking-wide">Aspiring product manager</p>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Building products people actually want to use.
        </h1>
        <p className="text-gray-500 leading-relaxed text-lg">
          Marketing graduate turned aspiring PM. I write about products, career transitions, and
          what I'm learning along the way. Currently looking for my next opportunity in product.
        </p>
      </section>

      {/* Selected work */}
      <section className="mb-24">
        <h2 className="text-sm font-semibold text-navy uppercase tracking-widest mb-8">
          Selected work
        </h2>
        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href="/work"
              className="block bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              style={{ borderLeftWidth: '4px', borderLeftColor: '#1B3A6B' }}
            >
              <p className="text-xs text-gray-400 mb-1">{cs.company}</p>
              <h3 className="text-base font-medium text-gray-900 mb-2">{cs.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{cs.description}</p>
              <span className="text-sm text-navy font-medium">Read case study →</span>
            </Link>
          ))}
        </div>
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
              {post.date === "Coming soon" ? (
                <span className="text-sm text-gray-400">{post.title}</span>
              ) : (
                <Link
                  href={`/writing/${post.slug}`}
                  className="text-sm text-navy hover:text-navy-dark transition-colors"
                >
                  {post.title}
                </Link>
              )}
              <span className="text-xs text-gray-400 shrink-0">{post.date}</span>
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
