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

    
    </div>
  );
}