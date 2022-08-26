import { useState, useEffect, Fragment } from "react"

export default function SafeImage(props){

    const {src, className, loading} = props

    const [isLoaded, setIsLoaded] = useState(false)

    function getImage(url){
        var image = new Image()
        image.src = src
        image.onload = () => setIsLoaded(true)
    }

    useEffect(() => {
        setIsLoaded(false)
        getImage(src)
    }, [src])

    return(
        <Fragment>
            {isLoaded ?
                <img
                    src={src}
                    className={
                        "object-center " +
                        className
                    }
                /> :
                <div className={className + " w-14"} />
            }
        </Fragment>
    )
}