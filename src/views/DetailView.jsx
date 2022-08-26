import MovieDetails from "../components/templates/movie/MovieDetails";

import { useParams, useNavigate } from 'react-router-dom'
import { useMovie } from "../data/hooks/MovieHooks";
import FlexLayout from "../components/layouts/FlexLayout";
import Button from "../components/utils/Button";
import { Fragment, useContext } from "react";
import { AccountContext } from "../components/containers/AccountContainer";

export default function DetailView(props){

    const navigate = useNavigate()
    const {movieId} = useParams()

    const {token} = useContext(AccountContext)

    const {movie} = useMovie({
        movieId
    })

    if(!movie) return(<></>)
    return(
        <FlexLayout
            fill
            vertical
            className="p-5 gap-3 justify-between"
        >
            <MovieDetails movie={movie} />
            <FlexLayout vertical className="gap-3">
                {token ?
                    <FlexLayout className="gap-3">
                        <Button fill onClick={() => navigate('edit/', )} label="Edit Movie" />
                        <Button fill danger onClick={() => navigate('delete/', )} label="Delete Movie" />
                    </FlexLayout> : null}
                <Button primary onClick={() => navigate(-1)} fill label="Back" />
            </FlexLayout>
        </FlexLayout>
    )
}