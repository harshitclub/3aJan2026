export default function Score() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-(--max-width) px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold text-(--color-heading) md:text-4xl">
            <span className="text-(--color-corp-blue)">
              Delivering Measurable Impact
            </span>{" "}
            Through Enterprise Learning
          </h2>
        </div>

        {/* Connector + Cards Wrapper */}
        <div className="relative mx-auto max-w-5xl rounded-sm border border-blue-200 bg-linear-to-b from-blue-50 to-white px-10 py-16">
          {/* Top connector dot */}
          <div className="absolute left-1/2 -top-3.5 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-(--color-corp-blue) bg-white" />

          {/* Pillar Headings */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Pillar title="Learning Excellence" />
            <Pillar title="Professional Reach" />
            <Pillar title="Client Confidence" />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Column 1 */}
            <MetricCard value="10,000+" label="Best-in-Class Courses" />
            <MetricCard
              value="Industry-led"
              label="Practical & Job-Ready Learning"
            />
            <MetricCard
              value="Continuously Updated"
              label="Future-Relevant Curriculum"
            />

            {/* Column 2 */}
            <MetricCard value="50,000+" label="Professionals Trained" />
            <MetricCard value="Pan-India" label="Corporate & Academic Reach" />
            <MetricCard
              value="Multi-Format"
              label="Classroom, Virtual & Blended"
            />

            {/* Column 3 */}
            <MetricCard value="100%" label="Client Satisfaction" />
            <MetricCard value="Long-term" label="Enterprise Partnerships" />
            <MetricCard
              value="Outcome-focused"
              label="Training That Delivers Results"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub Components ---------- */

function Pillar({ title }: { title: string }) {
  return (
    <div className="rounded-sm bg-(--color-corp-blue) px-4 py-3 text-center font-medium text-white">
      {title}
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-sm border border-blue-200 bg-white px-6 py-6 text-center shadow-sm">
      <div className="mb-2 text-2xl font-bold text-(--color-corp-blue)">
        {value}
      </div>
      <p className="text-sm text-(--color-text)">{label}</p>
    </div>
  );
}
