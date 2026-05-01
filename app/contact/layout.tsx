import "./style.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | 3a Learning Solutions",
  description:
    "Find all the contact information you need on our website's contact page. Reach out to us easily and conveniently for any inquiries or assistance you may require.",
  alternates: {
    canonical: "https://3alearningsolutions.com/contact",
  },

  openGraph: {
    title: "Contact | 3a Learning Solutions",
    description:
      "Find all the contact information you need on our website's contact page. Reach out to us easily and conveniently for any inquiries or assistance you may require.",
  },
};

export default function ContactPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="contactPage py-20">{children}</main>;
}
