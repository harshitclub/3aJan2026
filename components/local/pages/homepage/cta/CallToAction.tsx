import SecondaryButton from "@/components/local/buttons/SecondaryBtn";

export default function CallToAction() {
  return (
    <section className="w-full bg-white mt-20 flex items-center justify-center">
      <div className="w-full max-w-(--max-width) px-6 py-20 bg-(--color-corp-blue) rounded text-center">
        <h2 className="text-3xl text-white font-bold mb-5">
          Elevate Your Workforce with 3a Learning Solutions
        </h2>
        <p className="text-2xl text-white mb-5">
          Partner with us for your Employee Skills Development Programs.
          <br />
          Let&apos;s tailor a path to success for your organizational talent
          <br />
          transformation.
        </p>
        <SecondaryButton href="contact" text="Enquire With Us" />
      </div>
    </section>
  );
}
