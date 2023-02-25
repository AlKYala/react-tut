import {useState} from "react";

function MyFirstComponent() {

    const [myNum, setMyNum] = useState(0);

    /*Methodendefinition in react auf Funktionale art und weise ist richtig behindert
    In die Lambda parameter gehen deine Parameter rein*/
    const increaseNum = () => {
        setMyNum(myNum+1);
    }

    const decreaseNum = () => {
        setMyNum(myNum-1);
    }

    return (
        <div>
            <div className="container">
                <div className="text-center p-4 p-lg-5">
                    <h1 className="fw-bold mb-4">{myNum}</h1>
                    <button className="btn btn-primary fs-5 me-2 py-2 px-4"
                            type="button"
                            onClick={() => increaseNum()}
                    >Increase</button>
                    <button className="btn btn-light fs-5 py-2 px-4"
                            type="button"
                            onClick={() => decreaseNum()}
                    >Decrease</button>
                </div>
            </div>
        </div>
    );
}

//du referenzierst die Bennenung deiner Methode
export default MyFirstComponent;