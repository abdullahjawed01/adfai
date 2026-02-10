import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity
} from "framer-motion";
import { useRef } from "react";
import DarkVeil from "./components/DarkVeil";


export default function LandingPageV4() {
  const heroRef = useRef(null);

  /* ---------------- SCROLL → VEIL MOTION ---------------- */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const velocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 40,
    damping: 20
  });

  const veilWarp = useTransform(
    smoothVelocity,
    [-0.5, 0, 0.5],
    [0.08, 0.12, 0.18]
  );

  const veilSpeed = useTransform(
    smoothVelocity,
    [-0.5, 0, 0.5],
    [0.25, 0.35, 0.5]
  );

  /* ---------------- HERO CONTENT MOTION ---------------- */

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  /* ---------------- POINTER PARALLAX ---------------- */

  const mouseX = useSpring(0, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 40, damping: 20 });

  return (
    <div className="bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* NAV */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 z-50 w-full bg-neutral-950/70 backdrop-blur border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between">
          <span className="font-semibold tracking-tight">
            Adfai Tech
          </span>
          <div className="hidden md:flex gap-8 text-sm text-neutral-400">
            {["Services", "Clients", "Work", "Resources", "Contact"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const { innerWidth, innerHeight } = window;
          mouseX.set((e.clientX / innerWidth - 0.5) * 12);
          mouseY.set((e.clientY / innerHeight - 0.5) * 12);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
      >
        {/* DARK VEIL */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute inset-0 z-0 pointer-events-none mix-blend-soft-light"
        >
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.16}   // calm, low-frequency
            speed={veilSpeed}
            warpAmount={veilWarp}
            scanlineIntensity={0}
            scanlineFrequency={0}
          />
        </motion.div>

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-neutral-950/80" />

        {/* CONTENT */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 max-w-4xl px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-semibold leading-tight"
          >
            Product marketing that
            <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              actually moves revenue
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg text-neutral-300"
          >
            Positioning, GTM, and execution for serious B2B SaaS teams.
          </motion.p>

          <MagneticButton />
        </motion.div>
      </section>

      {/* SERVICES */}
      <Section title="Our Services">
        {[
          ["Agency", "End-to-end product marketing & execution."],
          ["Marketplace", "Elite B2B SaaS operators, on demand."],
          ["Playbooks", "Battle-tested GTM systems."]
        ].map(([title, desc]) => (
          <Card key={title} title={title} desc={desc} />
        ))}
      </Section>

      {/* CLIENTS */}
      <Section title="Trusted By">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-neutral-400 text-sm">
          {["Looker", "Twilio", "LinkedIn", "ServiceNow", "Mercury"].map(c => (
            <motion.div
              key={c}
              whileHover={{ scale: 1.05 }}
              className="opacity-70 hover:opacity-100 transition"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-24 text-center border-t border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-medium"
        >
          Ready to build something real?
        </motion.p>
        <p className="mt-4 text-neutral-400">
          hello@olivinemarketing.com
        </p>
      </footer>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }) {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-16"
        >
          {title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">{children}</div>
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-neutral-900 border border-white/10 rounded-2xl p-8 text-left"
    >
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-3 text-neutral-400">{desc}</p>
    </motion.div>
  );
}

function MagneticButton() {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="mt-12 inline-block rounded-full bg-white px-10 py-4 text-neutral-950 font-medium"
    >
      Start a conversation
    </motion.button>
  );
}
