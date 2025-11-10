"use client";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/mjoshscott" },
  ];

  return (
    <footer className="bg-[#0b0b0b] py-10 text-center">
      {/* Contact text */}
      <p className="text-white/70 mb-4">
        Contact me via{" "}
        <a
          href={socials[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:underline"
        >
          LinkedIn
        </a>{" "}
        or email{" "}
        <a
          href="mailto:joshuams128@gmail.com"
          className="text-teal-300 hover:underline"
        >
          joshuams128@gmail.com
        </a>
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-teal-300 text-2xl transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Joshua. All rights reserved.
      </p>
    </footer>
  );
}
