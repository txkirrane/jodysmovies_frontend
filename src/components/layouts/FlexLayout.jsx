import {motion} from 'framer-motion'

export default function FlexLayout(props){

    const {vertical, fill, scrolling, className, onClick, initial, animate, exit, onScroll} = props

    return(
        <motion.div
            className={
                "flex " +
                (scrolling ? "overflow-auto" : "") + " " +
                (fill ? "flex-1 h-full w-full" : "") + " " +
                (vertical ? "flex-col" : "flex-row") + " " +
                className
            }
            
            onScroll={onScroll || (() => {})}
            onClick={onClick || (() => {})}
            
            initial={initial || {
                opacity: 0,
                scale: 0.99
            }}
            animate={animate || {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.2
                }
            }}
            exit={exit || {}}

        >
            {props.children}
        </motion.div>
    )
}