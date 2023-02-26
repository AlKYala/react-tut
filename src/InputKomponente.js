import {useState} from "react";
import {setCounter, setMyText} from "./redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

function InputKomponente() {

    const disptach = useDispatch();

    let text = useSelector((state) => state.text);
    text = (text == null) ? '' : text;

    const[myTextInput, setMyTextInput] = useState(text);
    const[myBooleanInput, setMyBooleanInput] = useState(false);

    const handleTextChange = (val) => {
        setMyTextInput(val);
        disptach(setMyText(val));
    }

    const flipBoolean = () => {
        setMyBooleanInput(!myBooleanInput);
    }

    const myMap = [{key0: "val0"}, {key1: "val1"}, {key2: "val2"}]

    const myArr = ["elem0", "elem1", "elem2"];

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={myTextInput} aria-label="Username"
                       onChange={(event) => handleTextChange(event.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       onChange={() => flipBoolean()}
                       checked={myBooleanInput} id="flexCheckChecked" />
            </div>
            {myBooleanInput && <p> Box value true </p>}
            {
                myArr.map((elem) => <p>{elem}</p>)
            }
            {
                myMap.map((key, value) => <p>{value}</p>)
            }
        </div>
    );
}

export default InputKomponente;