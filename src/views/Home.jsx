import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { indigo } from '@mui/material/colors';
import Container from "@mui/material/Container"
import Grid2 from '@mui/material/Unstable_Grid2';
import ImageList from '../components/global/ImageList'
import CubeIcon from '../components/icon/CubeIcon';
import StackIcon from '../components/icon/StackIcon';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getRandomCats, goTheCatsApi } from '../store/features/homeSlice';
import { useCallback, useEffect, useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress"


const theme = createTheme({
    palette: {
        primary: {
            main: indigo[900]
        }
    },
})

const Home = () => {
    const { catsLists } = useSelector((store) => store.home)
    const [ isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()

    const initFetch = useCallback(() => {
        fetchRandomCats()
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    const fetchRandomCats = () => {
        setIsLoading(true)
        dispatch(getRandomCats())
            .then(() => {
                setIsLoading(false)
            })
            .catch(() => setIsLoading(false))
    }

    const goToTheCatsApi = () => {
        dispatch(goTheCatsApi())
    }

    const RandomCatsImage = (props) => {

        return (
            props.data.map((item) => <ImageList key={item.id} id={item.id} url={item.url}></ImageList>)
        )
    }

    return ( 
        <ThemeProvider theme={theme}>
            <Container>
                <div className="shadow-xl mt-10 ml-3 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-400 px-10 py-8 rounded-3xl">
                    <Grid2 container>
                        <Grid2 xs={12} md={6}>
                            <div className="mt-20">
                                <div className="md:text-8xl md:text-left text-center text-6xl text-white md:mr-2 mr-1 font-bold" style={{ fontFamily: 'monospace' }}>CATSU</div>
                                <div className="md:text-5xl md:text-left text-center text-4xl text-white md:mr-2 mr-1 font-bold" style={{ fontFamily: 'monospace' }}>Your daily cats</div>
                                <div className="mt-8 md:text-left text-center">
                                    <Link to="/cats" className="font-semibold text-lg mt-3 bg-indigo-600 px-4 py-2 hover:bg-indigo-700 text-white rounded-lg  ">Explore</Link>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 xs={12} md={6}>
                            <div className="md:w-96 md:h-96 w-60 h-60 md:mt-0 mt-5 mx-auto">
                                <CubeIcon></CubeIcon>
                            </div>
                        </Grid2> 
                    </Grid2>
                </div>
                {/* List of Cats */}
                <div className='mb-10'>
                    <div className="text-center font-bold text-indigo-900 text-3xl mt-14 font-sans" style={{fontFamily: 'roboto', letterSpacing: '.2rem'}}>This is your daily cats for today</div>
                    <div className="mt-10 flex flex-wrap gap-2 justify-center">
                        { isLoading ? <CircularProgress/> : <RandomCatsImage data={catsLists} /> }
                    </div>
                    <div className="mt-7 flex justify-center">
                        <Link to="/cats" className="font-semibold text-lg mt-3 bg-indigo-600 px-4 py-2 hover:bg-indigo-700 text-white rounded-lg">Explore more cats</Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between shadow-lg mx-auto align-middle p-5 rounded-xl md:w-1/2 w-full my-5 bg-indigo-100">
                    <div className="mt-7 font-bold md:text-xl text-md flex text-indigo-900" style={{ fontFamily: 'roboto' }}>This API is provided by <div onClick={ goToTheCatsApi } className="mx-1 underline underline-offset-8 cursor-pointer">The Cats API</div></div>
                    <div className="w-20 h-20 mt-3 md:mt-0 mx-auto md:mr-auto">
                        <StackIcon/>
                    </div>
                </div>
            </Container>
        </ThemeProvider>
    )
}

export default Home