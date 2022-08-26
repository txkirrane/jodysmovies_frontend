import FlexLayout from "../components/layouts/FlexLayout";
import Button from "../components/utils/Button";

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { Fragment, useContext } from "react";
import { AccountContext } from "../components/containers/AccountContainer";
import { apiURL } from "../data/urls";

export default function HomeView(props){

    const navigate = useNavigate()
    const {token, setToken} = useContext(AccountContext)

    function getRandomMovie(){
        axios({
            url: apiURL + 'movies/random/',
            method: "GET",
        }).then((res) => {
            navigate('/' + res.data.movie)
        }).catch(() => navigate('/error/', {replace: true, state: {msg: "Could not get a random movie"}}))
    }

    return(
        <FlexLayout
            vertical
            fill
            className="p-5 gap-5"
        >
            <h1>Welcome to Jody's movie library</h1>
            <div className="flex-1" />
            {token ?
                <Fragment>
                    <Button label='Log Out' onClick={() => setToken(undefined)} fill />
                    <Button label='Add Movie' onClick={() => navigate('/add')} fill />
                </Fragment> :
            <Button label='Log In' onClick={() => navigate('/login')} fill />}
            <Button
                onClick={() => getRandomMovie()}
                label='Random Movie'
                fill
                primary
            />
            <Button
                onClick={() => navigate('/search')}
                label='Search for a Movie'
                fill
                primary
            />
            <Button
                onClick={() => navigate('/movies')}
                label='Browse Collection'
                fill
                primary
            />
        </FlexLayout>
    )
}