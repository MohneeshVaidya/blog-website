import { createBrowserRouter, RouterProvider } from "react-router"
import { AppLayout } from "./layouts"
import { AboutPage, BlogsPage, HomePage } from "./pages"

const router = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "blogs",
                element: <BlogsPage />,
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router}></RouterProvider>
}
