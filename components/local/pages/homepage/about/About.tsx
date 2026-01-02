import Image from "next/image";
import aboutImage from "@/public/media/aboutSec.jpg"; // replace later
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import PrimaryButton from "@/components/local/buttons/PrimaryBtn";

export default function AboutSection() {
  return (
    <section className="w-full bg-(--color-corp-bg) py-20">
      <div className="mx-auto grid max-w-(--max-width) grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Left Content */}
        <div>
          <span className="mb-3 inline-block text-2xl font-semibold text-(--color-text-secondary)">
            Meet{" "}
            <span className="text-(--color-corp-blue)">
              3a Learning Solutions
            </span>
          </span>

          <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-4xl text-(--color-text-secondary)">
            Your Trusted Training & Consulting Partner <br />
            for Future-Ready Workforce Development
          </h2>

          <p className="mb-5 text-(--color-text-body)">
            In today’s fast-changing business environment, organizations need
            learning solutions that deliver real, measurable impact. At 3a
            Learning Solutions, we enable individuals and enterprises to build
            practical, job-ready capabilities aligned with evolving industry
            demands.
          </p>

          <p className="mb-5 text-(--color-text-body)">
            Founded in August 2014, we have grown into a trusted provider of
            technical and behavioral training and consulting services across
            India. As an ISO 9001:2015 certified organization, we are driven by
            quality, innovation, and consistent delivery excellence.
          </p>

          <p className="mb-8 text-(--color-text-body)">
            Our immersive digital learning experiences combine agile learning
            approaches, customized content, and modern technology to ensure
            clarity, engagement, and meaningful learning outcomes for every
            participant.
          </p>
          <div className="flex gap-2">
            <SecondaryButton text="Know More About Us" href="about" />
            <PrimaryButton text="Download Brochure" href="/" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-sm shadow-xl">
            <Image
              src={aboutImage}
              alt="Corporate training session at 3a Learning Solutions"
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
