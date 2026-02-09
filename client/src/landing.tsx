import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

/* =========================
   3D LOGO (NO IMAGE)
========================= */
function Logo3D() {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group scale={1.15}>

        {/* Growth Curve */}
        <mesh>
          <tubeGeometry
            args={[
              new THREE.CatmullRomCurve3([
                new THREE.Vector3(-1.3, -0.4, 0),
                new THREE.Vector3(-0.5, 0.25, 0),
                new THREE.Vector3(0.3, -0.1, 0),
                new THREE.Vector3(1.2, 0.65, 0),
              ]),
              64,
              0.045,
              12,
              false,
            ]}
          />
          <meshPhysicalMaterial
            color="#3b82f6"
            transmission={0.85}
            roughness={0.12}
            thickness={0.4}
            clearcoat={1}
            clearcoatRoughness={0}
            emissive="#3b82f6"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Arrow Head */}
        <mesh position={[1.32, 0.72, 0]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.15, 0.32, 32]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#60a5fa"
            emissiveIntensity={0.45}
          />
        </mesh>

        {/* Nodes */}
        {[
          [-1.3, -0.4, 0],
          [-0.5, 0.25, 0],
          [0.3, -0.1, 0],
          [1.2, 0.65, 0],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.085, 32, 32]} />
            <meshStandardMaterial
              color="#93c5fd"
              emissive="#93c5fd"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* =========================
   PAGE
========================= */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0b1220] via-[#0f1b2d] to-black text-white overflow-hidden">

      {/* GLASS NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-wide">
            Adfai<span className="text-blue-400">TECH</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white transition" href="#">Home</a>
            <a className="hover:text-white transition" href="#">About</a>

            <div className="relative group">
              <button className="hover:text-white transition">Services</button>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-white/10">Marketing</li>
                  <li className="px-4 py-2 hover:bg-white/10">E-commerce</li>
                  <li className="px-4 py-2 hover:bg-white/10">Web Development</li>
                </ul>
              </div>
            </div>

            <a className="hover:text-white transition" href="#">Contact</a>
          </nav>

          <Button className="rounded-full bg-blue-500 hover:bg-blue-400">
            Get Started
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Amplifying <span className="text-blue-400">Digital</span><br />
              Growth with Elegance
            </h1>

            <p className="text-white/70 text-lg max-w-xl mb-10">
              We design and build premium digital experiences using AI,
              performance strategy, and cutting-edge design.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-400">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-black">
                View Services
              </Button>
            </div>
          </motion.div>

          {/* 3D LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[420px] w-full"
          >
            <div className="absolute inset-0 bg-blue-500/15 blur-3xl rounded-full" />

            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[4, 4, 4]} intensity={1.4} />
              <Environment preset="city" />
              <Logo3D />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.4}
              />
            </Canvas>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-10">
          <GlassCard
            title="Marketing"
            text="Data-driven campaigns that convert attention into revenue."
          />
          <GlassCard
            title="E-commerce"
            text="High-performance online stores built for scale."
          />
          <GlassCard
            title="Web Development"
            text="Elegant, fast, and future-proof digital platforms."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-white/50 text-sm">
        © {new Date().getFullYear()} Adfai TECH · Amplifying Digital Growth
      </footer>
    </div>
  );
}

/* =========================
   GLASS CARD
========================= */
function GlassCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition">
      <CardContent className="p-10">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-white/70">{text}</p>
      </CardContent>
    </Card>
  );
}
