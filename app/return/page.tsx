'use client';

import { motion } from 'framer-motion';
import {
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock,
  Wallet,
} from 'lucide-react';

const returnSteps = [
  {
    step: 1,
    title: 'Initiate Return',
    description:
      'Log in to your account, go to "My Orders" and select "Return Item" for the product you wish to return.',
  },
  {
    step: 2,
    title: 'Pack the Item',
    description:
      'Pack the product securely in its original packaging with all accessories, tags, and documents.',
  },
  {
    step: 3,
    title: 'Schedule Pickup',
    description:
      'Choose a convenient pickup date and time. Our courier partner will collect the package from your doorstep.',
  },
  {
    step: 4,
    title: 'Quality Check',
    description:
      'Once received, our team will inspect the product within 2-3 business days.',
  },
  {
    step: 5,
    title: 'Refund Processed',
    description:
      'After approval, refund will be credited to your original payment method within 5-7 business days.',
  },
];

const returnPolicies = [
  {
    category: 'Standard Toys',
    returnWindow: '15 days',
    conditions: [
      'Unused and unopened',
      'Original packaging',
      'All tags attached',
    ],
    refundType: 'Full refund',
  },
  {
    category: 'Opened Items',
    returnWindow: '7 days',
    conditions: ['Defective or damaged', 'Not as described', 'Missing parts'],
    refundType: 'Full refund or replacement',
  },
  {
    category: 'Premium & Collectibles',
    returnWindow: '3 days',
    conditions: [
      'Sealed condition only',
      'Authentication seal intact',
      'Original certificate',
    ],
    refundType: 'Full refund',
  },
];

const nonReturnable = [
  'Personalized or customized items',
  'Gift cards and vouchers',
  'Items marked as "Final Sale"',
  'Products damaged due to misuse',
  'Incomplete returns (missing parts/accessories)',
];

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================ */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">↩️</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Returns & Refunds
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hassle-free returns with our customer-friendly policy. Your
              satisfaction is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-5xl">
          {/* ================= RETURN PROCESS ============== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              How to Return an Item
            </h2>
            <div className="relative">
              {/* ================ TIMELINE LINE =============== */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

              <div className="space-y-8 md:space-y-0">
                {returnSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`md:flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    >
                      <div className="bg-card rounded-2xl p-6 shadow-soft inline-block">
                        <h3 className="font-display font-bold text-lg text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg shrink-0 z-10">
                      {item.step}
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ============== RETURN POLICIES TABLE ================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Return Policy by Category
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {returnPolicies.map((policy, index) => (
                <motion.div
                  key={policy.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {policy.category}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {policy.returnWindow} return window
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {policy.conditions.map((condition, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {condition}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium text-foreground">
                      {policy.refundType}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =============== NON-RETURNABLE ITEMS =============== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Non-Returnable Items
            </h2>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-2xl p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {nonReturnable.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ============ REFUND INFO ============= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-muted/50 to-muted/30 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <RotateCcw className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Refund Timeline
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Credit/Debit Card
                    </p>
                    <p className="text-muted-foreground">5-7 business days</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      UPI Payments
                    </p>
                    <p className="text-muted-foreground">2-3 business days</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Net Banking
                    </p>
                    <p className="text-muted-foreground">5-7 business days</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">
                      Store Credit
                    </p>
                    <p className="text-muted-foreground">Instant</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}