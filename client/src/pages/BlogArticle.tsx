import { Link } from "wouter";
import { Phone, ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "@/components/PhoneLink";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import type { BlogArticle } from "@/data/blog";
import { getRelatedArticles } from "@/data/blog";
// Side-effect import: injects article content functions
import "@/data/blog-content";

interface BlogArticlePageProps {
  article: BlogArticle;
}

export default function BlogArticlePage({ article }: BlogArticlePageProps) {
  const related = getRelatedArticles(article, 3);
  const Content = article.content;

  const publishDate = new Date(article.publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-10 md:py-16">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <span className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 cursor-pointer transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </span>
          </Link>
          <span className="inline-block px-2.5 py-1 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider rounded mb-4">
            {article.category.toUpperCase()}
          </span>
          <h1 className="text-display text-3xl md:text-5xl mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-10 md:py-16">
        <div className="container max-w-3xl">
          {article.heroImage && (
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full rounded-lg mb-8 aspect-[2/1] object-cover"
            />
          )}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
            <Content />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-10 md:py-16 bg-muted/50 border-t border-border">
          <div className="container">
            <h2 className="text-heading text-2xl mb-6">MORE ARTICLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`}>
                  <article className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-background h-full flex flex-col">
                    {rel.heroImage && (
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={rel.heroImage}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4 flex flex-col flex-1">
                      <span className="inline-block self-start px-2 py-0.5 bg-accent/10 text-accent text-xs font-display font-bold tracking-wider rounded mb-2">
                        {rel.category.toUpperCase()}
                      </span>
                      <h3 className="text-heading text-sm group-hover:text-accent transition-colors">
                        {rel.title}
                      </h3>
                      <div className="mt-auto pt-3 text-xs text-muted-foreground">
                        {rel.readTime}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-accent py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-3xl md:text-4xl text-accent-foreground mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
            Call us for a free, no-obligation estimate. {COMPANY.yearsInBusiness}{" "}
            years of experience, 100% in-house crews, licensed and insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink tel={PHONE_NUMBERS.MAIN.tel}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
              >
                <Phone className="mr-2 w-5 h-5" />
                {PHONE_NUMBERS.MAIN.display}
              </Button>
            </PhoneLink>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                GET FREE ESTIMATE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
