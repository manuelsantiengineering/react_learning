import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    return(
        <img
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }}
            ref={imageRef}
            src={primaryImg}
            height="200"
            width="400"
            alt=""
        />
    );

};

export default ImageToggleOnMouseOver;