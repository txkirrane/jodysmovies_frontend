import FlexLayout from "../layouts/FlexLayout"

export default function TextInput(props){

    const {className, type, fill, value, onChange, onEnter, placeholder, autoFocus} = props

    return(
        <FlexLayout className={
            "" +
            (fill ? "w-full items-stretch" : "") + " " +
            className
        }>
            <input
                type={type || "text"}
                value={value || null}
                placeholder={placeholder || "Text Input"}
                autoFocus={autoFocus || false}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        (onEnter ? onEnter() : console.error("Submit not handled!"))
                    }
                }}
                onChange={(e) => (onChange ? onChange(type === 'file' ? e.target.files[0] : e.target.value) : console.error("Input not set up!"))}
                className="w-full rounded-lg p-2 h-12 border-gray-300 border-solid border-2 "
            />
        </FlexLayout>
    )
}