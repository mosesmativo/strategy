import React from "react";

const Image = ({ pic }) => {
  try {
    // Import image on demand../images/
    const image = require(`../images/${pic}`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return <img src={image} alt={pic} width="100%"/>;
  } catch (error) {
    console.log(`Image with name "${pic}" does not exist`);
    return null;
  }
};

export default Image;