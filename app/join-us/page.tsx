import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import ClientSection from "@/components/local/pages/homepage/clients/Clients";

export default function JoinUs() {
  return (
    <>
      <CHeader
        title="Join Us"
        subTitle="Explore opportunities to shape the future of corporate learning."
      />
      <section className="w-full py-15">
        <div className="mx-auto max-w-(--max-width)">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold text-(--color-heading)">
                Work With 3a Learning Solutions
              </h2>

              <p className="mt-4 text-(--color-text) leading-relaxed">
                We’re always looking for passionate trainers, consultants,
                content creators, and professionals who believe in empowering
                people through learning. Share your details and we’ll get in
                touch.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-(--color-text)">
                <li>• Corporate Trainers & Facilitators</li>
                <li>• Subject Matter Experts</li>
                <li>• Web Developers (Frontend, Backend, Full Stack)</li>
                <li>• UI/UX & Graphic Designers</li>
                <li>• Instructional Designers & Content Developers</li>
                <li>• Sales & Business Development Professionals</li>
                <li>• Strategic Partnerships & Alliances</li>
              </ul>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded border border-gray-200 bg-white p-8 shadow-sm">
              <form className="space-y-6">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* PHONE + ROLE */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Area of Interest *
                    </label>
                    <select className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none">
                      <option>Select an option</option>
                      <option>Corporate Trainer</option>
                      <option>Technical Trainer</option>
                      <option>Consultant</option>
                      <option>Content Developer</option>
                      <option>Business Development</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full Stack Developer</option>
                      <option>Graphic Designer</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Brief Introduction
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your experience and expertise"
                    className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {/* RESUME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mt-2 block w-full text-sm text-gray-600"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-(--color-brand-accent) px-6 py-3 text-sm font-medium text-white transition hover:bg-green-600 cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ClientSection />
    </>
  );
}
