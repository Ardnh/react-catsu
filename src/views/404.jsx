import { Link } from "react-router-dom"
import NotFoundIcon from "../components/icon/NotFoundIcon"

const PageNotFound = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="mt-20 flex flex-col justify-center  p-5 shadow-lg rounded-2xl bg-indigo-200">
                <div className="w-72 h-72 mx-auto">
                    <NotFoundIcon/>
                </div>
                <p className="font-bold text-center text-lg text-indigo-700 mb-3">404 Page Not Found!</p>
                <div className="text-center">
                    <Link to="/" className="hover:text-indigo-800 font-normal text-lg text-indigo-700">Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound