import React from "react";
import data from "./data";
import SimpleImageSlider from "react-simple-image-slider";

// 'src/components/assets/4.jpg'
const images = data.map((img) => Object.assign({ url: img }));

console.log(images);
function Main() {
  return (
    <div className="container">
      <SimpleImageSlider
        width={"100%"}
        height={"80vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Main;
