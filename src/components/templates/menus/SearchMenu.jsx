import { useState } from "react";
import FlexLayout from "../../layouts/FlexLayout";

import TextInput from "../../utils/TextInput"

export default function SearchMenu(props){

    const {searchTerm, setSearchTerm} = props

    return(
        <FlexLayout
            className="w-full shadow-xl bg-white rounded-b-lg justify-center items-center p-3"
        >
            <TextInput
                fill
                autoFocus
                placeholder="Search for a Movie"
                value={searchTerm}
                onChange={setSearchTerm}
                
            />
        </FlexLayout>
    )
}