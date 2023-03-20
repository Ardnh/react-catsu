import { createBrowserRouter } from "react-router-dom"

// Layout
import Layout from "../layout/MainLayout"

// Views
import PageNotFound from "../views/404"
import Home from "../views/Home"
import Cats from "../views/Cats"
import About from "../views/About"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "cats",
                element: <Cats/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])

export default router