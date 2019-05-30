import React, {useContext} from 'react';

import {ConfigContext} from "../BasicHooks";

const UseContextTest = () =>{

    const context = useContext(ConfigContext);

    return(
        <div>
            <h4> Hooks: useContext Example </h4>
            <p>Lets you add information to thje class through a side channel.</p>
            <p>Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.</p>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level..</p>
            <div>
                { context.showHook === false ? null : (
                    <div>
                        <img
                            src="https://images.pexels.com/photos/2000294/pexels-photo-2000294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            height="200"
                            width="400"
                            alt=""
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UseContextTest;