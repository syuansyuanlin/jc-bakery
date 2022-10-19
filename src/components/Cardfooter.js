import React from "react";
import img from "../images/cake logo.png";

const Cardfooter = () => {
  return (
    <div>
      <div class="card">
        <div
          class="card-header"
          style={{
            borderBottom: "none",
            backgroundColor: "mistyrose",
            color: "rgb(89, 69, 69) ",
          }}
        >
          Jessie's ケーキ屋
        </div>

        <div class="card-body">
          <h5
            class="card-title"
            style={{ fontSize: 15, color: "rgb(89, 69, 69)" }}
          >
            實體店面：台中市北屯區蛋糕二街76號
          </h5>

          <a href="#" style={{ color: "rgb(135, 128, 94)" }} class="m-1 p-1">
            關於我們
          </a>
          <a href="#" style={{ color: "rgb(135, 128, 94)" }} class="m-1 p-1 ">
            最新消息
          </a>
          <a href="#" style={{ color: "rgb(135, 128, 94)" }} class="m-1 p-1 ">
            聯絡我們
          </a>
          <a href="#" style={{ color: "rgb(135, 128, 94)" }} class="m-1 p-1 ">
            訂單查詢
          </a>
          <a href="#" style={{ color: "rgb(135, 128, 94)" }} class="m-1 p-1 ">
            會員專區
          </a>
          <p
            class="card-text p-3"
            style={{ fontSize: 13, color: "rgb(89, 69, 69)" }}
          >
            Copyright © 2022 Jessie日式手工蛋糕店 all rights reserved.
          </p>
          <img src={img}></img>
        </div>
      </div>
    </div>
  );
};

export default Cardfooter;
