import ActionLayout from "../components/layouts/ActionLayout";
import MovieForm from "../components/templates/movie/MovieForm"
import BackButton from "../components/utils/BackButton";

export default function CreateView(props){

    return(
        <ActionLayout
            title="Add a Movie"
            actions={<BackButton />}
        >
            <MovieForm />
        </ActionLayout>
    )
}