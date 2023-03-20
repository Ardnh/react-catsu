import Container from "@mui/material/Container"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ChipList from "../components/global/ChipList"
import CircularProgress from "@mui/material/CircularProgress"
import { getCategories, getCatsByCategory } from "../store/features/catsSlice"
import ListCard from "../components/global/cats/ListCard"

const Cats = () => {
    const [showContent, setShowContent] = useState(false)
    const { categories, catsLists } = useSelector((store) => store.cats)
    const dispatch = useDispatch()

    const fetchCategory = useCallback(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        if( categories.length > 0 ) {
            return
        }
        fetchCategory()
    }, [fetchCategory])

    const fetchCatsByCategory = useCallback(() => {
        getCatByCategory("")
    }, [dispatch])

    useEffect(() => {
        if( catsLists.length > 0 ) {
            return
        }
        fetchCatsByCategory()
    }, [fetchCatsByCategory])

    const getCatByCategory = (id) => {
        setShowContent(true)
        dispatch(getCatsByCategory(id))
            .then(() => {
                setShowContent(false)
            })
            .catch(() => {
                setShowContent(false)
            })
    }

    const ImageList = (props) => {
        return (
            props.data.map((item) => <ListCard key={ item.id } id={ item.id } url={ item.url } />)
        )
    }

    return (
        <Container>
            <div className="w-full font-bold my-10 text-center text-3xl text-indigo-900 mx-auto" style={{ fontFamily: 'roboto', letterSpacing: '.2rem' }}>so you want more cats?</div>
            <div className="flex flex-wrap my-3 justify-center p-3">
                { 
                    categories.map((item) => <ChipList callback={ getCatByCategory } key={ item.id } id={ item.id } name={ item.name } />)
                }
            </div>
            <div className="flex my-10 flex-wrap justify-center gap-3">
                { showContent ? <CircularProgress/> : <ImageList data={catsLists} /> }
            </div>
        </Container>
    )
}

export default Cats