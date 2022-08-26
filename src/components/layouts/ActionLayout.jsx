import FlexLayout from "./FlexLayout"

export default function ActionLayout(props){

    const {title, children, actions, className, noBodyPadding} = props

    return(
        <FlexLayout
            fill
            vertical
            className={className}
        >
            {title && <h1 className={"p-5 rounded-b-lg"}>{title}</h1>}
            <FlexLayout
                vertical
                fill
                scrolling
                className={
                    (noBodyPadding ? '' : 'px-5') + ' ' 
                }
            >
                {children || <div className="flex-1" />}
            </FlexLayout>
            <div className={"p-5 rounded-t-lg "}>
                {actions && actions}
            </div>
        </FlexLayout>
    )
}