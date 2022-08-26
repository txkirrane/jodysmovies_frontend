import { useState } from "react";
import { useAddUpdateMovie } from "../../../data/hooks/MovieHooks";
import FlexLayout from "../../layouts/FlexLayout";
import Button from "../../utils/Button";
import TextInput from "../../utils/TextInput";

export default function MovieForm(props){

    const {title, image, description, id, onSubmit} = props

    const [values, setValues] = useState({
        title: title ?? "",
        image: image ?? undefined,
        description: description ?? ""
    })

    const {loading, error, saveMovie} = useAddUpdateMovie({id})
    const submitForm = () => saveMovie(values)
    
    return(
        <FlexLayout
            vertical
            className='gap-3 pt-1'
        >
            <div>
                <TextInput
                    placeholder="Title"

                    value={values.title}
                    onChange={(title) => setValues({...values, title})}
                />
                {error?.title && <p className="text-red-600">{error.title}</p>}
            </div>
            <div>
                <p className="text-gray-500 text-sm pb-1">Cover Image</p>
                <TextInput
                    type="file"
                    onChange={(image) => setValues({...values, image})}
                />
                {error?.image && <p className="text-red-600">{error.image}</p>}
            </div>
            <div>
                <TextInput
                    placeholder="Description"
                    value={values.description}
                    onChange={(description) => setValues({...values, description})}
                    onEnter={submitForm}
                />
                {error?.description && <p className="text-red-600">{error.description}</p>}
            </div>
            <Button isLoading={loading} primary fill label='Save' className="" onClick={submitForm} />
            {error?.non_field_errors && <p className="text-red-600 text-center">{error.non_field_errors[0]}</p>}
        </FlexLayout>
    )
}