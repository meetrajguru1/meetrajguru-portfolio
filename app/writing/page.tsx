import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing · Portfolio",
};

function MobileBio() {
  return (
    <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-100 lg:hidden">
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
        <Image
          src="/meet.jpg"
          alt="Meet Rajguru"
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">Meet Rajguru</p>
        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
          Aspiring PM. Writing about products, career transitions, and what I&apos;m learning.
        </p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-12 bg-white border border-gray-100 rounded-xl p-6 space-y-5">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/meet.jpg"
              alt="Meet Rajguru"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Meet Rajguru</p>
            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              Aspiring PM. Marketing graduate from UTS Sydney. Writing about products, career
              transitions, and what I&apos;m learning.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://www.linkedin.com/in/meet-rajguru-879096a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-navy hover:text-navy-dark transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:mt.rajguru@gmail.com"
            className="text-sm text-navy hover:text-navy-dark transition-colors"
          >
            mt.rajguru@gmail.com
          </a>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 text-center">
            On this site
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link href="/work" className="text-sm text-navy hover:text-navy-dark transition-colors">
              Work
            </Link>
            <Link href="/about" className="text-sm text-navy hover:text-navy-dark transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Writing</h1>
      <p className="text-gray-500 mb-16 leading-relaxed">
        Notes on product management, decision-making, and building things.
      </p>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 min-w-0">
          <MobileBio />
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-t border-gray-100 pt-8">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-base font-medium text-navy hover:text-navy-dark transition-colors"
                  >
                    {post.title}
                  </Link>
                  <span className="text-xs text-gray-400 shrink-0">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
              </article>
            ))}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
