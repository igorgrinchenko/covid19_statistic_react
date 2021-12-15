import React from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import cn from "classnames";
import { readMore, googleSearch, blank } from "../../constants/constants";

import "./index.scss";

const ErrorInfo = ({ errorMessage, isDark }) => {
  return (
    <>
      {errorMessage && (
        <>
          <h2 className={cn("error-info", { darkMode: isDark })}>
            {errorMessage}
          </h2>
          <div className="button-wrapper">
            <Button color="inherit" variant="outlined">
              <a
                className={cn("link", { darkMode: isDark })}
                href={`${googleSearch}${errorMessage}`}
                target={blank}
              >
                {readMore}
              </a>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

export default connect(mapStateToProps)(ErrorInfo);
