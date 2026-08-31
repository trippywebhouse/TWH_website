import "./HeroRight.css";

import heroComposition from"../../assets/hero/ hero-composition.png"
import orbit from "../../assets/hero/orbit.svg";
import platform from "../../assets/hero/platform.png"
import FloatingCards from "./FloatingCards";

export default function HeroRight() {
  return (
    <div className="hero-right">

    <div className="hero-glow"></div>

    <img
        src={orbit}
        className="hero-orbit"
        alt=""
    />

    <img
        src={platform}
        className="hero-platform"
        alt=""
    />

    <img
        src={heroComposition}
        className="hero-composition"
        alt=""
    />

    <FloatingCards />

</div>

    
  );
}