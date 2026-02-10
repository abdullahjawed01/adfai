import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingPageV4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#ecfeff] text-slate-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Adfai<span className="text-indigo-600">TECH</span>
          </span>
          <nav className="hidden md:flex gap-10 text-sm text-slate-600">
            <a className="hover:text-slate-900">Creators</a>
            <a className="hover:text-slate-900">Process</a>
            <a className="hover:text-slate-900">Pricing</a>
            <a className="hover:text-slate-900">Contact</a>
          </nav>
          <Button className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/40 via-transparent to-cyan-200/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI · Design · Engineering
            </div>
            <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Build Digital
              <br />
              Products That <span className="text-indigo-600">Scale</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-xl mb-10">
              We help ambitious teams launch and grow with intelligent strategy,
              refined design, and scalable technology.
            </p>
            <div className="flex gap-5">
              <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white">
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-slate-300"
              >
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <Card className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl">
              <CardContent className="p-12 space-y-8">
                {["Strategy-first execution", "Elegant UX systems", "AI-powered automation", "Enterprise-grade delivery"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-600 font-bold">✓</div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          <ServiceCard title="Product Strategy" text="Clear roadmaps aligned with business outcomes." />
          <ServiceCard title="UX & UI Design" text="Minimal, elegant, and conversion-focused interfaces." />
          <ServiceCard title="Engineering" text="Scalable systems built for performance and growth." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Product?</h2>
        <p className="text-white/80 mb-10">Let’s design and build something remarkable together.</p>
        <Button size="lg" className="rounded-full bg-white text-indigo-700 hover:bg-slate-100">
          Book a Call
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-slate-500 bg-white">
        © {new Date().getFullYear()} Adfai TECH. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="rounded-3xl bg-white border border-slate-200 hover:shadow-xl transition">
      <CardContent className="p-10">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
}
