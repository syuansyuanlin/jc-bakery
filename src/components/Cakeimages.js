import React from "react";
import img from "../images/cake1.jpg";
import img2 from "../images/cake2.jpg";

export const Cakeimages = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={img} class="d-block w-100" alt="..."></img>
        </div>
      </div>
    </div>
  );
};
