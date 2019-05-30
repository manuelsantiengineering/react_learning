import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg, height, width}) => {
    const imageRef = useRef(null);
    return(
        <div className="container">
            <img
                onMouseOver={() => {
                    imageRef.current.src = secondaryImg;
                }}
                onMouseOut={() => {
                    imageRef.current.src = primaryImg;
                }}
                ref={imageRef}
                src={primaryImg}
                height={height}
                width={width}
                alt=""
            />
        </div>
    );

};

export default ImageToggleOnMouseOver;