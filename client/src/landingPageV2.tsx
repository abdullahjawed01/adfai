// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import HeroImage from "./assets/image.png";

// export default function AdfaiTechLanding() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden relative">
//       {/* NAVBAR */}
//       <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-4 flex items-center justify-between z-50 shadow-2xl">
//         <div className="font-extrabold text-black text-xl tracking-wide">ADFai Tech</div>
//         <nav className="space-x-7 text-sm font-semibold text-black">
//           <a href="#">Home</a>
//           <a href="#">Portfolio</a>
//           <a href="#">Services</a>
//           <a href="#">About Us</a>
//           <a href="#">Contact Us</a>
//         </nav>
//       </header>

//       {/* HERO */}
//       <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[6%] pt-40">
//         {/* IMAGE SIDE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="relative h-[80vh] hidden lg:block"
//         >
//           <img
//             src={HeroImage}
//             alt="ADFai Tech Hero"
//             className="h-full w-full object-contain"
//           />
//         </motion.div>

//         {/* TEXT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="z-10"
//         >
//           <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-wide">
//             <Typewriter
//               words={["UNITED OF WEB", "AI DRIVEN FUTURE", "DIGITAL EMPIRE"]}
//               loop={0}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={40}
//               delaySpeed={1800}
//             />
//           </h1>
//           <p className="mt-6 text-white/70 max-w-xl">
//             Building intelligent digital experiences with precision, motion, and modern architecture.
//           </p>
//         </motion.div>

//         {/* NETWORK GRID */}
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-size-[90px_90px]" />
//       </section>

//       {/* SERVICES */}
//       <section className="grid grid-cols-1 md:grid-cols-3 bg-[#0b0b0b] border-t border-white/10">
//         <motion.div whileHover={{ scale: 1.05 }} className="py-8 text-center font-bold tracking-wide">WEBSITE DEVELOPMENT</motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="py-8 text-center font-bold tracking-wide border-x border-white/10">ENTERPRISE SOLUTIONS</motion.div>
//         <motion.div whileHover={{ scale: 1.05 }} className="py-8 text-center font-bold tracking-wide">MARKETING & SEO</motion.div>
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "./assets/image.png"; // Replace with your hero image

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full">
      {/* GLASS NAVBAR */}
     {/* GLASS NAVBAR */}
<header className="fixed top-6 left-1/2 -translate-x-1/2 z-999 w-[92%] bg-white/2 backdrop-blur-lg rounded-2xl px-8 py-4 flex justify-between items-center shadow-xl">
  <div className="text-xl font-bold text-white">Adfai Tech </div>
  <nav className="space-x-6 text-white font-medium">
    <a href="#home" className="hover:text-gray-800 transition">Home</a>
    <a href="#portfolio" className="hover:text-gray-800 transition">Portfolio</a>
    <a href="#about" className="hover:text-gray-800 transition">About</a>
    <a href="#contact" className="hover:text-gray-800 transition">Contact</a>
  </nav>
</header>



      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 lg:px-20 bg-black"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 w-full lg:w-1/2 mt-32 lg:mt-0 space-y-6 text-white"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
            <Typewriter
              words={["Premier Digital Agency", "Creative & Tech-Driven", "Modern Web Experiences", "SEO & Marketing Experts"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </h1>
          <p className="text-lg max-w-lg drop-shadow-md">
            Crafting stunning digital experiences with world-class design and performance for brands that want to lead.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
