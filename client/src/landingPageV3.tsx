import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import HeroImage from "./assets/image.png"; // Replace with your high-res hero image
import ProjectImage from "./assets/image.png"; // Placeholder for project images

export default function StudioDialectPremium() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="font-sans text-white bg-black overflow-x-hidden">
      {/* GLASS NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[92%] bg-white/10 backdrop-blur-lg rounded-3xl px-8 py-4 flex justify-between items-center shadow-xl transition-all hover:shadow-2xl">
        <div className="font-bold text-lg tracking-wide hover:scale-105 transition-all">Adfai Tech</div>
        <nav className="space-x-6 font-medium text-white/90">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-20 w-full lg:w-1/2 mt-32 lg:mt-0 space-y-6 text-left"
        >
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight uppercase drop-shadow-2xl">
            <Typewriter
              words={["The New", "& The Next", "Experiential Web"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-lg text-white/70 max-w-2xl drop-shadow-md">
            We craft immersive digital experiences that combine creativity, technology, and storytelling for brands that want to stand out.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3 mt-6 font-semibold hover:bg-white/30 transition"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        ref={ref1}
        className="py-32 px-8 lg:px-20"
      >
        <motion.div
          animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Selected Work</h2>
          <p className="text-white/70 mt-4">Projects we’re proud of delivering.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1,2,3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${ProjectImage})` }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project Title {p}</h3>
                <p className="text-white/60 mt-2">Short description about this project and what we achieved.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        ref={ref2}
        className="py-32 px-8 lg:px-20 bg-black"
      >
        <motion.div
          animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-white/70">
            We are a creative technology studio specializing in immersive, interactive web experiences. Our approach blends innovation, design, and storytelling to create experiences that leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        ref={ref3}
        className="py-32 px-8 lg:px-20"
      >
        <motion.div
          animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-white/70">Reach out and let’s discuss your next project.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-3 font-semibold hover:bg-white/30 transition"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Studio Dialect Premium
      </footer>
    </div>
  );
}
