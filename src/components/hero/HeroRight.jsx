import React from "react";
import { motion } from "framer-motion";

import heroMascot from "../../assets/hero-mascot-laptop.png";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center h-[660px] w-full">
      {/* Background Soft Glow */}
      <div className="absolute w-[580px] h-[580px] bg-blue-400/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Outer Orbital Circle Border */}
      <div className="absolute w-[580px] h-[580px] rounded-full border border-dashed border-blue-200 pointer-events-none" />

      {/* Central Mascot Image - Enlarged scale */}
      <div className="relative z-10 w-full max-w-[650px] flex justify-center items-center scale-125 sm:scale-135">
        <img
          src={heroMascot}
          alt="Trippy Web House Showcase"
          className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_25px_40px_rgba(0,102,255,0.22)] pointer-events-none"
        />
      </div>

      {/* 1. Web Development - Top Center */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          🌐
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">Web</h4>
          <p className="text-[10px] text-gray-500 font-medium">Development</p>
        </div>
      </motion.div>

      {/* 2. Digital Creations - Top Left */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-16 -left-12 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          📱
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">Digital</h4>
          <p className="text-[10px] text-gray-500 font-medium">Creations</p>
        </div>
      </motion.div>

      {/* 3. Branding - Bottom Left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 -left-10 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          💡
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">Branding &</h4>
          <p className="text-[10px] text-gray-500 font-medium">Identity Design</p>
        </div>
      </motion.div>

      {/* 4. Digital Marketing - Top Right */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-10 -right-14 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          🎯
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">Digital</h4>
          <p className="text-[10px] text-gray-500 font-medium">Marketing</p>
        </div>
      </motion.div>

      {/* 5. Social Media Management - Middle Right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-1/2 -right-24 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          📢
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">Social Media</h4>
          <p className="text-[10px] text-gray-500 font-medium">Management</p>
        </div>
      </motion.div>

      {/* 6. AI Setup for Business - Bottom Right */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-4 -right-16 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-xl shrink-0 shadow-inner">
          🤖
        </div>
        <div className="text-left">
          <h4 className="text-xs font-bold text-gray-900">AI Setup</h4>
          <p className="text-[10px] text-gray-500 font-medium">For Business</p>
        </div>
      </motion.div>
    </div>
  );
}