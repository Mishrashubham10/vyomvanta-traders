'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      {/* ===== Glass Backdrop ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="card-toy backdrop-blur-md bg-background/95">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-display">
              Welcome Back 👋
            </CardTitle>
            <CardDescription>
              Login to continue shopping amazing toys
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* ===== FORM ===== */}
            <form className="space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot */}
              <div className="text-right text-sm">
                <Link
                  href="/forgot-password"
                  className="text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button type="submit" size="lg" className="w-full btn-primary">
                Login
              </Button>
            </form>

            {/* ===== DIVIDER ===== */}
            <div className="relative text-center">
              <span className="bg-background px-3 text-sm text-muted-foreground">
                OR
              </span>
              <div className="absolute inset-0 top-1/2 border-t -z-10" />
            </div>

            {/* ===== SOCIAL LOGIN (PLACEHOLDER) ===== */}
            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full" disabled>
                Continue with Google
              </Button>
              <Button variant="outline" size="lg" className="w-full" disabled>
                Continue with GitHub
              </Button>
            </div>

            {/* ===== REGISTER ===== */}
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}