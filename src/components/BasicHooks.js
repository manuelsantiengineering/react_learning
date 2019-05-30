import React from 'react';

import HookRules from "./HookComponents/HookRules";
import UseStateTest from "./HookComponents/UseState_Test";
import UseRefTest from "./HookComponents/UseRef_Test";
import UseEffectTest from "./HookComponents/UseEffect_Test";
import UseContextTest from "./HookComponents/UseContext_Test";
import UseReducerTest from "./HookComponents/UseReducer_Test"
import UseCallbackTest from "./HookComponents/UseCallback_Test"

export const ConfigContext = React.createContext();

const configValue = {
    showHook: true
};

const BasicHooks = () => {

    return(
        <div className="hook-tests">
            <HookRules/>
            <UseStateTest/>
            <br/>
            <UseRefTest/>
            <br/>
            <UseEffectTest/>
            <br/>
            <ConfigContext.Provider value={configValue}>
                <UseContextTest/>
            </ConfigContext.Provider>
            <br/>
            <UseReducerTest/>
            <br/>
            <UseCallbackTest/>
            <br/>
        </div>
    );
}

export default BasicHooks;