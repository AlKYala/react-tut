import {useEffect, useState} from "react";
import KomponenteMitProp from "./KomponenteMitProp";
import {useDispatch, useSelector} from "react-redux";
import {setCounter} from "./redux/actions/actions";

function MySecondComponent() {

    let counter = useSelector((state) => state.counter);
    counter = (counter == null) ? 0 : counter;

    const [myNum, setMyNum] = useState(counter);
    const [message, setMessage] = useState("Nothing changed");

    const disptach = useDispatch();

    useEffect(() => {
        console.log("This use Effect runs when Component is Loaded first, Has Reactive Data Update (useState) and when this component is destroyed")
    })

    //when dependencies is empty array it runs on first load
    useEffect(() => {
        console.log("This use Effect runs when Component is Loaded first because dependencies, the array as second argument is empty Array")
    }, [])

    //listens to any dependency - use reactive data for this
    useEffect(() => {
        console.log("This use Effect runs when myNum is updated")
    }, [myNum])

    useEffect(() => {
        console.log("This use Effect runs when message is updated")
    }, [message])

    useEffect(() => {
        console.log("This use Effect runs when message or myNum is updated")
    }, [myNum, message])

    //With return the code runs before Component is destroyed
    useEffect(() => {
        return () => console.log("This use Effect runs when Component is destroyed")
    })

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

    const variableAusConfig = process.env.REACT_APP_MY_CONFIG_VAR;



    return (
        <div>
            <div className="container">
                <h2>This is the second component</h2>
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
                <p>{variableAusConfig}</p>
            </div>
        </div>
    );
}

//du referenzierst die Bennenung deiner Methode
export default MySecondComponent;