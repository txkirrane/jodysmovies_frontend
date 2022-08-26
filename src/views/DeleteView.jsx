import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FlexLayout from "../components/layouts/FlexLayout";
import ActionLayout from "../components/layouts/ActionLayout"
import BackButton from "../components/utils/BackButton";
import Button from "../components/utils/Button";
import { useDeleteMovie, useMovie } from "../data/hooks/MovieHooks";

export default function DeleteView(props){

    const {movieId} = useParams()
    const navigate = useNavigate()

    const {movie} = useMovie({movieId})

    const {deleteMovie} = useDeleteMovie({id: movieId})


    return(
        <ActionLayout
            className="justify-between"
            title={movie && `Are you sure you want to delete ${movie.title}?`}
            actions={
                movie && <Fragment>
                            <FlexLayout className="gap-3">
                                <BackButton primary/>
                                <Button danger label='Yes' onClick={deleteMovie} className='w-32' />
                            </FlexLayout>
                        </Fragment>
            }
        >
        </ActionLayout>
    )
}