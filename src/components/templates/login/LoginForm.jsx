import { useState } from "react";
import FlexLayout from "../../layouts/FlexLayout";
import Button from "../../utils/Button";
import TextInput from "../../utils/TextInput";

import useLogin from "../../../data/hooks/UserHooks";

import {useNavigate} from 'react-router-dom'

export default function LoginForm(props){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {attemptLogin, error} = useLogin({
        onSuccess: () => navigate('/', {replace: true})
    })

    const submitForm = () => attemptLogin({username, password})

    return(
        <FlexLayout
            vertical
            className="gap-3 pt-1"
        >
            <div>
                <TextInput
                    autoFocus
                    placeholder="Username"
                    value={username}
                    onChange={setUsername}
                />
                {error?.username && <p className="text-red-600">{error.username}</p>}
            </div>
            <div>
                <TextInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                    onEnter={submitForm}
                />
                {error?.password && <p className="text-red-600">{error.password}</p>}
            </div>
            <Button
                fill
                label="Log In"
                primary
                onClick={submitForm}
            />
            {error?.non_field_errors && <p className="text-red-600 text-center">{error.non_field_errors[0]}</p>}
        </FlexLayout>
    )
}