import Image from "next/image";
import trainersImg from "@/public/media/trainers.jpg"; // demo image

export default function RightTrainers() {
  return (
    <section className="w-full bg-sky-100 py-20">
      <div className="mx-auto grid max-w-(--max-width) grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Left Content (wider) */}
        <div>
          <h2 className="mb-6 text-3xl font-semibold leading-tight text-(--color-text-secondary) md:text-4xl">
            We Connect You with the{" "}
            <span className="text-(--color-corp-blue)">
              Right Learning Experts
            </span>{" "}
            for Your Business Goals
          </h2>

          <p className="mb-6 max-w-2xl text-(--color-text) text-lg text-justify">
            The effectiveness of any training initiative depends on the people
            delivering it. At 3a Learning Solutions, we carefully align trainer
            expertise with your organizational context to ensure meaningful,
            outcome-driven learning experiences.
          </p>

          <p className="max-w-2xl text-(--color-text) text-lg text-justify">
            Our network includes industry practitioners and certified trainers
            with hands-on experience across technical, behavioral, and
            leadership domains. Whether you are scaling teams, enabling
            transformation, or addressing skill gaps, we ensure the right
            facilitator is available at the right time — across locations and
            learning formats.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={trainersImg}
              alt="Corporate training session"
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
