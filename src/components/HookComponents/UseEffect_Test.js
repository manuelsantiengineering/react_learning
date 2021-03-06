import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';


class UseEffectTest extends React.Component {

    render() {
        return(
            <div>
                <h4> Hooks: useEffect Example </h4>
                <p>Should be called: "Used component did and will un-mount"</p>
                <p>Gives us a clean way to set things (Usually state) when components start and finish</p>
                <ImageToggleOnScroll
                    primaryImg="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    secondaryImg="https://images.pexels.com/photos/2343509/pexels-photo-2343509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                />
            </div>
        );
    }
}

export default UseEffectTest;