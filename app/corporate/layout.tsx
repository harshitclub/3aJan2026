import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate | Upskill Your Workforce with 3a",
  description:
    "Enhance your team's skills with our comprehensive corporate training programs. Boost productivity and success with tailored courses. Visit our website now!",
  alternates: {
    canonical: "https://3alearningsolutions.com/corporate",
  },

  openGraph: {
    title: "Corporate | Upskill Your Workforce with 3a",
    description:
      "Enhance your team's skills with our comprehensive corporate training programs. Boost productivity and success with tailored courses. Visit our website now!",
  },
};

export default function CorporatePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
