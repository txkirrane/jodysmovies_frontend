import MovieDetails from "../../components/templates/movie/MovieDetails";
import MovieListItem from "../../components/templates/movie/MovieListItem";
import MovieList from "../../components/templates/movie/MovieList"
import { MovieMock } from "../scripts/MovieMocks";

export function MovieListItemMock(props){

    return(
        <MovieListItem movie={MovieMock} />
    )
}

export function MovieDetailMock(props){
    return(
        <MovieDetails movie={MovieMock} />
    )
}

export function MovieListMock(props){
    return(
        <MovieList
            movies={[
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
                MovieMock,
            ]}
        />
    )
}