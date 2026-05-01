import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";

const offerings = [
  {
    title: "Customized E-Learning",
    desc: "Tailored learning solutions designed around your business goals, workforce roles, and industry requirements.",
  },
  {
    title: "Micro Learning",
    desc: "Short, focused modules designed to improve engagement, retention, and on-the-job application.",
  },
  {
    title: "Blended Learning",
    desc: "A strategic mix of instructor-led sessions, virtual classrooms, and self-paced digital learning.",
  },
  {
    title: "Localization & Translation",
    desc: "Multi-language eLearning delivery to support globally distributed teams across regions.",
  },
  {
    title: "Assessment & Certification",
    desc: "Interactive assessments, evaluations, and certification frameworks aligned with learning objectives.",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous review processes to ensure accuracy, consistency, and instructional effectiveness.",
  },
];

const processSteps = [
  "Learning Needs Analysis",
  "Content Strategy & Instructional Design",
  "Custom eLearning Development",
  "LMS Integration & Deployment",
  "Assessment, Tracking & Reporting",
  "Continuous Improvement & Optimization",
];

const differentiators = [
  "Business-aligned learning strategy",
  "Industry-specific instructional design expertise",
  "Scalable solutions for global teams",
  "Accessibility & compliance-ready content",
  "Measurable learning outcomes",
  "Seamless LMS and platform integration",
  "Engaging, learner-centric experiences",
];

export default function ELearning() {
  return (
    <>
      <CHeader
        title="E-Learning"
        subTitle="Structured, flexible learning powered by industry expertise."
      />

      {/* Overview */}
      <section className="py-15">
        <div className="mx-auto max-w-(--max-width)">
          <div>
            {/* Eyebrow */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              E-Learning Solutions
            </p>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Customized E-Learning Solutions for Modern Enterprises
            </h2>

            {/* Divider */}
            <div className="mt-4 h-1 w-14 rounded bg-green-500" />

            {/* Content */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              At 3a Learning Solutions, we design and deliver custom eLearning
              programs that help organizations build capability, drive
              performance, and scale learning across teams. Our solutions align
              learning objectives directly with measurable business outcomes.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From instructional design and content development to deployment,
              assessment, and continuous improvement, we partner closely with
              organizations to ensure learning initiatives are effective,
              engaging, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-gray-50 py-15">
        <div className="mx-auto max-w-(--max-width)">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Our E-Learning Offerings
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="mx-auto max-w-(--max-width) py-15">
        <h2 className="text-3xl font-semibold text-gray-900">
          Our E-Learning Delivery Approach
        </h2>

        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
          We follow a structured, outcome-driven approach to ensure learning
          initiatives are aligned with organizational priorities and deliver
          consistent results.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-md border border-gray-200 bg-white p-4"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
              <p className="text-sm text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-gray-50 py-15">
        <div className="mx-auto max-w-(--max-width)">
          <h2 className="text-3xl font-semibold text-gray-900">
            What Sets Us Apart
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                <p className="text-gray-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-15 mb-4">
        <div className="mx-auto max-w-(--max-width) text-center text-white">
          <h2 className="text-3xl font-semibold">
            Build High-Impact Digital Learning Experiences
          </h2>

          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Partner with 3a Learning Solutions to design scalable, engaging, and
            results-driven eLearning solutions tailored to your workforce.
          </p>

          <div className="mt-6 flex justify-center">
            <SecondaryButton text="Request a Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
