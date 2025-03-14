import "./home.css";
import { TOPMODEL } from "../../data/topmodel";
import { Samsung } from "../../data/samsung";
import { Xiaomi } from "../../data/xiaomi";
import ProductHome from "./ProductHome";
import React from "react";
import baner from "../../assets/galaxy-s25-ultra-features-kv.jpg";
import iconefalash from "../../assets/iconeflash.jpg";
import youtubicon from "../../assets/youtube-icon.png";
import twitter from "../../assets/twitter-icon.png";
import github from "../../assets/github-icon.png";
import telegram from "../../assets/telegram-black-icon.png";
const Home = () => {
  return (
    <React.Fragment>
      <div className="top_container">
        <div className="home_container">
          <div className="header">
            <div className="header_baner">
              <img src={baner} className="baner_img" />
              {/* <h1>the best phone is here</h1> */}
            </div>
          </div>
          <hr />
          {/* top models */}
          <div className="home_phone_container">
            <div className="icon_title_wrapper">
              <img src={iconefalash} className="home_icone" />
              <h1 className="title_Home_phone"> The Top Models </h1>
            </div>

            <div className="Home_wrapper">
              {TOPMODEL.map((productdata) => {
                return <ProductHome key={productdata.id} data={productdata} />;
              })}
            </div>
          </div>
         

          {/* samsung */}
        </div>
        <div className="samsung_container">
          <div className="icon_title_wrapper">
            <img src={iconefalash} className="home_icone" />
            <h1 className="title_Home_phone"> Samsung Phone</h1>
          </div>

          <div className="samsung_wrapper">
            {Samsung.map((productdata) => {
              return <ProductHome key={productdata.id} data={productdata} />;
            })}
          </div>
        </div>
        <hr />
        {/* xiaomi */}
        <div className="xiaomi_container">
          <div className="icon_title_wrapper">
            <img src={iconefalash} className="home_icone" />
            <h1 className="title_Home_phone"> Xiaomi Phone</h1>
          </div>
          <div className="xiaomi_wrapper">
            {Xiaomi.map((productdata) => {
              return <ProductHome key={productdata.id} data={productdata} />;
            })}
          </div>
        </div>
        <hr />
        {/* footer */}
        <footer className="footer_cantainer">
          <div className="footer_header">
            <h1 className="title_text_footer">About This Page</h1>
            <p className="p_text_footer">
              This is a store website. which is developed with technologies such
              as html, css, java script and React library. I hope you like this
              site
            </p>
          </div>
          <hr></hr>
          <div className="footer_wrapper">
            <h1 className="text_part2_footer">
              © 2025 All Rights Reserved. | Privacy Policy | Disclaimer
            </h1>
            <div className="icon_wrapper">
              <a href="#" className="footer_icon">
                <img src={youtubicon} className="footer_img" />
              </a>
              <a href="#" className="footer_icon">
                <img src={twitter} className="footer_img" />
              </a>
              <a href="#" className="footer_icon">
                <img src={github} className="footer_img" />
              </a>
              <a href="#" className="footer_icon">
                <img src={telegram} className="footer_img" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
