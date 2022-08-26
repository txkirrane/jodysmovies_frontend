import { useNavigate } from "react-router-dom";
import ActionLayout from "../components/layouts/ActionLayout";
import MovieList from "../components/templates/movie/MovieList";
import BackButton from "../components/utils/BackButton";
import Button from "../components/utils/Button";
import { useMovieList } from "../data/hooks/MovieHooks";

export default function CollectionView(props){

    const navigate = useNavigate()
    const {movies, getMovies} = useMovieList()

    return(
        <ActionLayout
            title="Jody's Movies"
            noBodyPadding
            actions={<BackButton />}
        >
            <MovieList
                movies={movies}
                onSelect={(movie) => navigate(`/${movie?.id}`)}
                undefinedMessage="..."
                className="p-5"
                reachedBottom={getMovies}
            />
        </ActionLayout>
    )
}