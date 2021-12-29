import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { hereWillBeArticles } from "../../constants/constants";

import "./Article.scss";

const Article = ({ isDark }) => (
  <h2 className={cn("article-info", { darkMode: isDark })}>
    {hereWillBeArticles}
  </h2>
);

const mapStateToProps = ({ isDark }) => ({
  isDark,
});

export default connect(mapStateToProps)(Article);
