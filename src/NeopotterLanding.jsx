import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useRef, useEffect } from "react"
import { useState } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import AnimatedModel from "./AnimatedModel"


//3d Scene Component
function Scene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <Canvas
      // class="w-full h-full"
      style={{ pointerEvents: isMobile ? "none" : "auto" }}
      camera={{ position: [5, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />

      <AnimatedModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={!isMobile}
      />
    </Canvas>
  )
}


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
      <section className="min-h-screen md:grid md:grid-cols-[1fr_3fr] gap-8 md:px-0 items-center">
        <div class="px-6 md:px-10">
          <h2 className="text-4xl font-semibold mb-4">Built for Engineers</h2>
          <p className="text-gray-400 leading-relaxed">
            Functional parts. Tight tolerances. No gimmicks. <br></br>
            We design and manufacture components that actually work in the real world.
          </p>

          <ul className="text-gray-400 leading-relaxed space-y-2 pt-6">
            <li>• Materials: PLA, PETG, TPU, ABS</li>
            <li>• Typical tolerance: ±0.2 mm (design dependent)</li>
            <li>• Layer heights: 0.2–0.28 mm</li>
            <li>• Build volume: up to 220 × 220 × 250 mm</li>
            <li>• Optimized infill, walls, and orientation</li>
          </ul>

          <p className="pt-16 text-lg text-white font-medium">
            Pricing starts from <span className="text-green-400">₹150</span>
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Final price depends on size, material, and print time.
          </p>

        </div>
        <section className="w-full h-[100vh] md:h-full py-6" title="3d Printable Radial Pneumatic Engine (https://skfb.ly/6QZpx) by Slava Z. is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).">
          <Scene />
        </section>
      </section>



      {/* Capabilities */}
      <section className="py-5 px-10 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-semibold mb-16 text-center">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Send Your Design",
              desc: "Share your STL or STEP file via WhatsApp or call."
            },
            {
              step: "02",
              title: "Review & Quote",
              desc: "We check printability, material, and confirm cost."
            },
            {
              step: "03",
              title: "Print & Inspect",
              desc: "Printed with correct orientation and checked for defects."
            },
            {
              step: "04",
              title: "Deliver",
              desc: "Delivered locally or shipped, ready to use."
            }
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 border border-gray-700 rounded-2xl bg-black"
            >
              <div className="text-gray-500 text-sm mb-2">
                {item.step}
              </div>
              <h3 className="text-xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Print a Real Part?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Call us, WhatsApp us, or just get a quick quotation.
        </p>

        <div className="max-w-xl mx-auto">
          {/* Top buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href="tel:+919778303038"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919778303038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Quotation button */}
          <a
            href="https://wa.me/919778303038?text=Hi,%20I’d%20like%20a%20quotation%20for%203D%20printing."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-4 rounded-xl border border-gray-600 text-white font-medium hover:bg-gray-900 transition"
          >
            Get Free Quotation
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          By contacting us, you agree to our{" "}
          <a
            href="/terms"
            className="underline hover:text-gray-300 transition"
          >
            Terms & Services
          </a>.
        </p>

      </section>




      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Neopotter · Engineering-first 3D Printing
      </footer>
    </div>
  );
}
