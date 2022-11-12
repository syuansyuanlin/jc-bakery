import React from "react";
import img1 from "../images/552.png";
import img2 from "../images/722.JPG";
import img3 from "../images/552.png";

export class Cakeimages extends React.Component {
  
  render() {
    return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "rgb(237, 228, 224)" }}>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} className="d-block w-95 rounded mx-auto d-block" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={img2} className="d-block w-90" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={img3} className="d-block w-90" alt="..."></img>
        </div>
      </div>
    </div>
  )}
};
