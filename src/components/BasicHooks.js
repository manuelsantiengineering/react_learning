import React from 'react';

import HookRules from "./HookComponents/HookRules";
import UseState_Test from "./HookComponents/UseState_Test";
import UseRef_Test from "./HookComponents/UseRef_Test";
import UseEffect_Test from "./HookComponents/UseEffect_Test";
import UseContext_Test from "./HookComponents/UseContext_Test";
import UseReducer_Test from "./HookComponents/UseReducer_Test"

export const ConfigContext = React.createContext();

const configValue = {
    showHook: true
};

const BasicHooks = () => {

    return(
        <div className="hook-tests">
            <HookRules/>
            <UseState_Test/>
            <br/>
            <UseRef_Test/>
            <br/>
            <UseEffect_Test/>
            <br/>
            <ConfigContext.Provider value={configValue}>
                <UseContext_Test/>
            </ConfigContext.Provider>
            <br/>
            <UseReducer_Test/>
        </div>
    );
}

export default BasicHooks;