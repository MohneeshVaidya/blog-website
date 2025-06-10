import { NavLink } from "react-router"

const navlinks = [
    { id: 1, text: "home", link: "/" },
    { id: 2, text: "about", link: "/about" },
    { id: 3, text: "blogs", link: "/blogs" },
]

export default function NavLinks() {
    return (
        <nav>
            <ul className="flex items-center justify-center gap-x-8">
                {navlinks.map(function ({ id, text, link }) {
                    return (
                        <li key={id}>
                            <NavLink
                                to={link}
                                className="text-[1rem] text-gray-600 font-bold group py-4 tracking-wide"
                            >
                                <span className="inline-block group-hover:scale-110">
                                    {text}
                                </span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
