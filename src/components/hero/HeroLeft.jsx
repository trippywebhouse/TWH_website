import "./HeroLeft.css";
import { ArrowRight, Check } from "lucide-react";
import { features } from "./HomeData";

export default function HeroLeft() {
  return (
    <div className="hero-left">

      {/* Badge */}

      <div className="hero-badge">
        <span className="badge-dot"></span>
        <span>WELCOME TO TRIPPY WEB HOUSE</span>
      </div>

      {/* Heading */}

      <h1 className="hero-title">
        Build Websites
        <span> That Grow Businesses.</span>
      </h1>

      {/* Description */}

      <p className="hero-description">
        We create premium websites, AI-powered branding, digital marketing,
        and business solutions that help companies build their online
        presence and accelerate growth.
      </p>

      {/* Features */}

      <div className="hero-features">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="feature-item" key={feature.id}>

              <div className="feature-icon">
                <Icon size={18} />
              </div>

              <span>{feature.title}</span>

            </div>
          );
        })}

      </div>

      {/* Buttons */}

      <div className="hero-buttons">

        <button className="primary-btn">

          Start Your Project

          <ArrowRight size={18} />

        </button>

        <button className="secondary-btn">

          <Check size={18} />

          View Portfolio

        </button>

      </div>

    </div>
  );
}