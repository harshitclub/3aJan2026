import PrimaryButton from "@/components/local/buttons/PrimaryBtn";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
import CHeader from "@/components/local/pages/common/CHeader/CHeader";
import Image from "next/image";
import training from "@/public/media/corporate/training.jpg";

const techGroups = [
  {
    title: "Big Data, AI & Analytics",
    accent: "bg-sky-50 border-sky-200 text-sky-700",
    items: [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "Hadoop",
      "Spark",
      "Kafka",
      "Flink",
      "Hive",
      "Databricks",
      "Delta Lake",
    ],
    moreCount: 30,
  },
  {
    title: "Software Engineering & Full Stack",
    accent: "bg-blue-50 border-blue-200 text-blue-700",
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "Go",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Node.js",
      "Spring Boot",
      "Django",
      "Microservices",
      "REST & GraphQL",
    ],
    moreCount: 40,
  },
  {
    title: "Cloud, DevOps & Platform Engineering",
    accent: "bg-indigo-50 border-indigo-200 text-indigo-700",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DevOps",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "CI/CD Pipelines",
      "GitOps",
      "Cloud Security",
      "SRE",
    ],
    moreCount: 25,
  },
  {
    title: "Cybersecurity & IT Infrastructure",
    accent: "bg-red-50 border-red-200 text-red-700",
    items: [
      "Cyber Security Fundamentals",
      "Network Security",
      "Cloud Security",
      "Ethical Hacking",
      "SOC Operations",
      "IAM",
      "Zero Trust",
      "Linux Administration",
      "Windows Server",
      "VMware",
    ],
    moreCount: 18,
  },
  {
    title: "Data Platforms & Databases",
    accent: "bg-amber-50 border-amber-200 text-amber-700",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Neo4j",
      "Cassandra",
      "Snowflake",
      "BigQuery",
      "Redshift",
    ],
    moreCount: 20,
  },
  {
    title: "HR, Leadership & Behavioral Skills",
    accent: "bg-green-50 border-green-200 text-green-700",
    items: [
      "Leadership Development",
      "People Management",
      "HR Analytics",
      "Talent Management",
      "Employee Engagement",
      "Performance Management",
      "Diversity & Inclusion",
      "Change Management",
      "Coaching & Mentoring",
    ],
    moreCount: 22,
  },
  {
    title: "Process Excellence & Quality",
    accent: "bg-teal-50 border-teal-200 text-teal-700",
    items: [
      "Lean Six Sigma",
      "Kaizen",
      "Business Process Management",
      "Process Mapping",
      "Operational Excellence",
      "Quality Management Systems",
      "ISO Standards",
      "Risk Management",
    ],
    moreCount: 15,
  },
  {
    title: "CAD, Design & Engineering Tools",
    accent: "bg-rose-50 border-rose-200 text-rose-700",
    items: [
      "AutoCAD",
      "Revit Architecture",
      "Revit MEP",
      "3Ds Max",
      "SketchUp",
      "SolidWorks",
      "Fusion 360",
      "Blender",
      "Lumion",
    ],
    moreCount: 18,
  },
];

export default function Corporate() {
  return (
    <>
      <CHeader
        title="Corporate Training Solutions"
        subTitle="Build future-ready capabilities with customized, scalable, and results-driven learning programs."
      />
      <section className="w-full flex items-center justify-center py-15 flex-col">
        <div className="w-full max-w-(--max-width) rounded flex justify-between ">
          <div className="w-[48%]">
            <h2 className="text-3xl font-bold">
              Leverage Our Managed Training Services to{" "}
              <span className="text-(--color-corp-blue)">
                Build Workforce Capability
              </span>
            </h2>
          </div>
          <div className="w-[48%]">
            <p className="mb-5">
              Most organizations struggle to scale training without it
              fragmenting into scattered efforts that are hard to coordinate and
              costly to manage. The result is a system that stays busy but
              doesn’t always build capability where it matters most.
            </p>
            <p className="mb-5">
              Edstellar’s Managed Training Services solve this by bringing every
              aspect under one coordinated framework, ensuring learning works as
              a whole for your organization. We handle the full scope of
              training operations, from planning and vendor management to
              delivery, tracking and measurement, so programs run with
              consistency and quality.
            </p>
            <SecondaryButton href="contact" text="Talk to Us" />
          </div>
        </div>
        <div className="flex w-full max-w-(--max-width) gap-7 pt-15">
          <div className="w-1/3 border border-(--color-corp-blue) rounded flex flex-col items-center justify-center p-7">
            <h3 className="text-4xl mb-3 font-bold text-(--color-corp-blue)">
              10000+
            </h3>
            <p className="text-2xl text-(--color-text-body)">Best Courses</p>
          </div>
          <div className="w-1/3 border border-(--color-corp-blue) rounded flex flex-col items-center justify-center">
            <h3 className="text-4xl mb-3 font-bold text-(--color-corp-blue)">
              50,000+
            </h3>
            <p className="text-2xl text-(--color-text-body)">Professionals</p>
          </div>
          <div className="w-1/3 border border-(--color-corp-blue) rounded flex flex-col items-center justify-center">
            <h3 className="text-4xl mb-3 font-bold text-(--color-corp-blue)">
              100%
            </h3>
            <p className="text-2xl text-(--color-text-body)">Satisfaction</p>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center py-15 bg-[#2e324d]">
        <div className="flex w-full max-w-(--max-width) justify-between">
          <div className="w-[48%]">
            <h2 className="text-3xl text-white mb-5">
              Innovative Corporate Training Solutions
            </h2>
            <h3 className="text-2xl text-white mb-3">
              Empowering Workforces in Cutting-Edge Technologies
            </h3>
            <p className="mb-3 text-white">
              At 3a Learning Solutions, we have built a strong reputation as the
              leading provider of customized training solutions for
              corporations. With our extensive expertise and experience, we are
              trusted by organizations of all sizes to deliver trainings that
              effectively empower their employees.
            </p>
            <p className="mb-3 text-white">
              Our focus is on equipping your workforce with the most up-to-date
              knowledge and skills in rapidly evolving fields such as Cloud
              Computing, Artificial Intelligence & Machine Learning, Big Data,
              Blockchain, and more.
            </p>
            <p className="mb-5 text-white">
              With our innovative corporate training solutions, your company can
              stay ahead of the curve and thrive in today&apos;s competitive
              business landscape.
            </p>
            <PrimaryButton href="/" text="Browse Course Catalogue" />
          </div>
          <div className="w-[48%]">
            <Image src={training} alt="" className="rounded" />
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center py-15">
        <div className="w-full max-w-(--max-width) flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold mb-5">
            <span className="text-(--color-corp-blue)">
              A Diverse Training Portfolio
            </span>
            <br />
            Powering Our Managed Training Services
          </h2>
          <p className="text-center w-[70%]">
            With 3a&apos;s Managed Training Services, you gain more than
            delivery support, you access a catalog with commendable depth, and
            diversity and it grows with businesses. The diverse training
            programs ensure your workforce has the right learning opportunities
            to take on challenges with confidence, while your organization
            benefits from training that adapts to every need, scale, and
            business priority.
          </p>
          <div className="grid grid-cols-3 gap-4 my-10">
            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                IT & Technical
              </h3>
              <p className="text-(--color-text-body)">
                Equip teams with technology skills driving innovation,
                adaptability, and business growth.
              </p>
            </div>
            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                Management
              </h3>
              <p className="text-(--color-text-body)">
                Develop managers to lead transitions, improve efficiency, and
                navigate complexity.
              </p>
            </div>
            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                Behavioral
              </h3>
              <p className="text-(--color-text-body)">
                Strengthen communication, mindset, and interpersonal skills for
                workplace success.
              </p>
            </div>

            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                Leadership
              </h3>
              <p className="text-(--color-text-body)">
                ape leaders who inspire teams, guide change, and deliver
                consistent impact.
              </p>
            </div>
            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                Compliance
              </h3>
              <p className="text-(--color-text-body)">
                Enable regulatory readiness and risk awareness with focused
                compliance training.
              </p>
            </div>
            <div className="bg-[#eaf0fe] p-4 rounded">
              <h3 className="text-2xl text-(--color-text-secondary) font-bold mb-3">
                Social Impact
              </h3>
              <p className="text-(--color-text-body)">
                Foster inclusion, sustainability, and responsibility to create
                stronger organizations.
              </p>
            </div>
          </div>
          <p className="w-[60%] mb-5 text-center text-2xl">
            Capability grows when learning spans every domain your business
            touches.Partner with us and give your people the momentum to take on
            what’s next.
          </p>
          <SecondaryButton href="contact" text="Talk to Us" />
        </div>
      </section>
      <section className="w-full bg-[#eaf0fe] py-15 flex items-center justify-center">
        <div className="mx-auto max-w-(--max-width)">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Technologies Covered
            </h2>
            <p className="mt-3 text-slate-600">
              A comprehensive and continuously evolving training portfolio
              across technology, people, and process domains — designed for
              enterprise-scale capability building.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {techGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-sm border border-slate-200 bg-white p-5"
              >
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-sm border px-3 py-1 text-sm ${group.accent}`}
                    >
                      {item}
                    </span>
                  ))}

                  {group.moreCount && (
                    <span className="rounded-sm border border-dashed border-slate-300 px-3 py-1 text-sm text-slate-500">
                      + {group.moreCount} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex items-center justify-between rounded-sm bg-white px-6 py-5 shadow-sm">
            <p className="text-slate-700">
              Looking for a complete view of our programs and learning paths?
            </p>
            <SecondaryButton href="/" text="Program Catalogue" />
          </div>
        </div>
      </section>
    </>
  );
}
