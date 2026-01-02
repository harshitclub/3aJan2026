import Image from "next/image";
import logo from "@/public/media/3alogo.png";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import "./styles.css";
import PrimaryBtn from "@/components/local/buttons/PrimaryBtn";
export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex items-center justify-between py-4"
      >
        <Link href="/" className="flex items-center ">
          <Image
            src={logo}
            alt="3a Learning Solutions"
            className="h-14 w-auto"
            priority
          />
        </Link>
        <ul>
          <li>
            <Link href="/individual">Individual</Link>
          </li>
          <li>
            <Link href="/corporate">Corporate</Link>
          </li>
          <li>
            <Link href="/e-learning">E-Learning</Link>
          </li>
          <li>
            <Link href="/calendar">Calendar</Link>
          </li>
          <li className="cursor-pointer relative">
            Company <ChevronDown className="inline-block" />
            <ul className="border border-neutral-200 p-3 rounded-sm">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Programs</Link>
              </li>
              <li>
                <Link href="/">Join Us</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <PrimaryBtn text="Get In Touch" href="contact" />
        </div>
      </nav>
    </header>
  );
}
