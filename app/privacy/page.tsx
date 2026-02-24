'use client';

import { motion } from 'framer-motion';

/* ================= TYPES ================= */
interface SectionContent {
  text: string;
  subtitle?: string;
}

interface Section {
  title: string;
  content: SectionContent[];
}

/* ================= DATA ================= */
const sections: Section[] = [
  {
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you create an account, place an order, or contact us, we collect information such as your name, email address, phone number, shipping address, and payment information.',
      },
      {
        subtitle: 'Automatically Collected Information',
        text: 'We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and browsing behavior through cookies and similar technologies.',
      },
      {
        subtitle: 'Information from Third Parties',
        text: 'We may receive information about you from third-party services like social media platforms when you choose to link your accounts or interact with us through these services.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Order Processing',
        text: 'We use your personal information to process and fulfill your orders, including shipping and payment processing.',
      },
      {
        subtitle: 'Customer Service',
        text: 'Your information helps us respond to your inquiries, provide customer support, and handle returns or complaints.',
      },
      {
        subtitle: 'Marketing Communications',
        text: 'With your consent, we may send you promotional emails about new products, special offers, and updates. You can opt-out at any time.',
      },
      {
        subtitle: 'Website Improvement',
        text: 'We analyze usage data to improve our website, products, and services to better serve our customers.',
      },
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      {
        subtitle: 'Service Providers',
        text: 'We share information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose information when required by law or to protect our rights, safety, and property.',
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.',
      },
    ],
  },
  {
    title: 'Data Security',
    content: [
      {
        text: 'We implement industry-standard security measures to protect your personal information, including SSL encryption, secure payment processing, and regular security audits. However, no method of transmission over the Internet is 100% secure.',
      },
    ],
  },
  {
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access, correct, or update your personal information at any time through your account settings or by contacting us.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request deletion of your personal information, subject to legal retention requirements.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'You can opt-out of marketing communications by clicking the unsubscribe link in our emails or updating your preferences.',
      },
    ],
  },
  {
    title: 'Cookies',
    content: [
      {
        text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings.',
      },
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      {
        text: 'Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.',
      },
    ],
  },
  {
    title: 'Contact Us',
    content: [
      {
        text: 'If you have questions about this Privacy Policy or our data practices, please contact us at vyomvantatrapvtltd@gmail.com or write to us at: VYOMVANTA TRADERS, 374 B/12 BMC Retail Market Chikuwadi, opp phoenix hospital borivali west - 400092, Mumbai, India',
      },
    ],
  },
];

/* ================= PAGE ================= */
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* =============== HERO SECTION ============== */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">🔒</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-card rounded-2xl shadow-soft p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy describes how VYOMVANTA TRADERS (&ldquo;we&ldquo;, &ldquo;us&ldquo;,
                or &ldquo;our&ldquo;) collects, uses, and shares information about you when
                you use our website and services.
              </p>
            </div>

            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.05 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {sectionIndex + 1}
                  </span>
                  {section.title}
                </h2>

                <div className="space-y-4 pl-11">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subtitle && (
                        <h3 className="font-semibold mb-1">{item.subtitle}</h3>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}