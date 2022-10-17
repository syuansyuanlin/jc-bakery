import React from "react";

const Cardfooter = () => {
  return (
    <div>
      <div class="card">
        <div class="card-header" style={{ backgroundColor: "mistyrose" }}>
          Jessie's ケーキ屋
        </div>
        <div class="card-body">
          <h5 class="card-title" style={{ fontSize: 15 }}>
            實體店面：台中市北屯區蛋糕二街76號
          </h5>

          <a href="#" class="m-1 p-1">
            關於我們
          </a>
          <a href="#" class="m-1 p-1 ">
            最新消息
          </a>
          <a href="#" class="m-1 p-1 ">
            聯絡我們
          </a>
          <a href="#" class="m-1 p-1 ">
            訂單查詢
          </a>
          <a href="#" class="m-1 p-1 ">
            會員專區
          </a>
          <p class="card-text p-1">
            Copyright © 2022 Jessie日式手工蛋糕店 all rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardfooter;
