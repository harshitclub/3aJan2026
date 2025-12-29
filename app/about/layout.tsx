import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 3a Learning Solutions",
  description:
    "Visit our About page to learn more about our company's training and consulting offerings. Discover how we can tailor our services to meet your specific needs.",
  alternates: {
    canonical: "https://3alearningsolutions.com/about",
  },

  openGraph: {
    title: "About | 3a Learning Solutions",
    description:
      "Visit our About page to learn more about our company's training and consulting offerings. Discover how we can tailor our services to meet your specific needs.",
  },
};

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
