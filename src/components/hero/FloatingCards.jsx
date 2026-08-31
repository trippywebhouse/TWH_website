import "./FloatingCards.css";
import { services } from "./HomeData";

export default function FloatingCards() {
  return (
    <div className="floating-cards">

      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            className={`floating-card ${service.position}`}
          >
            <div className="floating-icon">
              <Icon size={20} />
            </div>

            <div className="floating-content">
              <h4>{service.title}</h4>
              <p>Professional Solution</p>
            </div>
          </div>
        );
      })}

    </div>
  );
}