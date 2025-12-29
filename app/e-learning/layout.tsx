import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-learning | Upskill Your Workforce with 3a",
  description:
    "Engage your team with 3a's award-winning eLearning! High-quality, customizable courses.",
  alternates: {
    canonical: "https://3alearningsolutions.com/e-learning",
  },

  openGraph: {
    title: "E-learning | Upskill Your Workforce with 3a",
    description:
      "Engage your team with 3a's award-winning eLearning! High-quality, customizable courses.",
  },
};

export default function ELearningPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
