import {useParams} from "react-router-dom";

function UrlParamComponent() {

    const params = useParams();
    const extractedParam = params.param;

    return (
        <div>
            <p>{extractedParam}</p>
        </div>
    )
}

export default UrlParamComponent;