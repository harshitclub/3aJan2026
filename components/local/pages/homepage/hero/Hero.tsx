import PrimaryButton from "@/components/local/buttons/PrimaryBtn";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/0-KGR_eDHs8?autoplay=1&mute=1&loop=1&controls=0&playlist=0-KGR_eDHs8&modestbranding=1&showinfo=0"
          allow="autoplay; fullscreen"
          title="3a Learning Solutions Hero Video"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-(--color-brand-primary)/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-(--max-width) items-center px-6">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-(--color-brand-accent)">
            Corporate • Individual • Digital Learning
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Instructor-Led Training that{" "}
            <span className="text-(--color-brand-accent)">
              Drives Real Business Outcomes
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/90">
            We partner with organizations to upskill people, strengthen
            processes, and enable measurable performance improvement across
            industries.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton text="Talk to Our Experts" href="/contact" />
            <SecondaryButton text="Explore Programs" href="/programs" />
          </div>
        </div>
      </div>
    </section>
  );
}
