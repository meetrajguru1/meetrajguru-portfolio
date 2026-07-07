import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vodafone NBN — Brand Awareness & Customer Acquisition Strategy · Portfolio",
};

export default function VodafoneNBNPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 sm:py-16 md:py-20">
      <Link
        href="/work"
        className="text-sm text-accent hover:text-accent-dark transition-colors mb-10 inline-block"
      >
        ← Work
      </Link>

      <div className="mb-2">
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wide">UTS Sydney · Master's Capstone · 2024</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-gray-900 mb-4 leading-tight">
        Vodafone NBN — Brand Awareness &amp; Customer Acquisition Strategy
      </h1>
      <div className="flex gap-2 flex-wrap mb-12">
        {["Marketing strategy", "Consumer research", "Positioning"].map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 rounded px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-16 rounded-lg overflow-hidden border border-gray-100">
        <Image
          src="/vodafone-poster.png"
          alt="Vodafone NBN campaign poster"
          width={800}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            A bit of context
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This was my capstone thesis project during my Master's in Marketing at UTS Sydney. We
            were assigned Vodafone NBN as our subject, and honestly — I wasn't expecting to enjoy
            it as much as I did. Once I started digging into the data and talking to real users, it
            became genuinely interesting.
          </p>
        </section>

        <section className="border-t border-gray-100 pt-10">
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            The problem — in plain English
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Vodafone has a brand problem in Australia. Everyone knows the name, but when it comes
            to NBN, most people default to Telstra or Optus. After doing my own research, the
            reason came down to three things: prices felt too high, coverage wasn't reliable
            enough, and most people didn't even know Vodafone had NBN plans in the first place.
          </p>
        </section>

        <section className="border-t border-gray-100 pt-10">
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            What I did
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I surveyed 30 NBN users across Australia and combined that with competitor research,
            customer reviews, and market data. I wanted to understand not just what people thought,
            but why they weren't choosing Vodafone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What came back was pretty clear — 80% of respondents had never even seen a Vodafone
            NBN ad. And 64% said pricing made them question whether it was worth it. That's not a
            product problem, that's a marketing and positioning problem.
          </p>
        </section>

        <section className="border-t border-gray-100 pt-10">
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            What I found surprising
          </h2>
          <p className="text-gray-600 leading-relaxed">
            When I looked at who was actually open to switching to Vodafone, it wasn't the people
            you'd expect. Business professionals, remote workers, sports fans, and tech enthusiasts
            were the most receptive segments — people who actually valued reliability and speed
            over just getting the cheapest deal. Vodafone was spending energy trying to compete on
            price against Telstra when they had a completely different audience available to them.
          </p>
        </section>

        <section className="border-t border-gray-100 pt-10">
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            What I recommended
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Two ideas came out of this:
          </p>
          <div className="space-y-6">
            <div className="pl-4 border-l-2 border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">Bundle campaign</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combining NBN with mobile, streaming (Netflix, Spotify), and Smart TV into one
                package. Instead of competing on price, make the value so obvious that price
                becomes secondary. Promote it through targeted ads and in-store AR experiences.
              </p>
            </div>
            <div className="pl-4 border-l-2 border-gray-200">
              <p className="text-sm font-medium text-gray-900 mb-2">Community play</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sponsoring the Santos Tour Down Under cycling event in Adelaide. Give attendees
                free NBN access during the 11-day event. Let people actually experience the product
                rather than just see an ad for it. Word of mouth and lived experience were the top
                two ways people discovered NBN plans anyway — so meet them there.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 pt-10">
          <h2 className="font-mono text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            What I took away from this
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This project taught me that most brand problems aren't really brand problems — they're
            positioning problems. Vodafone wasn't losing because their product was worse. They were
            losing because the right people didn't know about them, and the wrong message was
            reaching the wrong audience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That gap between what a product actually offers and how it's perceived by users — that's
            what I want to spend my career closing.
          </p>
        </section>
      </div>
    </div>
  );
}
