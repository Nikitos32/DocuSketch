import classes from './main.module.css'
import Icon from "../Icon/Icon";
import Button from "../UI/Button/Button";
import {useState} from "react";

export default function MainComponent() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [icon, setIcon] = useState<number>(0)

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setIcon(Math.floor(Math.random() * 12));
            setLoading(false)
        }, 3000);
    }

    return (
        <div className={classes.main}>
            <Icon randNumber={icon} isLoading={isLoading} />
            <Button isLoading={isLoading} handleClick={handleClick} />
        </div>
    )
}
