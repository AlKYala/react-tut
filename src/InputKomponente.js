import {useState} from "react";

function InputKomponente() {

    const[myTextInput, setMyTextInput] = useState('Default Val');
    const[myBooleanInput, setMyBooleanInput] = useState(false);

    const handleTextChange = (val) => {
        setMyTextInput(val);
    }

    const flipBoolean = () => {
        setMyBooleanInput(!myBooleanInput);
    }

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
        </div>
    );
}

export default InputKomponente;