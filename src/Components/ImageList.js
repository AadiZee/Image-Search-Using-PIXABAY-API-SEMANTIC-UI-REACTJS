import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img
        className="ui rounded image centered"
        key={image.id}
        src={image.webformatURL}
        alt="Something"
      />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
