import axios from 'axios'
import { useContext, useState } from 'react'
import { AccountContext } from '../../components/containers/AccountContainer'

import {apiURL} from "../urls"

export default function useLogin({onSuccess}){

    const {setToken} = useContext(AccountContext)
    const [error, setError] = useState(undefined)

    function attemptLogin(credentials){
        axios({
            url: apiURL + 'login/',
            data: credentials,
            method: "POST"
        }).then((res) => {
            setToken(res.data.token)
            onSuccess()
        }).catch((err) => {
            setError(err.response.data)
        })
    }

    return {attemptLogin, error}
}