import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import AnimatedModel from "./AnimatedModel"

export default function NeopotterLanding() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative">
        <motion.h1
          style={{ y: yText }}
          className="text-6xl md:text-7xl font-bold tracking-tight text-center"
        >
          NEOPOTTER
          <span className="block text-xl mt-4 text-gray-400">
            Make it matter
          </span>
          {/* <p className="mt-3 text-sm text-gray-500">
            Engineering-grade 3D printed parts
          </p> */}

        </motion.h1>
      </section>

      {/* 3D Section */}
      <section className="h-screen grid md:grid-cols-2 gap-8 px-10 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Built for Engineers</h2>
          <p className="text-gray-400 leading-relaxed">
            Functional parts. Tight tolerances. No gimmicks.
            We design and manufacture components that actually work in the real world.
          </p>
        </div>
        <section className="h-screen" title = "3d Printable Radial Pneumatic Engine (https://skfb.ly/6QZpx) by Slava Z. is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).">
          <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />

            <AnimatedModel />

            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate={false}
            />
          </Canvas>
        </section>
      </section>



      {/* Capabilities */}
      <section className="py-32 px-10 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-semibold mb-12 text-center">Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Prototyping", "Low-volume Manufacturing", "Custom Engineering Parts"].map(
            (item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="p-8 border border-gray-700 rounded-2xl bg-black"
              >
                <h3 className="text-xl font-medium mb-2">{item}</h3>
                <p className="text-gray-400 text-sm">
                  Designed for accuracy, repeatability, and mechanical reliability.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Print a Real Part?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Call us or message on WhatsApp with your requirement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Button */}
          <a
            href="tel:+919778303038"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            📞 Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919778303038"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Neopotter · Engineering-first 3D Printing
      </footer>
    </div>
  );
}
