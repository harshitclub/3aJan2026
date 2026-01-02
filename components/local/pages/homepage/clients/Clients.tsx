import Image from "next/image";
import { clientLogos } from "@/data/clientLogos";
import "./styles.css";

export default function ClientSection() {
  return (
    <section className="bg-(--color-brand-accent) py-16 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Globally Trusted by Top Clients
        </h2>
      </div>

      {/* Scrolling wrapper */}
      <div className="relative overflow-hidden">
        <div className="scroll-track">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div className="logo-card" key={index}>
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
