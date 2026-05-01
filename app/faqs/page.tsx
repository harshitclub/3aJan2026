"use client";

import { useState } from "react";
import CHeader from "@/components/local/pages/common/CHeader/CHeader";

const faqs = [
  {
    q: "What is 3a Learning Solutions?",
    a: "3a Learning Solutions is a professional training and learning solutions provider offering corporate training, individual learning programs, e-learning solutions, and customized enterprise upskilling initiatives across industries.",
  },
  {
    q: "Do you provide corporate training programs?",
    a: "Yes. We specialize in customized corporate training programs designed to align with organizational goals, workforce skill gaps, and business outcomes across technology, management, HR, compliance, and leadership domains.",
  },
  {
    q: "What learning modes do you offer?",
    a: "We offer instructor-led training, virtual live sessions, self-paced e-learning, blended learning models, and on-site corporate workshops depending on client requirements.",
  },
  {
    q: "Are your courses suitable for individuals as well?",
    a: "Absolutely. Along with corporate programs, we offer individual learning paths for students, working professionals, and career switchers looking to upgrade skills or gain certifications.",
  },
  {
    q: "Do you provide customized e-learning solutions?",
    a: "Yes. We design custom e-learning solutions including instructional design, content development, LMS integration, assessments, and analytics tailored to enterprise needs.",
  },
  {
    q: "Which technologies and domains do you cover?",
    a: "Our offerings span Software Development, Cloud & DevOps, Data Analytics, AI & ML, HR & Behavioral Skills, Project Management, Networking, CAD & Design, and emerging technologies.",
  },
  {
    q: "Are certifications included in your programs?",
    a: "Some programs include certifications or certification preparation. Certification availability depends on the course and governing body. Details are shared during enrollment or consultation.",
  },
  {
    q: "How experienced are your trainers?",
    a: "Our trainers are industry professionals with hands-on experience, strong instructional expertise, and a proven track record of delivering impactful learning outcomes.",
  },
  {
    q: "Do you offer training calendars for open programs?",
    a: "Yes. Our Program Calendar lists upcoming open-house training programs with schedules, duration, pricing, and delivery mode.",
  },
  {
    q: "Can organizations request custom schedules?",
    a: "Yes. Corporate clients can request custom schedules, batch sizes, delivery formats, and content customization to suit internal timelines and priorities.",
  },
  {
    q: "Do you support learning analytics and reporting?",
    a: "Yes. For corporate and e-learning programs, we provide reporting, learner progress tracking, assessments, and performance insights to measure training effectiveness.",
  },
  {
    q: "Is your training content aligned with industry standards?",
    a: "All training content is aligned with current industry standards, best practices, and real-world use cases to ensure relevance and applicability.",
  },
  {
    q: "Do you provide post-training support?",
    a: "Yes. Depending on the program, we offer post-training support including doubt resolution sessions, learning resources, and guidance for practical implementation.",
  },
  {
    q: "How can I enroll or enquire about a program?",
    a: "You can enquire through the Contact page, Program Calendar, Courses page, or by clicking the ‘Enquire Now’ buttons across the website.",
  },
  {
    q: "How do I contact 3a Learning Solutions?",
    a: "You can reach us via the Contact page on our website. Our team will connect with you to understand your requirements and guide you further.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <CHeader
        title="Frequently Asked Questions"
        subTitle="Everything you need to know about our training programs, services, and learning solutions."
      />

      <section className="mx-auto max-w-(--max-width) px-4 pt-15 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Got Questions? We’ve Got Answers
            </h2>
            <p className="mt-3 text-gray-600">
              Find clear answers to common questions about our corporate,
              individual, and e-learning offerings.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded border border-gray-200 bg-white transition"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    <span className="ml-4 text-xl text-blue-600">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-200 px-5 py-4 text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded bg-blue-50 p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our team is happy to help you choose the right learning solution.
            </p>

            <div className="mt-4">
              <a
                href="/contact"
                className="inline-block rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
