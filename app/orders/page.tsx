'use client';

import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Link from 'next/link';

const sampleOrder = {
  orderId: 'VYT-2024-123456',
  status: 'In Transit',
  estimatedDelivery: 'January 25, 2024',
  items: 2,
  timeline: [
    {
      status: 'Order Placed',
      date: 'Jan 20, 2024 - 10:30 AM',
      completed: true,
    },
    {
      status: 'Order Confirmed',
      date: 'Jan 20, 2024 - 10:35 AM',
      completed: true,
    },
    { status: 'Shipped', date: 'Jan 21, 2024 - 2:15 PM', completed: true },
    {
      status: 'In Transit',
      date: 'Jan 22, 2024 - 9:00 AM',
      completed: true,
      current: true,
    },
    {
      status: 'Out for Delivery',
      date: 'Expected Jan 25, 2024',
      completed: false,
    },
    { status: 'Delivered', date: '', completed: false },
  ],
};

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ============== HERO SECTION ================ */}
      <section className="bg-linear-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-5xl mb-4 block">📍</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your order ID to see real-time updates on your delivery
              status.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          {/* =============== SEARCH FORM ================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <form
              onSubmit={handleTrack}
              className="flex gap-4 flex-col sm:flex-row"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Order ID (e.g., VYT-2024-123456)"
                  className="pl-12 h-14 text-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 btn-primary font-semibold"
              >
                Track Order
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              You can find your order ID in the confirmation email or SMS.
            </p>
          </motion.div>

          {/* ============== RESULT ================= */}
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* ============== ORDER SUMMERY ============== */}
              <div className="bg-card rounded-2xl shadow-soft p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Order ID
                    </p>
                    <p className="font-display font-bold text-xl text-foreground">
                      {sampleOrder.orderId}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-medium text-primary">
                      {sampleOrder.status}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                      <Package className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="font-medium text-foreground">
                        {sampleOrder.items} items
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                      <Truck className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Carrier</p>
                      <p className="font-medium text-foreground">
                        Express Logistics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Expected By
                      </p>
                      <p className="font-medium text-foreground">
                        {sampleOrder.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============== TIMELINE ============== */}
              <div className="bg-card rounded-2xl shadow-soft p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-6">
                  Delivery Timeline
                </h3>
                <div className="space-y-0">
                  {sampleOrder.timeline.map((step, index) => (
                    <div key={step.status} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                            step.completed
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          } ${step.current ? 'ring-4 ring-primary/20' : ''}`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-current" />
                          )}
                        </div>
                        {index !== sampleOrder.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-12 ${
                              step.completed ? 'bg-primary' : 'bg-border'
                            }`}
                          />
                        )}
                      </div>
                      <div className="pb-8">
                        <p
                          className={`font-medium ${
                            step.current
                              ? 'text-primary'
                              : step.completed
                                ? 'text-foreground'
                                : 'text-muted-foreground'
                          }`}
                        >
                          {step.status}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {step.date || 'Pending'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================ HELP ================ */}
              <div className="bg-muted/50 rounded-2xl p-6 text-center">
                <p className="text-muted-foreground mb-4">
                  Need help with your order?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Contact Support →
                </Link>
              </div>
            </motion.div>
          )}

          {/* ================= INSTRUCTIONS IF NO RESULT ================== */}
          {!showResult && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-muted/50 mb-6">
                <Package className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Enter your order ID above
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                You can find your order ID in the confirmation email we sent you
                after placing your order.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}