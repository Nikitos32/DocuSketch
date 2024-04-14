import classes from './main.module.css'
import Icon from "../Icon/Icon";
import Button from "../UI/Button/Button";

export default function MainComponent() {
    return (
        <div className={classes.main}>
            <Icon randNumber={1} isLoading={true} />
            <Button />
        </div>
    )
}
