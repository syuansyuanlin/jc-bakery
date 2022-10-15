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
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是小朋友們都愛不釋手的招牌口味。",
  },
  {
    name: "伯爵茶戚風蛋糕",
    price: "600",
    description:
      "上選優質高純度巧克力製作，口味、香味、風味兼具的絕讚品，是小朋友們都愛不釋手的招牌口味。",
  },
];

function CakeCard() {
  return (
    <div className="container">
      <ul className="row">
        {cakes.map((cake, index) => (
          <li key={cake.name} className="card col m-1 p-1">
            <img class="card-img-top" src={img} alt=""></img>

            <div className="card-body">
              <div className="card-title">{cake.name}</div>
              <div className="card-text">$ {cake.price}</div>
              <div className="">{cake.description}</div>
              <a href="#" class="btn btn-outline-warning">
                商品介紹
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CakeCard;
