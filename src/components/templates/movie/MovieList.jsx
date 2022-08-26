import FlexLayout from "../../layouts/FlexLayout"
import MovieListItem from "./MovieListItem"

export default function MovieList(props){

    const {movies, onSelect, undefinedMessage, className, reachedBottom} = props

    const handleScroll = (e) => {
        const bottom = Math.abs(e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight)) <= 1;
        if (bottom) { 
            reachedBottom()
        }
     }

    return(
        
        <FlexLayout
            scrolling
            vertical
            onScroll={handleScroll}
            className={"flex-1 w-full gap-3 " + className}
        >
            {!movies && <h2 className="text-center">{undefinedMessage ?? 'Start typing to see movies'}</h2>}
            {movies && movies.map((movie, index) => <MovieListItem
                movie={movie}
                key={index}
                onClick={(onSelect ? () => onSelect(movie) : () => console.log(`Selected ${movie.title}`))}
            />)}
            {movies && movies.length < 1 && <h2 className="justify-self-center text-center">No movies found</h2>}
        </FlexLayout>
    )
}