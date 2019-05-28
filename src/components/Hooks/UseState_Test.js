import React, {useState} from 'react';

class UseState_Test extends React.Component {

    render() {
        return(
            <div>
                <h3> Hooks: useState Example </h3>
                <InputElement/>
            </div>
        );
    }
}

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    return(
        <div>
            <input
                onChange={ (event) =>{
                    setInputText(event.target.value)
                }}
                placeholder="Enter Some text here"
            /><br/>
            {inputText}
        </div>
    );
}

export default UseState_Test;