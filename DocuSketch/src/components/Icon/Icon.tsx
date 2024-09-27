import classes from './icon.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library, spinner} from "../../library";

interface IconProps {
    randNumber: number,
    isLoading: boolean
}

export default function Icon({ randNumber, isLoading }: IconProps) {
    return (
        <div className={classes.iconWrapper}>
            {isLoading ?
                <FontAwesomeIcon icon={spinner} size='2x' spin/> :
                <FontAwesomeIcon icon={library[randNumber]} size='5x'/> }
        </div>
    )
}
