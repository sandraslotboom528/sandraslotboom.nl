import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-4">Blog</h1>
      <p className="text-tekst/80 mb-12">
        Verhalen en inzichten over de Chinese geneeskunde, de 5 elementen en wat ze je kunnen leren over jezelf.
      </p>

      {blogPosts.length === 0 ? (
        <p className="text-tekst/60 italic">Binnenkort verschijnen hier de eerste blogs.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2">
          {blogPosts
            .slice()
            .sort((a, b) => b.datum.localeCompare(a.datum))
            .map(post => (
              <div key={post.slug} className="bg-wit rounded-2xl overflow-hidden shadow-sm border border-primair/10">
                {post.foto && (
                  <img src={post.foto} alt={post.titel} className="w-full h-44 object-cover" />
                )}
                <div className="p-8">
                  <p className="text-tekst/50 text-sm mb-2">
                    {new Date(post.datum).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h2 className="text-xl font-bold text-primair mb-2">{post.titel}</h2>
                  <p className="text-tekst/70 leading-relaxed mb-4">{post.samenvatting}</p>
                  <Link href={`/blog/${post.slug}`} className="font-bold text-accent hover:underline">
                    Lees meer →
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
