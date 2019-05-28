import React, {useEffect, useState, useRef} from 'react';

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return(() => {
            window.addEventListener("scroll", scrollHandler);
        });
    });

    const [inView, setInView] = useState(false, );

    const isInView = () => {
        if(imageRef.current){
            const rect = imageRef.current.getBoundingClientRect();
            return (rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
        return false;
    };

    const scrollHandler = () => {
      setInView(() => {
          return isInView();
      })
    };

    return(
        <img
            ref={imageRef}
            src={inView ? secondaryImg : primaryImg}
            height="200"
            width="400"
            alt=""
        />
    );

};

export default ImageToggleOnScroll;