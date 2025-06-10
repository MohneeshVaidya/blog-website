import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"
import ProfileImg from "../assets/profile-img.jpeg"

export default function Header() {
    return (
        <header className="shadow-md h-18">
            {/* nav center */}
            <div className="h-full w-[90%] mx-auto max-w-6xl flex items-center justify-between">
                {/* profile img */}
                <div className="w-14 rounded-full overflow-hidden shadow-[0_0_5px] shadow-gray-500">
                    <img src={ProfileImg} alt="profile-img" />
                </div>

                {/* links container */}
                <div className="flex items-center gap-12">
                    <NavLinks />
                    <SocialLinks />
                </div>
            </div>
        </header>
    )
}
