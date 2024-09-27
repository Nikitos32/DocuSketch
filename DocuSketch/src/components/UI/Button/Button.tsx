import classes from './Button.module.css'

interface ButtonProps {
    handleClick: () => void,
    isLoading: boolean
}

export default function Button ({ handleClick, isLoading }: ButtonProps) {
    return (
        <>
            <button
                className={classes.btn}
                onClick={() => handleClick()}
                disabled={isLoading}
            >
                Show Icon
            </button>
        </>
    )
}
