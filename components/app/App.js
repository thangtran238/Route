import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Content from "../body/content";
import Test from "../body/Test";
import Bai5 from "../body/Bai5";
import LoginForm from "../body/loginForm";
import Form from "../body/Form";
import Menu from "../body/Menu";
function App() {
  return (
    <div id="container">
      <Header />
      {/* this is content area */}
      <Menu />
      {/* footer content */}
      <Footer />
    </div>
  );
}

export default App;
