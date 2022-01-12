import React, { Component } from "react";
import "./how.styles.css";
import apple from "../../assets/apple.svg";
import download from "../../assets/download.svg";
import register from "../../assets/register.svg";
import drone from "../../assets/drone.svg";
import google from "../../assets/google.svg";
import background from "../../assets/back.svg";
export default class How extends Component {
  render() {
    return (
      <div className="how-wrapper">
        <div id="how" style={{ backgroundImage: `url(${background})` }}>
          <div class="text">
            <h3>
              Get your free download of the Blood<span class="orange">HQ</span>{" "}
              app
            </h3>
            <div class="download-btn">
              <a href="#">
                <img src={apple} alt="apple" />
              </a>
              <a href="#">
                <img src={google} alt="apple" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="list-box">
            <img src={register} alt="" />
            <h3>Register</h3>
            <p>Register and fill in your verification details</p>
          </div>
          <div class="list-box">
            <img src={download} alt="" />
            <h3>Download</h3>
            <p>Download Mobile App</p>
          </div>
          <div class="list-box">
            <img src={drone} alt="" />
            <h3>Buy/Sell</h3>
            <p>Order and Sell blood </p>
          </div>
        </div>
      </div>
    );
  }
}
