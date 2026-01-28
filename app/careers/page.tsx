'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  Heart,
  Sparkles,
  Users,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const openPositions = [
  {
    id: 1,
    title: 'Senior Product Manager',
    department: 'Product',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5+ years',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
  },
  {
    id: 3,
    title: 'Customer Support Specialist',
    department: 'Support',
    location: 'Mumbai / Delhi',
    type: 'Full-time',
    experience: '1+ years',
  },
  {
    id: 4,
    title: 'Visual Merchandiser',
    department: 'Retail',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '2+ years',
  },
  {
    id: 5,
    title: 'Social Media Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description:
      'Comprehensive health insurance, gym memberships, and wellness programs',
  },
  {
    icon: Sparkles,
    title: 'Learning Budget',
    description:
      '₹50,000 annual budget for courses, conferences, and skill development',
  },
  {
    icon: Users,
    title: 'Team Events',
    description:
      'Regular team outings, annual retreats, and celebration of milestones',
  },
  {
    icon: Rocket,
    title: 'Growth Path',
    description:
      'Clear career progression, mentorship programs, and leadership training',
  },
];

const values = [
  {
    emoji: '🎯',
    title: 'Customer First',
    description: 'Every decision starts with our customers in mind',
  },
  {
    emoji: '💡',
    title: 'Innovation',
    description: 'We embrace new ideas and creative solutions',
  },
  {
    emoji: '🤝',
    title: 'Collaboration',
    description: 'Together we achieve more than alone',
  },
  {
    emoji: '🎉',
    title: 'Joy',
    description: 'We bring happiness to work and to our customers',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* =============== HERO SECTION ================ */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">🚀</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us bring joy to millions of children and families. Build your
              career at VYOMVANTA TRADERS.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-5xl">
          {/* ============= WHY JOIN US =============== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why VYOMVANTA TRADERS?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              We&apos;re not just selling toys - we&apos;re creating memories. Join a team
              that&apos;s passionate about bringing joy to every home.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{value.emoji}</div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ============== BENEFITS ============== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Perks & Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 bg-card rounded-2xl p-6 shadow-soft"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ============= OPEN POSITIONS ================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {job.experience}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Apply <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ============= CTA ================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-linear-to-r from-primary to-toy-lavender rounded-3xl p-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Don&apos;t see your role?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              We&apos;re always looking for talented people. Send us your resume and
              we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@vyomvanta.com"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Send Your Resume →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}