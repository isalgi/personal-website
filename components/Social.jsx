import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/iskhafel",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/faishalmakarim/",
    label: "LinkedIn",
  },
  {
    icon: <SiGmail />,
    path: "mailto:faishalmakarimk@gmail.com",
    label: "Email",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, idx) => {
        return (
          <Link
            key={idx}
            href={social.path}
            className={iconStyles}
            target="_blank"
            aria-label={social.label}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
