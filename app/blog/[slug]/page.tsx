import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/lib/blog';

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return { title: post ? post.titel : 'Blog' };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
        ← Terug naar blog
      </Link>

      <p className="text-tekst/50 text-sm mt-8 mb-2">
        {new Date(post.datum).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
      </p>
      <h1 className="text-3xl font-bold text-primair mb-8">{post.titel}</h1>

      {post.foto && (
        <img src={post.foto} alt={post.titel} className="w-full rounded-2xl shadow-sm mb-8" />
      )}

      <div className="space-y-4 text-tekst/80 leading-relaxed">
        {post.inhoud.map((blok, i) => {
          if ('kop' in blok) {
            return <h2 key={i} className="text-2xl font-bold text-primair pt-4">{blok.kop}</h2>;
          }
          if ('lijst' in blok) {
            return (
              <ul key={i} className="space-y-2 border-l-2 border-primair/20 pl-5">
                {blok.lijst.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
          }
          if (blok.linkTekst && blok.linkHref) {
            const [voor, na] = blok.tekst.split(blok.linkTekst);
            return (
              <p key={i}>
                {voor}
                <Link href={blok.linkHref} className="font-bold text-accent hover:underline">
                  {blok.linkTekst}
                </Link>
                {na}
              </p>
            );
          }
          return <p key={i}>{blok.tekst}</p>;
        })}
      </div>
    </section>
  );
}
