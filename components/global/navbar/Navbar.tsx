"use client";

import Image from "next/image";
import logo from "@/public/media/3alogo.png";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import "./styles.css";
import PrimaryBtn from "@/components/local/buttons/PrimaryBtn";
import { useState } from "react";
import SecondaryButton from "@/components/local/buttons/SecondaryBtn";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex items-center justify-between py-4"
      >
        <Link href="/" className="mainLogo flex items-center ">
          <Image
            src={logo}
            alt="3a Learning Solutions"
            className="h-14 w-auto"
            priority
          />
        </Link>
        <ul className={`menu ${navOpen ? "navActive" : ""}`}>
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
          <li className="desktopHide">
            <Link href="/calendar">About</Link>
          </li>
          <li className="desktopHide">
            <Link href="/calendar">Events</Link>
          </li>
          <li className="desktopHide">
            <Link href="/calendar">Join Us</Link>
          </li>
          <li className="desktopHide">
            <SecondaryButton
              href="contact"
              text="Get In Touch"
              className="w-full"
            />
          </li>
          <li className="desktopHide">
            📧{" "}
            <Link href="mailto:info@3alearningsolutions.com">
              info@3alearningsolutions.com
            </Link>
            <br />
            📞 <Link href="tel:9999999999">9999999999</Link>
          </li>
          <li className="desktopHide mNavCopyRight">
            © 2014-{new Date().getFullYear()} | 3a Learning Solutions
          </li>
          <li className="mobileHide cursor-pointer relative">
            Company <ChevronDown className="inline-block" />
            <ul className="border border-neutral-200 p-3 rounded-sm">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/join-us">Join Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="mobileHide">
          <PrimaryBtn text="Get In Touch" href="contact" />
        </div>
        <div className="navToggleBtnBox desktopHide">
          <button className="navToggleBtn" onClick={toggleNav}>
            {" "}
            {navOpen ? "X" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}
