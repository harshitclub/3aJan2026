"use client";

import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import Link from "next/link";
import { useState } from "react";

// ==========================================
// 1. COURSE DATA (Easily swappable for other courses)
// ==========================================
const courseData = {
  title: "Microsoft Power BI Masterclass",
  category: "Data Analysis",
  duration: "3 Days",
  mode: "Self-paced / Instructor led",
  desc: "Master the entire Power BI ecosystem. Learn to extract and clean data with Power Query, build robust data models using Star Schemas, write powerful DAX measures, and design highly interactive, executive-level dashboards.",

  whatYouWillLearn: [
    "Connect to hundreds of data sources and clean data with Power Query.",
    "Build relational data models utilizing Star Schema best practices.",
    "Write advanced DAX formulas for complex business intelligence calculations.",
    "Design interactive, beautiful, and user-friendly dashboards.",
    "Publish reports to Power BI Service and configure automated refreshes.",
    "Implement Row-Level Security (RLS) to protect sensitive data.",
  ],

  highlights: [
    { text: "24 hours of interactive training" },
    { text: "Real-world dataset projects" },
    { text: "Industry-recognized certificate" },
  ],

  syllabus: [
    {
      title: "Module 1: Getting Started with Power BI",
      lectures: 4,
      time: "2h 15m",
      topics: [
        "The Power BI Ecosystem (Desktop, Service, Mobile)",
        "Navigating the Power BI Desktop Interface",
        "Connecting to basic data sources (Excel, CSV, Web)",
        "Understanding the Report, Data, and Model views",
      ],
    },
    {
      title: "Module 2: Data Transformation with Power Query",
      lectures: 8,
      time: "4h 30m",
      topics: [
        "Introduction to the Power Query Editor",
        "Profiling, cleaning, and shaping raw data",
        "Appending and Merging queries",
        "Unpivoting columns and handling null values",
        "Adding conditional and custom columns (Intro to M code)",
      ],
    },
    {
      title: "Module 3: Data Modeling & Relationships",
      lectures: 7,
      time: "4h 00m",
      topics: [
        "Database normalization and Star Schema design",
        "Creating active and inactive relationships",
        "Understanding filter direction and cross-filtering",
        "Creating a dedicated Date/Calendar Table",
        "Fact tables vs. Dimension tables",
      ],
    },
    {
      title: "Module 4: Data Analysis Expressions (DAX) Deep Dive",
      lectures: 12,
      time: "6h 45m",
      topics: [
        "Calculated Columns vs. Measures (Row context vs. Filter context)",
        "Implicit vs. Explicit measures",
        "Essential functions: SUM, AVERAGE, MIN, MAX, DIVIDE",
        "The most powerful function: CALCULATE",
        "Filter functions: FILTER, ALL, ALLEXCEPT",
        "Time Intelligence: YTD, QTD, MTD, SAMEPERIODLASTYEAR",
      ],
    },
    {
      title: "Module 5: Data Visualization & UI/UX",
      lectures: 9,
      time: "4h 30m",
      topics: [
        "Choosing the right visual for your data",
        "Formatting charts, matrices, and tables",
        "Using conditional formatting",
        "Creating custom tooltips and drill-through pages",
        "Using Bookmarks and Buttons for interactive navigation",
      ],
    },
    {
      title: "Module 6: Power BI Service & Administration",
      lectures: 5,
      time: "2h 00m",
      topics: [
        "Publishing reports to Power BI Service",
        "Creating and managing Workspaces",
        "Pinning visuals to Dashboards",
        "Configuring Data Gateways and Scheduled Refresh",
        "Implementing Row-Level Security (RLS)",
      ],
    },
  ],
};

// ==========================================
// 2. PAGE COMPONENT (Reusable UI Shell)
// ==========================================
export default function CourseDetailsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    mode: "",
  });

  const [openModule, setOpenModule] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("=== ENROLLMENT FORM SUBMITTED ===");
    console.log("Selected Course:", courseData.title);
    console.log("User Data:", formData);
    alert(
      "Request submitted successfully! Our team will contact you soon. (Check console for data)",
    );
    setFormData({ fullName: "", email: "", phone: "", mode: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-slate-900 text-white pt-12 pb-16 md:pt-16 lg:pb-32 px-4">
        <div className="mx-auto max-w-(--max-width)">
          <div className="max-w-3xl space-y-5 md:space-y-6">
            {/* Breadcrumbs - Added flex-wrap for mobile */}
            <div className="text-sm text-blue-200 font-medium flex items-center flex-wrap gap-2">
              <Link href="/courses" className="hover:text-white transition">
                Courses
              </Link>
              <span>›</span>
              <span className="text-gray-300">{courseData.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              {courseData.title}
            </h1>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
              {courseData.desc}
            </p>

            {/* Meta data - Enhanced gap and wrapping for smaller screens */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <span className="block font-medium">Duration:</span>
                <span>{courseData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="block font-medium">Mode:</span>
                <span>{courseData.mode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      {/* Changed to 1 column on mobile, 3 on lg screens */}
      <section className="mx-auto max-w-(--max-width) px-4 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8 lg:space-y-12 lg:-mt-12 z-10">
          {/* What You'll Learn Box - Adjust padding on mobile */}
          <div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 rounded-sm">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              What you&apos;ll learn
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {courseData.whatYouWillLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus / Course Content Accordion */}
          <div>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Course content
              </h2>
              <span className="text-xs md:text-sm text-gray-600 hidden sm:block">
                {courseData.syllabus.length} sections • {courseData.duration}
              </span>
            </div>

            <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
              {courseData.syllabus.map((module, i) => (
                <div key={i} className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full flex items-center justify-between bg-gray-50 px-4 md:px-6 py-4 hover:bg-gray-100 transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-3 font-semibold text-gray-800 text-left text-sm md:text-base">
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          openModule === i ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {module.title}
                    </div>
                    <div className="text-sm text-gray-500 whitespace-nowrap hidden md:block">
                      {module.lectures} lectures • {module.time}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {openModule === i && (
                    <div className="px-4 md:px-6 py-4 bg-white">
                      <ul className="space-y-3">
                        {module.topics.map((topic, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-gray-700"
                          >
                            <svg
                              className="w-4 h-4 text-gray-400 mt-0.5 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (Sticky Sidebar Form) ================= */}
        <div className="lg:col-span-1">
          {/* Removed strict sticky on mobile, only sticky on lg screens so mobile scrolling stays smooth */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-xl lg:-mt-24 lg:sticky lg:top-8 z-20 overflow-hidden">
            <div className="bg-blue-50 border-b border-blue-100 p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                Interested in this course?
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Fill out the form and we will contact you shortly.
              </p>
            </div>

            <div className="p-5 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Auto-selected course */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Selected Course
                  </label>
                  <input
                    type="text"
                    value={courseData.title}
                    readOnly
                    className="w-full border border-gray-200 bg-gray-50 text-gray-600 rounded-sm px-4 py-3 text-sm cursor-not-allowed outline-none font-medium"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  />
                </div>

                <div>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition bg-white text-gray-700"
                  >
                    <option value="" disabled>
                      Select Preferred Mode *
                    </option>
                    <option value="Online Instructor-led">
                      Online Instructor-led
                    </option>
                    <option value="Classroom Training">
                      Classroom Training
                    </option>
                    <option value="Self-paced">Self-paced Online</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-sm font-medium transition shadow-md mt-2 cursor-pointer"
                >
                  Request Information
                </button>
              </form>

              {/* Course Highlights */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                {courseData.highlights.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-green-600 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HELP CTA ================= */}
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
    </div>
  );
}
