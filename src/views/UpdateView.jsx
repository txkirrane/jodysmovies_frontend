import FlexLayout from "../components/layouts/FlexLayout";
import { useMovie } from "../data/hooks/MovieHooks";

import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "../components/templates/movie/MovieForm";
import Button from "../components/utils/Button";
import ActionLayout from "../components/layouts/ActionLayout";
import BackButton from "../components/utils/BackButton";

export default function UpdateView(props){

    const navigate = useNavigate()

    const {movieId} = useParams()
    const {movie} = useMovie({movieId})

    return(
        <ActionLayout
            title="Update Movie"
            actions={<BackButton />}
        >
            {movie && <MovieForm
                id={movie.id}
                title={movie.title}
                description={movie.description}
            />}
        </ActionLayout>
    )
}