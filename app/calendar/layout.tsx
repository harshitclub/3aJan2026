import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar | 3a Learning Solutions",
  description:
    "Discover our comprehensive program calendar for training and consulting services on our company's website. Stay updated with our upcoming events and workshops.",
  alternates: {
    canonical: "https://3alearningsolutions.com/calendar",
  },

  openGraph: {
    title: "Calendar | 3a Learning Solutions",
    description:
      "Discover our comprehensive program calendar for training and consulting services on our company's website. Stay updated with our upcoming events and workshops.",
  },
};

export default function CalendarPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
