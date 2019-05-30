import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css";

import CheckboxList from "../Other/CheckboxList"

const UseReducerTest = () => {

    return(
        <div className="container">
            <div className="row">
                <h4> Hooks: useReducer Example </h4>
                <p>A reducer is simply a function that takes in a previous state as the first parameter,</p>
                <p>an action as the second parameter, and returns a new state.</p>
                <p>(previousState, action) => newState </p>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <CheckboxList />
                </div>
            </div>
            <br/>
        </div>
    );
}

export default UseReducerTest;