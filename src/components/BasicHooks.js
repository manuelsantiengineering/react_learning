import React from 'react';

import HookRules from "./Hooks/HookRules";
import UseState_Test from "./Hooks/UseState_Test";
import UseRef_Test from "./Hooks/UseRef_Test";
import UseEffect_Test from "./Hooks/UseEffect_Test";
import UseContext_Test from "./Hooks/UseContext_Test";

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
        </div>
    );
}

export default BasicHooks;