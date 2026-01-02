import { ArrowDown, ArrowUp, ArrowRight, ArrowLeft } from "lucide-react";

export default function UpskillingChallenges() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-(--max-width) px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-2xl font-semibold text-(--color-brand-primary)">
            3a Learning Solutions
          </p>
          <h2 className="text-3xl font-semibold text-(--color-text-secondary) md:text-4xl">
            Where Learning Gaps Converge
            <br />
            Scalable, Outcome-Focused Training Solutions
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-8">
          <ChallengeCard
            title="Enterprise-Level Challenges"
            items={[
              "Managing learning at scale",
              "Varying competency needs across teams",
              "Coordinating training across regions",
              "Fragmented learning governance",
              "Delays in updating learning material",
              "Conflicts in training schedules",
            ]}
          />

          <ArrowRight className="text-(--color-brand-primary)" />

          <HighlightedCard
            title="Shared Challenges"
            items={[
              "Operational inefficiencies in training delivery",
              "Limited availability of internal trainersh",
              "Dependency on multiple external partners",
              "Uneven learning quality and outcomes",
              "Slow adaptation to changing skill demands",
              "Regulatory and compliance alignment issues",
            ]}
          />

          <ArrowLeft className="text-(--color-brand-primary)" />

          <ChallengeCard
            title="Small & Medium Business Challenges"
            items={[
              "Reliance on third-party training providers",
              "Absence of structured learning systems",
              "Growth across new locations",
              "Difficulty tailoring training programs",
              "Cost and budget limitations",
              "Resistance to adopting new learning practices",
            ]}
          />
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          <ChallengeCard
            title="Enterprise-Level Challenges"
            items={[
              "Managing learning at scale",
              "Varying competency needs across teams",
              "Coordinating training across regions",
              "Fragmented learning governance",
              "Delays in updating learning material",
              "Conflicts in training schedules",
            ]}
          />

          <div className="flex justify-center">
            <ArrowDown className="text-(--color-brand-primary)" />
          </div>

          <HighlightedCard
            title="Shared Challenges"
            items={[
              "Operational inefficiencies in training delivery",
              "Limited availability of internal trainersh",
              "Dependency on multiple external partners",
              "Uneven learning quality and outcomes",
              "Slow adaptation to changing skill demands",
              "Regulatory and compliance alignment issues",
            ]}
          />

          <div className="flex justify-center">
            <ArrowUp className="text-(--color-brand-primary)" />
          </div>

          <ChallengeCard
            title="Small & Medium Business Challenges"
            items={[
              "Reliance on third-party training providers",
              "Absence of structured learning systems",
              "Growth across new locations",
              "Difficulty tailoring training programs",
              "Cost and budget limitations",
              "Resistance to adopting new learning practices",
            ]}
          />
        </div>

        {/* Footer text */}
        <p className="mt-10 text-center text-(--color-text-body) text-2xl">
          Skill development roadblocks restrict progress.
          <br />
          We help organizations turn these challenges into sustainable
          performance gains.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Cards ---------------- */

function ChallengeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-sm border border-blue-300 p-6">
      <h3 className="mb-6 text-center text-lg font-semibold text-(--color-text-secondary)">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="rounded-sm bg-blue-100 px-4 py-2 text-center text-sm text-(--color-text-body)"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HighlightedCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-sm border border-blue-400 bg-blue-50 p-6">
      <h3 className="mb-6 text-center text-lg font-semibold text-(--color-brand-primary)">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="rounded-sm bg-(--color-brand-primary) px-4 py-2 text-center text-sm text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
