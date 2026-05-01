export type CourseCategory = "Data Analysis" | "Soft Skills";
export type CourseMode = "Self-paced / Instructor led";

export interface Course {
  readonly id: number;
  readonly name: "Course";
  readonly title: string;
  readonly desc: string;
  readonly duration: string;
  readonly mode: CourseMode;
  readonly category: CourseCategory;
  readonly slug: string;
  readonly link: `/${string}`;
}

export const coursesList: readonly Course[] = [
  {
    id: 1,
    name: "Course",
    title: "Microsoft Power Bi Masterclass",
    desc: "Import, clean, and shape diverse data sources for insightful Power BI reports. Unleash the power of interactive dashboards and reports to communicate data stories effectively.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Data Analysis",
    slug: "power-bi",
    link: "/courses/power-bi",
  },
  {
    id: 2,
    name: "Course",
    title: "Microsoft Advanced Excel Masterclass",
    desc: "Unleash the power of Excel with complex calculations, data analysis tools, and automation techniques. Transform raw data into compelling visuals and interactive insights for informed decision-making.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Data Analysis",
    slug: "advanced-excel",
    link: "/courses/advanced-excel",
  },
  {
    id: 3,
    name: "Course",
    title: "Tableau Masterclass",
    desc: "Unlock the full potential of data visualization with Tableau. Collaborate seamlessly with stakeholders, sharing insights to drive informed decision-making across your organization.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Data Analysis",
    slug: "tableau",
    link: "/courses/tableau",
  },
  {
    id: 4,
    name: "Course",
    title: "Microsoft Power Platform Masterclass",
    desc: "Develop dynamic solutions and apps tailored to your business needs. Collaborate effortlessly, sharing insights and driving informed decisions organization-wide.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Data Analysis",
    slug: "power-platform",
    link: "/courses/power-platform",
  },
  {
    id: 5,
    name: "Course",
    title: "Interpersonal Skills Masterclass",
    desc: "Cultivate meaningful connections and effective communication. Collaborate seamlessly, fostering a positive and productive work environment.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Soft Skills",
    slug: "interpersonal-skills",
    link: "/courses/interpersonal-skills",
  },
  {
    id: 6,
    name: "Course",
    title: "Communication Skills Masterclass",
    desc: "Craft compelling messages and engage with clarity and impact. Foster seamless collaboration, empowering effective communication across all channels.",
    duration: "3 Days",
    mode: "Self-paced / Instructor led",
    category: "Soft Skills",
    slug: "communication-skills",
    link: "/courses/communication-skills",
  },
] as const;
