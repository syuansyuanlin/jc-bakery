import React from "react";
import img from "../images/cake1.jpg";

const cakes = [
  {
    name: "紅茶戚風蛋糕",
    price: "300",
    description:
      "大量使用英國TWININGS伯爵茶葉，細心地萃取茶葉精華，將色澤、香氣與口感完美融合。",
  },
  {
    name: "巧克力戚風蛋糕",
    price: "500",
    description:
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是小朋友們都愛不釋手的招牌口味。",
  },
  {
    name: "草莓戚風蛋糕",
    price: "400",
    description:
      "將法國進口的新鮮果泥逐漸融入蛋糕中，在夢幻的粉紅色澤下，給您繽紛的甜蜜滋味。",
  },
  {
    name: "抹茶戚風蛋糕",
    price: "600",
    description:
      "採用日本丸久小山園抹茶粉，茶香濃厚、香醇不苦，入口即感受滿滿茶香的感動。",
  },
];

function CakeCard() {
  return (
    <div className="container">
      <ul className="row">
        {cakes.map((cake, index) => (
          <li key={cake.name} className="card col m-1 p-1">
            <img class="card-img-top" src={img} alt=""></img>

            <div
              className="card-body"
              style={{ fontSize: 14, color: "rgb(89, 69, 69)" }}
            >
              {/* 商品名稱 */}
              <div
                style={{ fontSize: 16, color: "rgb(70, 78, 46)" }}
                className="p-1"
              >
                {cake.name}
              </div>
              {/* 價格 */}
              <div className="card-text P-2">NT${cake.price}</div>
              {/* 描述 */}
              <div className="p-2 mb-1">{cake.description}</div>
              <a
                href="#"
                style={{
                  backgroundColor: "rgb(150, 126, 118)",
                  fontSize: 14,
                  color: "rgb(254, 251, 246)",
                }}
                class="btn btn-light"
              >
                加入購物車
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CakeCard;
