import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | 3a Learning Solutions",
  description:
    "Explore our comprehensive programs list page for top-notch training and consulting services. Find the perfect program to enhance your skills and knowledge.",
  alternates: {
    canonical: "https://3alearningsolutions.com/programs",
  },

  openGraph: {
    title: "Programs | 3a Learning Solutions",
    description:
      "Explore our comprehensive programs list page for top-notch training and consulting services. Find the perfect program to enhance your skills and knowledge.",
  },
};

export default function ProgramsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
