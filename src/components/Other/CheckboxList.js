import React, {useReducer} from 'react';

import checkboxReducer from "../../reducers/checkboxReducer";

const CheckboxList = () => {
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
        <div className="container">
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
    );
}

export default CheckboxList;