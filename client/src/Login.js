import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../src/assets/images/pngwing.com (18).png";
import { useProductContext } from "./context/ProductContext";
import styled from "styled-components";

const Login = () => {
  const { setToggle } = useProductContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleInput = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Login successful");
      setToggle(true);
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <div className="register">
        <div className="register-img">
          <figure>
            <img src={img} alt="" />
          </figure>
          <NavLink to="/register" className="log">
            Create an account
          </NavLink>
        </div>
        <div className="login-form">
          <h1>Login</h1>
          <form action="" className="form-group">
            <div className="form-input">
              <label htmlFor="email">
                <i className="fa fa-user"></i>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-input">
              <label htmlFor="cpassword">
                <i className="fa fa-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Confirm your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn-div">
              <input
                type="submit"
                value="Submit"
                className="btn"
                onClick={handleInput}
              />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .register {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .register-img {
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      img {
        height: 400px;
        margin-top: 20px;
      }
      .log {
        font-size: 30px;
        margin: 20px;
      }
    }
    .login-form {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      width: 50%;
      h1 {
        font-size: 6rem;
        opacity: 0.5;
        margin: 10px;
      }
      .form-group {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        input {
          width: 350px;
          margin-bottom: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.sm}) {
    .register {
      flex-direction: column;
      h1 {
        text-align: center;
      }
      input {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    .register {
      flex-direction: column;
      h1 {
        text-align: center;
      }
      input {
        width: 100%;
      }
    }
  }
`;

export default Login;
