import React from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { profile } from "../data";

const items = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: LuMail },
  { label: "Google Scholar", href: profile.links.scholar, Icon: SiGooglescholar },
  { label: "GitHub", href: profile.links.github, Icon: LuGithub },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: LuLinkedin },
  { label: "ORCID", href: profile.links.orcid, Icon: SiOrcid },
];

const SocialLinks = ({ className = "" }) => (
  <ul className={`flex items-center gap-1 ${className}`}>
    {items
      .filter((item) => item.href)
      .map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
  </ul>
);

export default SocialLinks;
