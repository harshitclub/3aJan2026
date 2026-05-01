import SecondaryButton from "@/components/local/buttons/SecondaryBtn";

export default function ThreePsSection() {
  return (
    <section className="w-full bg-(--color-corp-bg) py-16">
      <div className="mx-auto max-w-(--max-width) px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-(--color-text-secondary)">
            We Specialize in the{" "}
            <span className="text-(--color-corp-blue)">3 P’s</span>
          </h2>
          <p className="max-w-3xl text-lg text-(--color-text-body)">
            A structured capability framework enabling organizations to build
            technology excellence, people effectiveness, and process maturity.
          </p>
        </div>

        {/* Framework */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* PRODUCT */}
          <div className="rounded-sm bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-(--color-heading)">
                Product
              </h3>
              <span className="text-2xl font-semibold text-(--color-corp-blue)">
                01
              </span>
            </div>

            <p className="mb-4 text-md text-(--color-text)">
              Advanced technology and digital skill development for modern
              product-driven organizations.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-md text-(--color-text)">
              <span>Data Science</span>
              <span>AI & ML</span>
              <span>React / Angular</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Java / Spring</span>
              <span>Cloud Computing</span>
              <span>Cyber Security</span>
              <span>DevOps</span>
              <span>Docker & Kubernetes</span>
              <span>Microservices</span>
              <span>Big Data</span>
            </div>
          </div>

          {/* PEOPLE */}
          <div className="rounded-sm bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-(--color-heading)">
                People
              </h3>
              <span className="text-2xl font-semibold text-(--color-corp-blue)">
                02
              </span>
            </div>

            <p className="mb-4 text-md text-(--color-text)">
              Human capability development focused on leadership, collaboration,
              and organizational effectiveness.
            </p>

            <div className="grid grid-cols-1 gap-y-2 text-md text-(--color-text)">
              <span>Leadership Development</span>
              <span>Communication Skills</span>
              <span>Team Building</span>
              <span>Diversity & Inclusion</span>
              <span>Coaching & Mentoring</span>
              <span>Managing Remote Teams</span>
              <span>Change Management</span>
              <span>Performance Management</span>
            </div>
          </div>

          {/* PROCESS */}
          <div className="rounded-sm bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-(--color-heading)">
                Process
              </h3>
              <span className="text-2xl font-semibold text-(--color-corp-blue)">
                03
              </span>
            </div>

            <p className="mb-4 text-md text-(--color-text)">
              Operational excellence frameworks that improve efficiency,
              quality, and execution discipline.
            </p>

            <div className="grid grid-cols-1 gap-y-2 text-md text-(--color-text)">
              <span>Lean Six Sigma</span>
              <span>Kaizen</span>
              <span>Process Mapping</span>
              <span>Business Process Management</span>
              <span>Project Management</span>
              <span>Quality Management Systems</span>
              <span>Statistical Process Control</span>
              <span>Lean Manufacturing</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-start">
          <SecondaryButton text="Program Catalogue" href="programs" />
        </div>
      </div>
    </section>
  );
}
