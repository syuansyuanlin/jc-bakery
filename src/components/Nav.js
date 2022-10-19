import React from "react";
import img from "../images/cake logo.png";

function click(e) {
  if (e.target.nextElementSibling.style.display) {
    e.target.nextElementSibling.style.display = null;
  } else {
    e.target.nextElementSibling.style.display = "block";
  }
}

function blur(e) {
  if (e.target.nextElementSibling.style.display) {
    e.target.nextElementSibling.style.display = null;
  }
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* LOGO */}
      <a className="navbar-brand" style={{ color: "rgb(70, 78, 46)" }} href="#">
        ケーキ屋
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse nav nav-pills nav-fill "
        id="navbarNav"
      >
        <ul className="navbar-nav ">
          {/* 首頁 */}
          <li className="nav-item  ">
            <a
              className="nav-link  "
              style={{ color: "rgb(85, 57, 57)" }}
              href="#"
            >
              首頁 <span className="sr-only ">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: "rgb(85, 57, 57)" }}
              href="#"
            >
              關於我們
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: "rgb(85, 57, 57)" }}
              href="#"
            >
              訂單查詢
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={(e) => click(e)}
              onBlur={(e) => blur(e)}
              style={{ color: "rgb(85, 57, 57)" }}
            >
              商品一覽
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                禮盒專區
              </a>
              <a className="dropdown-item" href="#">
                蛋糕系列
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                常溫甜點類
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
