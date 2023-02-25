import {useState} from "react";
import KomponenteMitProp from "./KomponenteMitProp";

function MyFirstComponent() {

    const [myNum, setMyNum] = useState(0);
    const [message, setMessage] = useState("Nothing changed");

    /*Methodendefinition in react auf Funktionale art und weise ist richtig behindert
    In die Lambda parameter gehen deine Parameter rein*/
    const increaseNum = () => {
        setMyNum(myNum+1);
        setMessage("Increased");
    }

    const decreaseNum = () => {
        setMyNum(myNum-1);
        setMessage("Decreased");
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