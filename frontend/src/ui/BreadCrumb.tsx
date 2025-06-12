import React from "react"
import { FaAngleRight } from "react-icons/fa6"
import { Link } from "react-router"

interface Props {
    links: { id: number; text: string; to: string }[]
}

export default function BreadCrumb({ links }: Props) {
    return (
        <div>
            <div className="max-w-fit flex items-center gap-4">
                {links.map(function ({ id, text, to }, idx) {
                    return (
                        <React.Fragment key={id}>
                            <Link to={to} className="link">
                                {text}
                            </Link>
                            {idx < links.length - 1 ? (
                                <span>
                                    <FaAngleRight className="text-gray-600 text-sm" />
                                </span>
                            ) : null}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

// <Link to="/" className="link">
//     home
// </Link>
// <span>
//     <FaAngleRight className="text-gray-600 text-sm" />
// </span>
// <Link to="/blogs" className="link">
//     blogs
// </Link>
