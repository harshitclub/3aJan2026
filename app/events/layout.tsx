import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | 3a Learning Solutions",
  description:
    "Dive into the realm of training and consulting with our events images page. Get a glimpse of our impactful sessions and enrich your knowledge.",
  alternates: {
    canonical: "https://3alearningsolutions.com/events",
  },

  openGraph: {
    title: "Events | 3a Learning Solutions",
    description:
      "Dive into the realm of training and consulting with our events images page. Get a glimpse of our impactful sessions and enrich your knowledge.",
  },
};

export default function EventsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
