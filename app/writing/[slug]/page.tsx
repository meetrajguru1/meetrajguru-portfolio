import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} · Writing` };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <Link
        href="/writing"
        className="text-sm text-gray-400 hover:text-gray-900 transition-colors mb-12 inline-block"
      >
        ← Writing
      </Link>

      <header className="mb-12">
        <p className="text-sm text-gray-400 mb-3">{formattedDate}</p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 leading-tight">
          {post.title}
        </h1>
      </header>

      <article className="prose">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
