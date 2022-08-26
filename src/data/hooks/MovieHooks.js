import { useContext, useEffect, useState } from "react";

import axios from 'axios'
import { apiURL } from "../urls";
import { AccountContext } from "../../components/containers/AccountContainer";

import Movie from "../models/Movie"

import {useNavigate} from 'react-router-dom'

export function useMovieSearch({searchTerm}){
    
    const [movies, setMovies] = useState(undefined)

    const controller = new AbortController()

    function search(term){

        // Abort any previous requests
        //controller.abort()

        // Query backend for movies
        axios({
            url: apiURL + "movies/?limit=100&offset=0&search=" + term,
            method: "GET",
            signal: controller.signal
        }).then((res) => {
            setMovies(res.data.results)
        }).catch((err) => {
            console.error(err);
        })

    }

    useEffect(() => {
        setMovies(null)
        if(searchTerm.length > 0){
            search(searchTerm)
        } else {
            setMovies(undefined)
        }

        return () => controller.abort()
    }, [searchTerm])

    return {movies}
}

export function useMovie({movieId}){

    const navigate = useNavigate()
    const [movie, setMovie] = useState(undefined)

    function getMovie(id){
        axios({
            url: apiURL + `movies/${id}`,
            method: "GET",
        }).then((res) => setMovie(new Movie(res.data)))
        .catch((err) => navigate('/error/', {replace: true, state: {msg: "You don't seem to have that movie"}}))
        .finally(() => {})
    }

    useEffect(() => {
        setMovie(undefined)
        getMovie(movieId)
    }, [movieId])

    return {movie}
}

export function useMovieList(){

    const navigate = useNavigate()
    const [movies, setMovies] = useState([])

    // This is used for pagination
    const limit = 50
    const [currentPage, setCurrentPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const [loading, setLoading] = useState(false)

    function getMovies(){
        setLoading(true)

        if(loading) return

        if(!hasMore) {
            setLoading(false)
            return
        }

        axios({
            url: apiURL + `movies?limit=${limit}&offset=${currentPage * limit}`,
            method: "GET"
        }).then((res) => {
            setMovies([...movies, ...res.data.results])
            
            if((currentPage + 1) * limit > res.data.count){
                setHasMore(false)
            } else {
                setCurrentPage(currentPage + 1)
            }

            setLoading(false)

        }).catch((err) => {
            navigate('/error/', {replace: true, state: {msg: "Could not retrive movies"}})
        })
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {movies, getMovies}
}

export function useAddUpdateMovie({id}){

    const navigate = useNavigate()
    const {token} = useContext(AccountContext)

    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(!token) navigate('/error/', {replace: true, state: {msg: "You must be logged in to add or edit a movie"}})
    }, [])

    async function saveMovie({title, image, description}){

        // Convert data to form for image support
        const formData = new FormData()
        
        setLoading(true)

        formData.append('title', title)
        formData.append('description', description)

        if(image){
            formData.append('image', image)
        }

        axios({
            url: apiURL + 'movies/' + (id ? `${id}/` : ''),
            method: (id ? "PATCH" : "POST"),
            headers: {
                Authorization: `Token ${token}`,
                'content-type': 'multipart/form-data'
            },
            data: formData
        }).then((res) => {
            navigate(`/${id ?? res.data.id}`, {replace: true})
        }).catch((err) => {
            setError(err.response.data)
        }).finally(() => {
            setLoading(false)
        })
        
    }

    return {loading, error, saveMovie}

}

export function useDeleteMovie({id}){
    
    const navigate = useNavigate()
    const {token} = useContext(AccountContext)

    useEffect(() => {
        if(!token) navigate('/error/', {replace: true, state: {msg: "You must be logged in to delete a movie"}})
    }, [])

    function deleteMovie(){
        axios({
            url: apiURL + 'movies/' + id + '/',
            method: "DELETE",
            headers: {
                Authorization: `Token ${token}`,
            }
        }).then((res) => {navigate('/', {replace: true})})
        .catch(() => {})
    }

    return {deleteMovie}

}