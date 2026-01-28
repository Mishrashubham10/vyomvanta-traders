'use client';

import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing and using the VYOMVANTA TRADERS website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of the services constitutes acceptance of any changes.',
  },
  {
    title: 'Use of Services',
    content:
      'You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services does not violate any applicable laws or regulations. You must not use our services to transmit any harmful, offensive, or illegal content.',
  },
  {
    title: 'Account Registration',
    content:
      'To access certain features of our services, you may need to create an account. You agree to provide accurate and complete information during registration and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
  },
  {
    title: 'Orders and Payments',
    content:
      'When you place an order, you agree to provide accurate payment and shipping information. All prices are in Indian Rupees (₹) and are subject to change without notice. We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing or product information, or suspected fraud.',
  },
  {
    title: 'Product Information',
    content:
      'We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, images, or other content on our website are accurate, complete, reliable, current, or error-free. Colors may appear differently due to monitor settings. If a product is not as described, your sole remedy is to return it in unused condition.',
  },
  {
    title: 'Shipping and Delivery',
    content:
      'We aim to deliver products within the estimated delivery timeframes. However, delivery dates are estimates only and are not guaranteed. We are not responsible for delays caused by factors beyond our control, including but not limited to weather conditions, natural disasters, or carrier delays.',
  },
  {
    title: 'Returns and Refunds',
    content:
      'Our return and refund policy is outlined separately on our Returns page. By making a purchase, you agree to the terms of our return policy. Refunds are processed within 5-7 business days of receiving and inspecting the returned item.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on our website, including text, graphics, logos, images, and software, is the property of VYOMVANTA TRADERS or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.',
  },
  {
    title: 'User Content',
    content:
      'By submitting reviews, comments, or other content, you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display such content. You represent that you own or have the necessary rights to submit such content and that it does not violate any third-party rights.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'To the fullest extent permitted by law, VYOMVANTA TRADERS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the product or service giving rise to the claim.',
  },
  {
    title: 'Indemnification',
    content:
      'You agree to indemnify and hold harmless VYOMVANTA TRADERS, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.',
  },
  {
    title: 'Governing Law',
    content:
      'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.',
  },
  {
    title: 'Contact Information',
    content:
      'For questions about these Terms of Service, please contact us at legal@vyomvanta.com or write to: VYOMVANTA TRADERS, 123 Toy Street, Playtown, Mumbai 400001, India.',
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">📜</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
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
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                className="mb-8 bg-card rounded-2xl shadow-soft p-6"
              >
                <h2 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ================= AGREEMENT NOTICE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
          >
            <p className="text-foreground">
              By using VYOMVANTA TRADERS services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}