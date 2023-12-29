import React from "react";
import "../styles/Home.css";
import'../index.css'
import Mode from "../components/Mode";
const Home = () => {
  return (
    <div className="container">
      <div className="leftbar">
        <h2 className="header__title">
          Welcome to the <br />
          <span className="bold">Frontend Quiz</span>
        </h2>
        <p className="description">Pick a subject to get started...</p>
        <a href="../test">Test jsx</a>
      </div>
      <div className="rightbar">
        <Mode/>
      </div>
    </div>
  );
};

export default Home;
