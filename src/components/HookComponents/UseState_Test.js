import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";


class UseStateTest extends React.Component {

    render() {
        return(
            <div>
                <h4> Hooks: useState Example </h4>
                <p>Lets us track state of a component.</p>
                <InputElement/>
            </div>
        );
    }
}

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <input
                        onChange={ (event) =>{
                            setInputText(event.target.value)
                        }}
                        placeholder="Enter Some text here"
                    /><br/>
                </div>
                <div className="col-md-6">
                    {inputText}
                </div>
            </div>
        </div>
    );
}

export default UseStateTest;