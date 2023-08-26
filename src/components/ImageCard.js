import React, { useState } from 'react';

const ImageCard = (props) => {  
  const [isError, setIsError] = useState(false);
  const ImageNotAvailable = "https://pbs.twimg.com/media/ER3cOugVAAIxavx?format=png&name=900x900";
  

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <div>
      {isError ? (
        <img
        src={ImageNotAvailable}
        alt={props.alt}
        onError={handleImageError}
        style={{
           height:"clamp(10rem, 90%, 12rem)"
        }}
      />
      ) : (
        <img
          src={props.src}
          alt={props.alt}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ImageCard;
