import { Fragment } from "react"

const svgList = [
    {
        path: "src/assets/react.svg",
        url: "https://react.dev/learn",
        name: "React Js"
    },
    {
        path: "src/assets/redux-icon.svg",
        url: "https://redux-toolkit.js.org/",
        name: "Redux toolkit"
    },
    {
        path: "src/assets/react-router.svg",
        url: "https://reactrouter.com/en/main",
        name: "React router"
    }
]

const SvgImage = (props) => {
    const openUrl = () => {
        window.open(props.url)
    }

    return (
        <div className="mx-2 p-5 hover:cursor-pointer" onClick={openUrl}>
            <img className=" w-32 h-32" src={ props.path } />
            <div className="text-center text-indigo-800 mt-3 font-bold text-lg">{ props.name }</div>
        </div>
    )
}

const About = () => {

    return (
        <Fragment>
            <div className="flex flex-wrap mt-16 text-indigo-800 rounded-xl p-5 justify-center text-3xl font-medium" style={{ fontFamily: 'roboto' }}>
               Tech Stack
            </div>
            <div className="flex flex-wrap my-10 justify-center">
                { svgList.map((item) => <SvgImage key={item.name} name={item.name} path={item.path} url={item.url} />) }
            </div>
        </Fragment>
    )
}

export default About