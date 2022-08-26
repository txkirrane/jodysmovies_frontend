import FlexLayout from "../components/layouts/FlexLayout";
import LoginForm from "../components/templates/login/LoginForm";
import Button from "../components/utils/Button";

import { useNavigate } from 'react-router-dom'
import ActionLayout from "../components/layouts/ActionLayout";
import BackButton from "../components/utils/BackButton";

export default function LoginView(props){

    const navigate = useNavigate()

    return(
        <ActionLayout
            title="Log In"
            actions={<BackButton url="/" />}
        >
            <LoginForm />
        </ActionLayout>
    )
}