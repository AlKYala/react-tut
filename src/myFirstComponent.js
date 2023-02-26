import {useState} from "react";
import KomponenteMitProp from "./KomponenteMitProp";
import {useDispatch, useSelector} from "react-redux";
import {setCounter} from "./redux/actions/actions";

function MyFirstComponent() {

    let counter = useSelector((state) => state.counter);
    counter = (counter == null) ? 0 : counter;

    const [myNum, setMyNum] = useState(counter);
    const [message, setMessage] = useState("Nothing changed");

    const disptach = useDispatch();

    /*Methodendefinition in react auf Funktionale art und weise ist richtig behindert
    In die Lambda parameter gehen deine Parameter rein*/
    const increaseNum = () => {
        setMyNum(myNum+1);
        setMessage("Increased");
        disptach(setCounter(myNum));
    }

    const decreaseNum = () => {
        setMyNum(myNum-1);
        setMessage("Decreased");
        disptach(setCounter(myNum));
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
                {/* Du brauchst keine Variablen fuer Props vordefinieren
                 Gib einfach ein, wie der Kenner fuer den Wert ist und
                 Gib ihm die Nachricht
                 */}
                <KomponenteMitProp msg={message}></KomponenteMitProp>
            </div>
        </div>
    );
}

//du referenzierst die Bennenung deiner Methode
export default MyFirstComponent;