import { Link } from "wouter";
import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneLink } from "@/components/PhoneLink";
import { PHONE_NUMBERS, COMPANY } from "@/lib/constants";
import { BLOG_ARTICLES, BLOG_CATEGORIES, type BlogCategory } from "@/data/blog";
// Side-effect import: injects article content functions
import "@/data/blog-content";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-white py-10 md:py-16">
        <div className="container text-center">
          <div className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-xs font-display font-bold tracking-wider mb-4 rounded">
            HOMEOWNER RESOURCES
          </div>
          <h1 className="text-display text-4xl md:text-6xl mb-4">
            HOME IMPROVEMENT INSIGHTS
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Expert guides, cost breakdowns, and local insights for Greater Boston
            homeowners — from a contractor with {COMPANY.yearsInBusiness} years of
            experience.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border sticky top-16 lg:top-20 bg-background z-30">
        <div className="container py-3 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "All"
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Cards Grid */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <article className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  {article.heroImage && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block self-start px-2.5 py-1 bg-accent/10 text-accent text-xs font-display font-bold tracking-wider rounded mb-3">
                      {article.category.toUpperCase()}
                    </span>
                    <h2 className="text-heading text-lg mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
                      <time dateTime={article.publishDate}>
                        {new Date(article.publishDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span className="w-1 h-1 bg-muted-foreground/40 rounded-full" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-10 md:py-16">
        <div className="container text-center">
          <h2 className="text-display text-3xl md:text-4xl text-accent-foreground mb-4">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
            Get a free estimate from Greater Boston's trusted general contractor.
            {COMPANY.yearsInBusiness} years of experience, 100% in-house crews.
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
