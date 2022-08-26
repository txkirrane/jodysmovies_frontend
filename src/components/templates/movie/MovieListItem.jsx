import { card } from "../../../styles/LayoutStyles"
import FlexLayout from "../../layouts/FlexLayout"
import SafeImage from "../../utils/SafeImage"

import {motion} from 'framer-motion'

export default function MovieListItem(props){

    const {movie, onClick} = props
    const {title, image} = movie

    return(
        <motion.span
            initial={{
                opacity: 0,
                y: 10
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            exit={{
                opacity: 0,
                x: 100
            }}
        >
            <FlexLayout
                className={
                    "flex justify-between items-center gap-3 h-fit cursor-pointer " + 
                    card
                }
                onClick={onClick || (() => console.error("Button not set up!"))}
            >
                <SafeImage src={image} className="h-20 bg-black rounded-lg" />
                <div className={
                    "flex flex-1 flex-col items-start justify-center " +
                    "pr-3"
                }>
                    <h2>{title}</h2>
                </div>
            </FlexLayout>
        </motion.span>
    )
}