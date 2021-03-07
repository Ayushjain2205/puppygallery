import React from "react";

const Title = () => {
  return (
    <div className='title'>
      <img className='logo_image' src={require("../doggo.png")} />
      <h1>PuppyGallery</h1>
      <h2>Your Cute Corgi Pictures</h2>
      <p>Upload all your cute puppy pictures and build your collection!</p>
    </div>
  );
};

export default Title;
