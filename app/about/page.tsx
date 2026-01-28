'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Heart, value: '50,000+', label: 'Happy Customers' },
  { icon: Users, value: '100+', label: 'Team Members' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: TrendingUp, value: '10+', label: 'Years Experience' },
];

const values = [
  {
    title: 'Quality First',
    description:
      'Every toy we sell meets the highest safety and quality standards. We personally test and verify each product.',
    emoji: '✨',
  },
  {
    title: 'Child Development',
    description:
      'We curate toys that encourage learning, creativity, and healthy development at every age.',
    emoji: '🧒',
  },
  {
    title: 'Family Values',
    description:
      'We believe in toys that bring families together for quality time and shared experiences.',
    emoji: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Sustainability',
    description:
      'We prioritize eco-friendly toys and sustainable packaging to protect our planet for future generations.',
    emoji: '🌍',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO SECTION ============= */}
      <section className="relative bg-linear-to-br from-primary/10 via-background to-secondary/10 section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-6xl mb-6 block">🎪</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">VYOMVANTA</span>{' '}
              <span className="text-secondary">TRADERS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to bring joy, learning, and wonder to children
              and families across India through our carefully curated collection
              of toys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ STATS ============= */}
      <section className="py-12 bg-muted/30">
        <div className="container-main px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============= */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VYOMVANTA TRADERS was born from a simple belief: every child
                  deserves access to quality toys that spark imagination and
                  support healthy development.
                </p>
                <p>
                  Founded by parents who understood the challenge of finding the
                  right toys, we set out to create a one-stop destination for
                  families seeking everything from affordable everyday toys to
                  premium collectibles.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of families across
                  India, bringing smiles to children and peace of mind to
                  parents with our carefully vetted selection and exceptional
                  customer service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-3xl overflow-hidden bg-linear-to-br from-toy-indigo/20 to-toy-amber/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🧸</div>
                  <p className="font-display text-2xl font-bold text-foreground">
                    Spreading Joy Since 2014
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl shadow-amber font-display font-bold"
              >
                🎉 10 Years of Happiness!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== OUR VALUES ============= */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What drives us every day to be the best toy store for families
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-primary to-toy-lavender rounded-3xl p-8 sm:p-12 text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Bring Joy Home?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Explore our collection and find the perfect toy for your little
              ones.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Shop Now →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}