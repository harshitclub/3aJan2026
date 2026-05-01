import Link from "next/link";
import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import { coursesList } from "./coursesList";

export default function Courses() {
  return (
    <>
      <CHeader
        title="Courses Catalogue"
        subTitle="Explore industry-relevant programs designed for individuals and organizations"
      />

      {/* Search */}
      <section className="mx-auto max-w-(--max-width) pt-10">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for a course"
            className="w-full rounded border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-600"
          />
          <button className="rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-(--max-width) pt-10 pb-15">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coursesList.map((course) => (
            <div
              key={course.id}
              className="group relative flex h-full flex-col overflow-hidden rounded border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-linear-to-r from-blue-600 to-sky-500" />

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <span className="mb-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-blue-700 transition">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {course.desc}
                </p>

                {/* Meta */}
                <div className="mt-5 flex items-center gap-6 text-sm text-gray-700">
                  <div>
                    <span className="block text-xs text-gray-500">
                      Duration
                    </span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500">Mode</span>
                    <span className="font-medium">{course.mode}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 border-t border-gray-200 bg-gray-50 p-4">
                <Link
                  href="/contact"
                  className="flex-1 rounded border border-gray-300 bg-white py-2 text-center text-sm font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-100"
                >
                  Enquire
                </Link>

                <Link
                  href={course.link}
                  className="flex-1 rounded bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="mx-auto max-w-(--max-width) pb-5">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg bg-blue-50 p-8 sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Not sure which course is right for you?
            </h3>
            <p className="mt-2 text-sm text-gray-700 max-w-xl">
              Speak with our training experts to identify the right program for
              your learning goals and business needs.
            </p>
          </div>
          <SecondaryButton text="Talk to an Expert" href="/contact" />
        </div>
      </section>
    </>
  );
}
