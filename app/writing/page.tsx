import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing · Portfolio",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Writing</h1>
      <p className="text-gray-500 mb-16 leading-relaxed">
        Notes on product management, decision-making, and building things.
      </p>

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
  );
}
