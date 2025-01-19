
import {useRouteError} from "react-router-dom";

const ErrorElement = () => {

    const error = useRouteError();
    console.log(error);

    return(
        <div>Error</div>
    )
}

export default ErrorElement