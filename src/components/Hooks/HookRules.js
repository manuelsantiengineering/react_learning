import React from 'react';

class HookRules extends React.Component{

    render(){
        return(
            <div>
                <h2>React Hook Rules</h2>
                <ul>
                    <li>React relies on the order in which Hooks are called.</li>
                    <li>ONLY Call React Hooks from Function Components.</li>
                    <li>DON'T call Hooks inside loops, conditions, or nested functions.</li>
                    <li>DON'T Call Hooks from regular JS functions.</li>
                </ul>
            </div>
        );
    }
}

export default HookRules;