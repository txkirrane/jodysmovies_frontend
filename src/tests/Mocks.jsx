import FlexLayout from "../components/layouts/FlexLayout";
import SearchMenu from "../components/templates/menus/SearchMenu";
import MovieCreateForm from "../components/templates/movie/MovieForm";
import Button from "../components/utils/Button";
import {MovieListItemMock, MovieDetailMock, MovieListMock} from "./mocks/MovieMocks";

export default function Mocks(props){
    return(
        <FlexLayout
            vertical
            fill
            className="bg-white gap-0 p-3"
        >
            <Button label="test" isLoading />
        </FlexLayout>
    )
}