'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const shippingMethods = [
  {
    icon: Truck,
    name: 'Standard Delivery',
    time: '5-7 Business Days',
    price: '₹99',
    freeAbove: '₹999',
    description: 'Reliable delivery across India with tracking',
  },
  {
    icon: Clock,
    name: 'Express Delivery',
    time: '2-3 Business Days',
    price: '₹249',
    freeAbove: '₹2,999',
    description: 'Priority shipping for faster delivery',
  },
  {
    icon: MapPin,
    name: 'Same Day Delivery',
    time: 'Within 24 Hours',
    price: '₹499',
    freeAbove: '₹4,999',
    description: 'Available in select metro cities only',
  },
];

const deliveryZones = [
  {
    zone: 'Metro Cities',
    cities: 'Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad',
    standardDays: '3-5',
    expressDays: '1-2',
  },
  {
    zone: 'Tier 2 Cities',
    cities: 'Pune, Ahmedabad, Jaipur, Lucknow, and 50+ more',
    standardDays: '5-7',
    expressDays: '2-3',
  },
  {
    zone: 'Rest of India',
    cities: 'All other serviceable pin codes',
    standardDays: '7-10',
    expressDays: '4-5',
  },
];

const features = [
  { icon: CheckCircle2, text: 'Real-time order tracking via SMS & Email' },
  { icon: CheckCircle2, text: 'Secure packaging for fragile items' },
  { icon: CheckCircle2, text: 'Insurance coverage for premium items' },
  { icon: CheckCircle2, text: 'Contactless delivery available' },
  { icon: CheckCircle2, text: 'Delivery to 25,000+ pin codes' },
  { icon: CheckCircle2, text: 'Multiple delivery attempt policy' },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      {/* ==================== HERO SECTION ====================== */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">🚚</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Shipping Information
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery across India. Choose the shipping method
              that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-5xl">
          {/* ================== SHIPPING METHODS ================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Shipping Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow text-center"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {method.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {method.time}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-foreground">
                      {method.price}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Free above {method.freeAbove}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* =================== DELIVERY ZONES ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Delivery Zones & Timeline
            </h2>
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left py-4 px-6 font-display font-bold">
                        Zone
                      </th>
                      <th className="text-left py-4 px-6 font-display font-bold">
                        Coverage
                      </th>
                      <th className="text-center py-4 px-6 font-display font-bold">
                        Standard
                      </th>
                      <th className="text-center py-4 px-6 font-display font-bold">
                        Express
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryZones.map((zone, index) => (
                      <tr
                        key={zone.zone}
                        className={
                          index !== deliveryZones.length - 1
                            ? 'border-b border-border'
                            : ''
                        }
                      >
                        <td className="py-4 px-6 font-medium text-foreground">
                          {zone.zone}
                        </td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">
                          {zone.cities}
                        </td>
                        <td className="py-4 px-6 text-center text-muted-foreground">
                          {zone.standardDays} days
                        </td>
                        <td className="py-4 px-6 text-center text-primary font-medium">
                          {zone.expressDays} days
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* ==================== FEATURES ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Shipping Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-muted/50 rounded-xl p-4"
                >
                  <feature.icon className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm text-foreground">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================== IMP NOTES ================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  Important Notes
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • Delivery times may vary during peak seasons (festivals,
                    sales) and unforeseen circumstances.
                  </li>
                  <li>
                    • COD is available for orders up to ₹10,000. Additional ₹49
                    COD handling fee applies.
                  </li>
                  <li>
                    • For remote areas, additional 2-3 days may be required.
                  </li>
                  <li>
                    • Large or bulky items may have different shipping charges.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}