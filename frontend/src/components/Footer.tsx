import NavLinks from "./NavLinks"

export default function Footer() {
    return (
        <footer className="mt-4 h-18 border-t border-solid border-gray-200">
            <div className="w-[90%] max-w-4xl mx-auto h-full flex gap-20 items-center justify-between">
                <NavLinks />
                <p className="tracking-wide md:text-[1.2rem] text-gray-500 font-bold">
                    lavanya's blog@{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}
