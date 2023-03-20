import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/global/Navbar"
import Footer from "../components/global/Footer"

const Layouts = () => {

    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Fragment>
    )
}

export default Layouts