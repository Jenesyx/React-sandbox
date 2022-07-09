import { Button } from "react-bootstrap"

const MyButton = (props) => {
    return(
        <Button {...props} className={`w-100 btn btn-danger ${props.className}`} variant="danger">{props.children}</Button>
    )
}

export default MyButton