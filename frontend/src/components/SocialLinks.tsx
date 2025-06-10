import { FaGithub, FaLinkedin } from "react-icons/fa6"

const socialLinks = [
    {
        id: 1,
        icon: <FaLinkedin className="hover:text-sky-500" />,
        link: "#linkedin",
    },
    {
        id: 2,
        icon: <FaGithub className="hover:text-gray-700" />,
        link: "#github",
    },
]

export default function SocialLinks() {
    return (
        <div>
            <ul className="flex items-center justify-center gap-x-4 text-2xl">
                {socialLinks.map(function ({ id, icon, link }) {
                    return (
                        <a
                            key={id}
                            href={link}
                            className="text-gray-600 hover:scale-110"
                        >
                            {icon}
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}
