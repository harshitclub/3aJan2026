import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | 3a Learning Solutions",
  description:
    "Ready to join our team? Visit our Join Us page to submit your resume and kickstart your career with us.",
  alternates: {
    canonical: "https://3alearningsolutions.com/join-us",
  },

  openGraph: {
    title: "Join Us | 3a Learning Solutions",
    description:
      "Ready to join our team? Visit our Join Us page to submit your resume and kickstart your career with us.",
  },
};

export default function JoinUsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
