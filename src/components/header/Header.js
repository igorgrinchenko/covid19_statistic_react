import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cn from "classnames";
import CustomizedSwitches from "../../components/modeSwitcher/modeSwitcher";

import logo from "../../images/covid19_logo.png";
import { home, info, more } from "../../constants/constants";

import "./Header.scss";

const Header = ({ isDark }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation">
        <Link className={cn("link", { darkMode: isDark })} to="/homepage">
          {home}
        </Link>
        <Link className={cn("link", { darkMode: isDark })} to="/info">
          {info}
        </Link>
        <Link className={cn("link", { darkMode: isDark })} to="/articles">
          {more}
        </Link>
      </div>
      <CustomizedSwitches />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

export default connect(mapStateToProps)(Header);
