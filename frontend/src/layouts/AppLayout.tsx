import { Outlet } from "react-router"
import { Footer, Header } from "../components"

export default function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
