import { FC } from "react";
import MinLoader from './MinLoader'

type Props = {
    action?: () => void,
    disable?: boolean,
    styles: string,
    type?: "button" | "submit"
}

const Button: FC<Props> = ({ children, action, disable, styles, type }) => {
    return (
        <button
            type={type ? type : "button"}
            onClick={action}
            disabled={disable}
            className={styles}>
                {disable ? <MinLoader /> :  children}
        </button>
    )
}

export default Button