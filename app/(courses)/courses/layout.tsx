import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses | 3a Learning Solutions",
  description:
    "Explore our courses page and find the perfect learning experience for you. Choose from a variety of skills and start your educational journey now.",

  openGraph: {
    title: "Courses | 3a Learning Solutions",
    description:
      "Explore our courses page and find the perfect learning experience for you. Choose from a variety of skills and start your educational journey now.",
  },
  alternates: {
    canonical: "https://3alearningsolutions.com/courses",
  },
};

export default function CoursesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
