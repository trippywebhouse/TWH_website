import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from "../components/hero/Hero";
//import Clients from "../components/hero/Clients";
//import Stats from "../components/hero/Stats";
//import CTA from "../components/hero/CTA";

export default function Home() {
  return (
    <main className="home">
      {/* Dynamic SEO Meta Tags using React Helmet */}
      <Helmet>
        {/* Primary Page Title & Meta Description */}
        <title>Trippy Web House | Web Development,Digital Marketing Agency,AI Setup & Growth Studio</title>
        <meta 
          name="description" 
          content="Trippy Web House builds modern high-performance websites, custom AI business automations, e-commerce stores, and digital marketing strategies." 
        />
        <meta 
          name="keywords" 
          content="Trippy Web House, Web Development Agency, AI Setup for Business, E-Commerce Development, Digital Marketing Tamil Nadu, Custom Web Apps" 
        />

        {/* Social Media Link Preview Tags (WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:title" content="Trippy Web House | Build. Brand. Grow." />
        <meta 
          property="og:description" 
          content="Custom Web Development, AI Business Automations, and Digital Marketing solutions tailored for modern brands." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trippywebhouse.vercel.app/" />
      </Helmet>

      <Hero />
    </main>
  );
}