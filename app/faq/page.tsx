'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer:
          "Standard shipping takes 5-7 business days. Express shipping (available in select cities) delivers within 2-3 business days. You'll receive tracking information via email once your order ships.",
      },
      {
        question: 'Do you ship internationally?',
        answer:
          "Currently, we only ship within India. We're working on expanding our international shipping options. Stay tuned for updates!",
      },
      {
        question: 'Can I change or cancel my order?',
        answer:
          'You can modify or cancel your order within 2 hours of placing it. After that, the order enters processing and changes may not be possible. Contact our support team immediately for assistance.',
      },
      {
        question: 'What are the shipping charges?',
        answer:
          'We offer free shipping on orders above ₹999. For orders below ₹999, a flat shipping fee of ₹99 applies. Express shipping costs an additional ₹149.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer:
          'We offer a 15-day return policy for unopened items in original packaging. Opened items can be returned within 7 days if defective or not as described. Collectibles and premium items have a 3-day return window.',
      },
      {
        question: 'How do I initiate a return?',
        answer:
          'Log into your account, go to "My Orders," select the item you wish to return, and click "Return Item." Follow the prompts to schedule a pickup or get a drop-off label.',
      },
      {
        question: 'When will I receive my refund?',
        answer:
          'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        question: 'Are all toys safety certified?',
        answer:
          'Yes! All our toys meet Indian safety standards (IS 9873) and many are also certified by international standards like ASTM and EN71. Each product page displays its safety certifications.',
      },
      {
        question: 'What age groups do you cater to?',
        answer:
          'We have toys for all ages, from 0-2 years (infant toys) to 12+ years (advanced building sets and collectibles). Each product clearly displays the recommended age range.',
      },
      {
        question: 'Do you sell authentic branded toys?',
        answer:
          'Absolutely! We are authorized retailers for all the brands we carry. You can be assured of 100% authentic products with manufacturer warranty.',
      },
    ],
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), net banking, and Cash on Delivery (COD) for orders up to ₹10,000.',
      },
      {
        question: 'Is my payment information secure?',
        answer:
          'Yes, we use 256-bit SSL encryption and are PCI-DSS compliant. We never store your complete card details on our servers.',
      },
      {
        question: 'Do you offer EMI options?',
        answer:
          'Yes! No-cost EMI is available on orders above ₹3,000 for select credit cards. EMI options will be displayed at checkout if available for your card.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <span className="shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {isOpen ? (
            <Minus className="h-4 w-4 text-primary" />
          ) : (
            <Plus className="h-4 w-4 text-muted-foreground" />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* ============ HERO SECTION ============== */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">❓</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about orders, shipping, returns,
              and more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">
                  {categoryIndex === 0 && '📦'}
                  {categoryIndex === 1 && '↩️'}
                  {categoryIndex === 2 && '🧸'}
                  {categoryIndex === 3 && '💳'}
                </span>
                {category.category}
              </h2>
              <div className="bg-card rounded-2xl shadow-soft p-6">
                {category.questions.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* ============ STILL HAVE QUESTIONS =============== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-linear-to-r from-primary to-toy-lavender rounded-3xl p-8 text-center"
          >
            <h2 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Still have questions?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Our support team is here to help you 24/7
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Contact Support →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}