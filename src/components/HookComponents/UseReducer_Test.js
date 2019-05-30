import React, {useReducer} from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";

import checkboxReducer from "../../reducers/checkboxReducer"

const UseReducer_Test = () => {

    const initialCheckboxes = [
        {
            id: 'a',
            task: 'Learn React JS',
            complete: false,
        },
        {
            id: 'b',
            task: 'Learn More React JS',
            complete: false,
        },
    ];
    //(previousState, action) => newState
    const [checkboxList, dispatch] = useReducer(checkboxReducer, initialCheckboxes);

    const handleChange = checkboxValue => {
        dispatch({
            type: checkboxValue.complete ? 'UNDO_CHECKMARK' : 'DO_CHECKMARK',
            id: checkboxValue.id
        });
    }


    return(
        <div>
            <h4> Hooks: useReducer Example </h4>
            <p>A reducer is simply a function that takes in a previous state as the first parameter,</p>
            <p>an action as the second parameter, and returns a new state.</p>
            <p>(previousState, action) => newState </p>
            <div className="container">
                <div className="row">
                    <ul className="list-group">
                        {checkboxList.map( (checkbox) => (
                            <li className="list-group-item" key={checkbox.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={checkbox.complete}
                                        onChange={() => handleChange(checkbox)}
                                    />
                                    {checkbox.task}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <input type="checkbox"/>
                <br/>
        </div>
    );
}

const Checkbox = ({}) => {

}


export default UseReducer_Test;