import { useNavigate } from "react-router-dom"

import Button from "./Button"

export default function BackButton(props){

    const navigate = useNavigate()
    const {url, primary} = props

    return <Button primary={primary} fill label='Back' onClick={() => navigate((url ?? -1), {replace: true})} />
}