import React from "react";
import "../styles/Login.css";
export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              帳號
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              密碼
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              記住我
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            登入
          </button>
        </form>
      </div>
    );
  }
}
