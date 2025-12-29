import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual | 3a Learning Solutions",
  description:
    "Discover personalized training and consulting solutions on our company's individual training page. Enhance your skills and knowledge with our expert guidance.",
  alternates: {
    canonical: "https://3alearningsolutions.com/individual",
  },

  openGraph: {
    title: "Individual | 3a Learning Solutions",
    description:
      "Discover personalized training and consulting solutions on our company's individual training page. Enhance your skills and knowledge with our expert guidance.",
  },
};

export default function IndividualPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
