import React from "react";
import img from "../images/ケーキ屋.gif";

export const Cakeimages = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{ backgroundColor: "rgb(237, 228, 224)" }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={img}
            class="d-block w-90 rounded mx-auto d-block"
            alt="..."
          ></img>
        </div>
        <div class="carousel-item">
          <img src={img} class="d-block w-90" alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={img} class="d-block w-90" alt="..."></img>
        </div>
      </div>
    </div>
  );
};
