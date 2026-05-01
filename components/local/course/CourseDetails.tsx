import Link from "next/link";

type Course = {
  title: string;
  desc: string;
  duration: string;
  mode: string;
  category: string;
};

export default function CourseDetails({ course }: { course: Course }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-(--max-width) px-4 py-12">
        {/* ================= HERO ================= */}
        <div className="rounded-lg border border-gray-200 p-6 md:p-10 bg-gray-50">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {course.category}
          </span>

          <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">
            {course.title}
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl">{course.desc}</p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-700">
            <p>
              <span className="font-medium">Duration:</span> {course.duration}
            </p>
            <p>
              <span className="font-medium">Mode:</span> {course.mode}
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Enquire Now
            </Link>

            <Link
              href="/calendar"
              className="rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              View Schedule
            </Link>
          </div>
        </div>

        {/* ================= OVERVIEW ================= */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Course Overview
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            This course is designed to provide practical knowledge and hands-on
            experience. Learners will gain industry-relevant skills that can be
            applied directly in real-world scenarios.
          </p>
        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Key Highlights
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Hands-on Practical Training",
              "Industry Expert Trainers",
              "Real-world Case Studies",
              "Certification Support",
              "Flexible Learning Modes",
              "Project-based Learning",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-md border border-gray-200 p-4 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= CURRICULUM ================= */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">Curriculum</h2>

          <div className="mt-4 space-y-3">
            {[
              "Introduction & Fundamentals",
              "Core Concepts & Tools",
              "Advanced Techniques",
              "Real-world Projects",
              "Best Practices & Optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-md border border-gray-200 p-4 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= WHO SHOULD JOIN ================= */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            Who Should Attend
          </h2>

          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>• Students and fresh graduates</li>
            <li>• Working professionals</li>
            <li>• Career switchers</li>
            <li>• Business analysts & developers</li>
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 rounded-lg bg-blue-50 p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Ready to Get Started?
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Talk to our experts and find the right program for you.
          </p>

          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
