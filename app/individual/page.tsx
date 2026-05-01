import Link from "next/link";
import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import Image from "next/image";
import elearning from "@/public/media/elearning/elearning.jpg";

export default function Individual() {
  return (
    <>
      {/* Header */}
      <CHeader
        title="Individual Learning"
        subTitle="Build industry-ready skills with flexible, outcome-driven learning programs."
      />

      {/* Intro */}
      <section className="mx-auto max-w-(--max-width) py-15">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Learning That Moves You Forward
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At 3a Learning Solutions, we help individuals transition from
            learning to real-world impact. Our programs are designed for
            students, fresh graduates, and working professionals who want to
            upskill, reskill, or accelerate their careers.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            From foundational concepts to advanced, industry-aligned training,
            we focus on practical learning, expert guidance, and measurable
            growth.
          </p>
        </div>
      </section>

      {/* What You Can Learn */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-(--max-width) py-15">
          <h2 className="text-2xl font-semibold text-gray-900">
            What You Can Learn
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Column 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Technology & Digital Skills
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Full Stack Development</li>
                <li>• Frontend & Backend Engineering</li>
                <li>• Data Analytics & Power BI</li>
                <li>• Cloud Computing & DevOps</li>
                <li>• AI, ML & Data Science</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Business & Professional Skills
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Communication Skills</li>
                <li>• Leadership Development</li>
                <li>• Project & Process Management</li>
                <li>• HR Analytics</li>
                <li>• Workplace Effectiveness</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Emerging & Specialized Domains
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Cybersecurity</li>
                <li>• IoT & Edge Computing</li>
                <li>• CAD & Interior Design Tools</li>
                <li>• Agile & Quality Frameworks</li>
                <li> confirming more</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            And many more programs tailored to evolving industry demands.
          </p>
        </div>
      </section>

      {/* How Learning Works */}
      <section className="mx-auto max-w-(--max-width) py-15">
        <h2 className="text-2xl font-semibold text-gray-900">
          How Our Individual Programs Work
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Learn from Experts",
              desc: "Industry professionals with real-world experience guide every program.",
            },
            {
              title: "Hands-on Practice",
              desc: "Case studies, exercises, and practical assignments reinforce learning.",
            },
            {
              title: "Flexible Formats",
              desc: "Instructor-led, self-paced, and blended learning options.",
            },
            {
              title: "Career Outcomes",
              desc: "Skills designed to translate directly into professional performance.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 bg-white p-5"
            >
              <h3 className="font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-(--max-width) py-15 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Why Learners Choose 3a
            </h2>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Industry-aligned curriculum</li>
              <li>• Practical, hands-on learning</li>
              <li>• Expert instructors & mentors</li>
              <li>• Flexible schedules</li>
              <li>• Continuous learning support</li>
            </ul>
          </div>

          <div className="rounded-lg bg-blue-50 p-6 text-gray-800 flex items-center justify-center">
            <Image src={elearning} alt="" className="w-100 rounded" />
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="mx-auto max-w-(--max-width) py-15">
        <h2 className="text-2xl font-semibold text-gray-900">
          Who Should Enroll
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "College & university students",
            "Fresh graduates",
            "Working professionals",
            "Career switchers",
            "Entrepreneurs & independent learners",
          ].map((item, idx) => (
            <span
              key={idx}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 mb-4">
        <div className="mx-auto max-w-(--max-width) py-15 text-center text-white">
          <h2 className="text-2xl font-semibold">
            Start Your Learning Journey Today
          </h2>
          <p className="mt-3 text-blue-100">
            Explore programs designed to help you grow, adapt, and succeed in a
            competitive world.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <SecondaryButton text="Explore Courses" href="/courses" />
            <Link
              href="/contact"
              className="rounded bg-white px-5 py-4 text-sm font-medium text-blue-600 hover:bg-blue-50"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
