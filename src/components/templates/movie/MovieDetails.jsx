import { card } from "../../../styles/LayoutStyles";
import FlexLayout from "../../layouts/FlexLayout";
import SafeImage from "../../utils/SafeImage";

export default function MovieDetails(props){

    const {movie} = props
    const {title, image, description} = movie

    return(
        <FlexLayout
            vertical
            scrolling
            className={
                card + 
                "h-fit w-full bg-white p-0"
            }
        >
            <SafeImage src={image} className="bg-black rounded-lg self-center" />
            <FlexLayout
                vertical
                className="p-3"
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </FlexLayout>
        </FlexLayout>
    )
}