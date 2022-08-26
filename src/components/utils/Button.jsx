import { card } from "../../styles/LayoutStyles";
import FlexLayout from "../layouts/FlexLayout";

import { TailSpin } from 'react-loader-spinner'

export default function Button(props){

    const {label, fill, primary, onClick, className, danger, isLoading} = props

    return(
        <FlexLayout
            onClick={isLoading ? () => {} : onClick}
            className={
                card +
                "p-3 cursor-pointer select-none items-center justify-center text-primary-900 " +
                (fill ? "w-full" : "w-fit") + " " +
                (primary ? "bg-primary-900" : "") + " " +
                (isLoading ? "opacity-80" : "") + " " +
                (danger ? "bg-red-600" : "") + " " +
                className
            }
        >
            {!isLoading ?
                <h3 className={
                    ((primary || danger) && 'text-contrast' )
                }>{label ?? "Button"}</h3> :
                <TailSpin height={20} width={20} color={primary ? "#FFFFFF" : "#000000"} />
            }
        </FlexLayout>
    )
}