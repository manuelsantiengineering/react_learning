import React from 'react';

import HookRules from "./Hooks/HookRules";
import UseState_Test from "./Hooks/UseState_Test";
import UseRef_Test from "./Hooks/UseRef_Test";
import UseEffect_Test from "./Hooks/UseEffect_Test";

class BasicHooks extends React.Component {

    render() {
        return(
            <div className="hook-tests">
                <HookRules/>
                <UseState_Test/>
                <br/>
                <UseRef_Test/>
                <br/>
                <UseEffect_Test/>
            </div>
        );
    }
}

export default BasicHooks;