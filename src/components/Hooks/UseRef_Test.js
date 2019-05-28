import React from 'react';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

class UseRef_Test extends React.Component {

    render() {
        return(
            <div>
                <h3> Hooks: useRef Example </h3>
                <ImageToggleOnMouseOver
                    primaryImg="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    secondaryImg="https://images.unsplash.com/photo-1556421152-2a050d3bf22a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt=""
                />
            </div>
        );
    }
}

// const ImageChangeOnMouseOver = () => {
//
//     return(
//         <div>
//             <ImageToggleOnMouseOver
//                 primaryImg="/static/remy.jpg"
//                 secondaryImg="/static/coco_Hector.png"
//                 alt=""
//             />
//         </div>
//     );
// }

export default UseRef_Test;