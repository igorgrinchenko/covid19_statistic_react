import React from "react";
import { connect } from "react-redux";
import cn from "classnames";

import "./index.scss";

const InfoList = ({
  country,
  confirmed,
  recovered,
  critical,
  deaths,
  isDark,
}) => (
  <ul className={cn("info-list", { darkMode: isDark })}>
    <li>Country: {country}</li>
    <li>Confirmed: {confirmed}</li>
    <li>Recovered: {recovered}</li>
    <li>Critical: {critical}</li>
    <li>Deaths: {deaths}</li>
  </ul>
);
const mapStateToProps = ({
  country,
  confirmed,
  recovered,
  critical,
  deaths,
  isDark,
}) => ({
  country,
  confirmed,
  recovered,
  critical,
  deaths,
  isDark,
});

export default connect(mapStateToProps)(InfoList);
