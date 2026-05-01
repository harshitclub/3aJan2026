import { Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import logo from "@/public/media/3alogo.png";
import Link from "next/link";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="footerHeader grid mx-auto max-w-(--max-width) grid-cols-[1.6fr_1fr_1fr_1fr_1fr] items-start gap-10 py-10">
        {/* Column 1 — Logo */}
        <div>
          <Image
            src={logo}
            alt="3a Learning Solutions"
            className="w-auto h-20"
          />
        </div>

        {/* Column 2 — ABOVE Courses */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            For Business Queries
          </h3>
          <Link href="/" className="text-gray-700">
            info@3alearningsolutions.com
          </Link>
        </div>

        {/* Column 3 — ABOVE Important Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Reach Us at</h3>
          <div className="flex flex-col gap-1 text-gray-700">
            <span className="block">IND +91 6364833830</span>
          </div>
        </div>

        {/* Column 4 — empty (aligns with Quality & Compliance) */}
        <div />

        {/* Column 5 — empty (aligns with Company) */}
        <div />
      </div>
      <div className="footerContainer flex mx-auto items-start justify-between pt-10 pb-10 max-w-(--max-width) border-t border-b border-gray-400">
        <div className="footerTab flex-[1.6]">
          <p className="text-gray-700 text-justify">
            3a Learning Solutions is a trusted provider of instructor-led
            corporate training and consulting services. We deliver customized
            programs across Technical, Behavioral, Management, Compliance,
            Leadership, and Social Impact domains.
          </p>
          <h3 className="font-bold text-lg text-gray-800 mt-5 mb-2">
            Follow Us:
          </h3>
          <div className="flex text-gray-700 gap-1">
            <Link href="/">
              <Facebook className="bg-gray-300" />
            </Link>
            <Link href="/">
              <Linkedin className="bg-gray-300" />
            </Link>
          </div>
        </div>
        <div className="footerTab flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Courses</h3>
          <ul className="text-gray-700 flex flex-col gap-2">
            <li>
              <Link href="/">Power Bi</Link>
            </li>
            <li>
              <Link href="/">Advanced Excel</Link>
            </li>
            <li>
              <Link href="/">Tableau</Link>
            </li>
            <li>
              <Link href="/">Power Platform</Link>
            </li>
            <li>
              <Link href="/">Interpersonal Skills</Link>
            </li>
            <li>
              <Link href="/">Communication Skills</Link>
            </li>
            <li>
              <Link href="/">Explore More</Link>
            </li>
          </ul>
        </div>
        <div className="footerTab flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Important Links
          </h3>
          <ul className="text-gray-700 flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/corporate">Corporate</Link>
            </li>
            <li>
              <Link href="/calendar">Calendar</Link>
            </li>
            <li>
              <Link href="/individual">Individual</Link>
            </li>
            <li>
              <Link href="/e-learning">E-Learning</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="footerTab flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Quality and Compliance
          </h3>
          <ul className="text-gray-700">
            <li>ISO 9001:2015 Certified</li>
          </ul>
          <h3 className="font-bold text-lg text-gray-800 mt-2 mb-2">
            Resources
          </h3>
          <ul className="text-gray-700 flex flex-col gap-2">
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/sitemap.xml">Sitemap</Link>
            </li>
          </ul>
        </div>
        <div className="footerTab flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Company</h3>
          <ul className="text-gray-700 flex flex-col gap-2">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Join Us</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerDown flex mx-auto items-center justify-between py-4 max-w-(--max-width)">
        <div>
          <p className="text-gray-700">
            © 2014-{new Date().getFullYear()} 3a Learning Solutions. All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-5 text-gray-700">
          <Link href="/privacy-and-policy">Privacy Policy</Link> |{" "}
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
