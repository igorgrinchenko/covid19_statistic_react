import React from "react";
import cn from "classnames";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../header/Header";
import HomePage from "../home/HomePage";
import InfoPage from "../info/InfoPage";
import Article from "../articles/Article";
import LanguageModal from "../../components/modal/LanguageModal";

import "./App.scss";

const App = ({ isDark }) => (
  <div className={cn("App", { darkMode: isDark })}>
    <div className="container">
      <Header />
      <LanguageModal />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/articles" element={<Article />} />
      </Routes>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

export default connect(mapStateToProps)(App);
