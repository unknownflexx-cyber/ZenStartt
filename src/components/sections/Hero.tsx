import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";


const Hero = () => {
  const splineRef = useRef<HTMLDivElement>(null);




  useEffect(() => {
    // Ensure Spline viewer is loaded
    const loadSpline = async () => {
      try {
        // Check if spline-viewer is already defined
        if (!customElements.get('spline-viewer')) {
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'https://unpkg.com/@splinetool/viewer@1.10.53/build/spline-viewer.js';
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
      } catch (error) {
        console.log('Spline loading error:', error);
      }
    };

    loadSpline();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div 
        ref={splineRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <spline-viewer 
          url="https://prod.spline.design/TkgRSM5nmVR50RMH/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            display: 'block'
          }}
        />
      </div>


{/* Hero Content Overlay */}
<div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-80 pb-36">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <motion.button
      className="px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 font-semibold text-lg rounded-lg hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-lg"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      Launch Your Mission Now
    </motion.button>
  </motion.div>
</div>



      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;