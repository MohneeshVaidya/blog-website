import { Section } from "../ui"
import HeroImg from "../assets/hero-img3.avif"
import { Link } from "react-router"
import { FaLongArrowAltRight } from "react-icons/fa"

export default function HomePage() {
    return (
        <Section>
            <div className="grid gap-12 place-items-start grid-cols-2 h-[calc(100vh-11.6rem)]">
                <div className="col-span-2 md:col-span-1">
                    <h1 className="heading-primary">
                        this is some heading about lavanya
                    </h1>
                    <p className="text-primary mt-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque modi quidem consequuntur magnam facilis
                        ipsa quod voluptatibus, explicabo doloremque maxime qui
                        aliquid quas quia impedit dolores ullam asperiores
                        voluptatem vitae.
                    </p>
                    <Link className="btn-primary-outline mt-10" to="/blogs">
                        <span>read my blogs</span>
                        <FaLongArrowAltRight className="relative top-[1px] ml-1" />
                    </Link>
                </div>
                <div className="hidden  md:grid place-items-center">
                    <div className="w-2/3">
                        <img src={HeroImg} alt="hero-img" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
