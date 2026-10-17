import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/hero/Hero';

export default function Home() {
  const faqs = [
    {
      question: "What services does Trippy Web House offer?",
      answer: "Trippy Web House specializes in custom web application development, AI business automations, Meta Ads management, digital marketing, and brand identity design."
    },
    {
      question: "Where is Trippy Web House located?",
      answer: "Trippy Web House is a registered MSME digital solutions agency based in Tamil Nadu, India, serving clients across Chennai, Coimbatore, Bengaluru, and globally."
    },
    {
      question: "How long does it take to build a custom website with Trippy Web House?",
      answer: "A custom web application or business portal typically takes between 1 to 3 weeks depending on the technical requirements and integrations."
    }
  ];

  return (
    <main className="home">
      {/* Dynamic SEO & AEO Meta Tags + Schema Markup */}
      <Helmet>
        {/* Primary Page Title & Description */}
        <title>Trippy Web House | Web Development, Digital Marketing & AI Setup Studio</title>
        <meta 
          name="description" 
          content="Trippy Web House builds modern high-performance websites, custom AI business automations, e-commerce stores, and digital marketing strategies." 
        />
        <meta 
          name="keywords" 
          content="Trippy Web House, Web Development Agency, AI Setup for Business, E-Commerce Development, Digital Marketing Tamil Nadu, Custom Web Apps" 
        />

        {/* Self-Referencing Canonical URL */}
        <link rel="canonical" href="https://www.trippywebhouse.com/" />

        {/* Social Media Link Preview Tags */}
        <meta property="og:title" content="Trippy Web House | Build. Brand. Grow." />
        <meta 
          property="og:description" 
          content="Custom Web Development, AI Business Automations, and Digital Marketing solutions tailored for modern brands." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trippywebhouse.com/" />
        <meta property="og:image" content="https://www.trippywebhouse.com/logo-transparent.png" />

        {/* Organization Schema for Google & AI Engine Optimization (AEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Trippy Web House",
            "logo": "https://www.trippywebhouse.com/favicon-192x192.png",
            "image": "https://www.trippywebhouse.com/favicon-192x192.png",
            "@id": "https://www.trippywebhouse.com/#organization",
            "url": "https://www.trippywebhouse.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/trippy_web.house"
            ],
            "knowsAbout": [
              "Web Development",
              "React and Next.js Applications",
              "AI Business Automation",
              "Digital Marketing",
              "Meta Ads Management",
              "Brand Identity Design"
            ]
          })}
        </script>

        {/* FAQ Schema for AI Search Engines (Perplexity, Gemini, ChatGPT) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <Hero />
    </main>
  );
}