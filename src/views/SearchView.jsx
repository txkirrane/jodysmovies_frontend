import { useMovieSearch } from "../data/hooks/MovieHooks";
import FlexLayout from "../components/layouts/FlexLayout";

import { useNavigate, useParams } from 'react-router-dom'

import SearchMenu from "../components/templates/menus/SearchMenu"
import MovieList from "../components/templates/movie/MovieList"
import Button from "../components/utils/Button";

export default function SearchView(props){

    const navigate = useNavigate()
    const {searchTerm} = useParams()

    const {movies} = useMovieSearch({searchTerm: searchTerm ?? ""})

    return(
        <FlexLayout
            vertical
            fill
        >
            <SearchMenu
                searchTerm={searchTerm}
                setSearchTerm={(searchTerm) => navigate('/search/' + searchTerm, {replace: true})}
            />
            {movies !== null ? <MovieList
                reachedBottom={() => {}}
                movies={movies}
                onSelect={(movie) => navigate('/' + movie.id)}
                className="p-3"
            /> : <div className="flex-1" />}
            <div className="p-5"> 
                <Button onClick={() => navigate('/', {replace: true})} label="Home" fill className="bg-white" />
            </div>
        </FlexLayout>
    )
}