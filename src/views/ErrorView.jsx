import FlexLayout from "../components/layouts/FlexLayout";
import Button from "../components/utils/Button";

import { useNavigate, useLocation } from 'react-router-dom'
import ActionLayout from "../components/layouts/ActionLayout";

export default function ErrorView(props){

    const navigate = useNavigate()
    const {state} = useLocation()

    return(
        <ActionLayout
            title="Houston, we have a problem"
            actions={<Button fill label='Home' primary onClick={() => navigate('/', {replace: true})} />}
        >
            <p className="text-lg text-gray-700">{state?.msg ?? "We seemed to have run into an issue"}</p>
        </ActionLayout>
    )
}