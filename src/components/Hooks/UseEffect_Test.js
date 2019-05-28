import React, {useEffect} from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';


class UseEffect_Test extends React.Component {

    render() {
        return(
            <div>
                <h3> Hooks: useEffect Example </h3>
                <p>Should be called: "Used component did and will un-mount"</p>
                <ImageToggleOnScroll
                    primaryImg="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    secondaryImg="https://images.pexels.com/photos/2343509/pexels-photo-2343509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                />
            </div>
        );
    }
}

export default UseEffect_Test;