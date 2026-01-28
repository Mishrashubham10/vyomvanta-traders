'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const featuredPost = {
  id: 1,
  title: 'The Ultimate Guide to Choosing Age-Appropriate Toys',
  excerpt:
    "Discover how to select toys that not only entertain but also support your child's developmental milestones at every age.",
  image: '🎯',
  author: 'Dr. Priya Sharma',
  date: 'January 15, 2024',
  readTime: '8 min read',
  category: 'Parenting Tips',
};

const blogPosts = [
  {
    id: 2,
    title: '10 Educational Toys That Make Learning Fun',
    excerpt:
      'From building blocks to science kits, explore toys that combine play with learning.',
    image: '📚',
    author: 'Rahul Mehta',
    date: 'January 10, 2024',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    id: 3,
    title: 'Sustainable Toys: A Guide to Eco-Friendly Play',
    excerpt:
      'Learn about our commitment to sustainable toys and how you can make greener choices.',
    image: '🌱',
    author: 'Sneha Patel',
    date: 'January 5, 2024',
    readTime: '6 min read',
    category: 'Sustainability',
  },
  {
    id: 4,
    title: 'The Magic of Pretend Play',
    excerpt:
      'How imaginative play helps develop creativity, social skills, and emotional intelligence.',
    image: '✨',
    author: 'Dr. Priya Sharma',
    date: 'December 28, 2023',
    readTime: '7 min read',
    category: 'Child Development',
  },
  {
    id: 5,
    title: 'Top Collectible Toys of 2024',
    excerpt:
      'Our picks for the most sought-after collectibles that are worth adding to your collection.',
    image: '🏆',
    author: 'Amit Kumar',
    date: 'December 20, 2023',
    readTime: '4 min read',
    category: 'Collectibles',
  },
  {
    id: 6,
    title: 'Screen-Free Activities for Kids',
    excerpt: 'Creative ways to keep children engaged without digital devices.',
    image: '🎨',
    author: 'Sneha Patel',
    date: 'December 15, 2023',
    readTime: '5 min read',
    category: 'Activities',
  },
];

const categories = [
  'All Posts',
  'Parenting Tips',
  'Education',
  'Child Development',
  'Collectibles',
  'Sustainability',
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">📝</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The Toy Box Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and stories about toys, parenting, and child
              development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-card rounded-3xl shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-4/3 lg:aspect-auto bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-9xl">{featuredPost.image}</span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow group"
              >
                <div className="aspect-16/10 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">
                    {post.image}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-linear-to-r from-primary to-toy-lavender rounded-3xl p-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Get the latest articles, toy recommendations, and exclusive offers
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}