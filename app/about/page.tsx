import Image from "next/image";
import "./style.css";
import aboutHero from "@/public/media/about/aboutHero.jpg";
import p from "@/public/media/about/P.png";
import ClientSection from "@/components/local/pages/homepage/clients/Clients";
import RightTrainers from "@/components/local/pages/homepage/rightTrainers/RightTrainers";
import Score from "@/components/local/pages/homepage/score/Score";
import CallToAction from "@/components/local/pages/homepage/cta/CallToAction";

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="aboutPageHeader w-full flex justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          About Us
        </h1>
      </section>

      {/* About Intro */}
      <section className="w-full flex justify-center items-center py-15">
        <div className="flex w-full max-w-(--max-width) justify-between flex-col gap-10 lg:flex-row px-4">
          {/* Left Content */}
          <div className="aboutHLeft text-justify w-full lg:w-[48%]">
            <h2 className="text-2xl md:text-3xl font-bold text-(--color-text-secondary) mb-5">
              Empowering Learning Through{" "}
              <span className="text-(--color-brand-accent)">Innovation</span>
            </h2>

            <p className="mb-3">
              Welcome to 3A Learning Solutions India Pvt Ltd, your premier
              destination for comprehensive training solutions tailored to meet
              the evolving demands of modern industries.
            </p>

            <p className="mb-3">
              Established in the heart of New Delhi in 2014, we pride ourselves
              on being at the forefront of delivering cutting-edge training in
              Technology, Behavioral, and Process-oriented disciplines across
              diverse sectors including ITES, BFSI, Real Estate, Manufacturing,
              Automobile, Telecom, Pharma, Retail, and beyond.
            </p>

            <p className="mb-3">
              3A Learning Solutions India Pvt Ltd is your one-stop shop for
              customized training solutions designed for today&apos;s dynamic
              industries. We specialize in providing cutting-edge training
              across three core areas: Technology, Behavioral Skills, and
              Process Optimization.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              Our Commitment to Excellence
            </h3>

            <p>
              Since our inception in August 2014, we have cemented our position
              as the foremost provider of technical and behavioral training and
              consulting services in India. As an ISO 9001:2015 certified
              company, we uphold a steadfast commitment to quality, innovation,
              and excellence in everything we do.
            </p>
          </div>

          {/* Right Image */}
          <div className="aboutHRight w-full lg:w-[48%] flex justify-center">
            <Image
              src={aboutHero}
              alt="About 3a Learning Solutions"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </section>

      {/* 3 Ps Section */}
      <section className="3Ps w-full flex items-center justify-center py-15">
        <div className="flex items-center justify-between w-full max-w-(--max-width) gap-10 flex-col md:flex-row px-4">
          {/* Product */}
          <div className="bg-sky-100 w-full md:w-1/3 p-5 flex items-center justify-center flex-col text-center rounded">
            <Image src={p} alt="" className="w-30 -mt-16 md:-mt-20 mb-10" />
            <h3 className="text-2xl md:text-3xl font-semibold text-(--color-text-secondary) mb-5">
              Product
            </h3>
            <p className="mb-10">
              Leading the way in tech solutions encompassing React.js,
              Angular.js, Node.js, Big Data, Cloud, Cybersecurity, and more.
            </p>
          </div>

          {/* People */}
          <div className="bg-sky-100 w-full md:w-1/3 p-5 flex items-center justify-center flex-col text-center rounded">
            <Image src={p} alt="" className="w-30 -mt-16 md:-mt-20 mb-10" />
            <h3 className="text-2xl md:text-3xl font-semibold text-(--color-text-secondary) mb-5">
              People
            </h3>
            <p className="mb-10">
              Empowering teams through Leadership, Communication, Team Building,
              Diversity, Coaching, and Remote Management.
            </p>
          </div>

          {/* Process */}
          <div className="bg-sky-100 w-full md:w-1/3 p-5 flex items-center justify-center flex-col text-center rounded">
            <Image src={p} alt="" className="w-30 -mt-16 md:-mt-20 mb-10" />
            <h3 className="text-2xl md:text-3xl font-semibold text-(--color-text-secondary) mb-5">
              Process
            </h3>
            <p className="mb-10">
              Optimizing operations with expertise in Lean Six Sigma, Kaizen,
              BPM, Project Management, Quality Control, Lean Manufacturing, and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Already Responsive Sections */}
      <RightTrainers />
      <Score />
      <ClientSection />
      <CallToAction />
    </>
  );
}
