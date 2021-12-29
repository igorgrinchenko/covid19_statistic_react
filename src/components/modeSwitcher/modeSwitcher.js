import { React } from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import { connect } from "react-redux";
import cn from "classnames";
import { setIsDark } from "../../actions/action";
import MaterialUISwitch from "./MaterialUISwitch";

import "./modeSwitcher.scss";

const CustomizedSwitches = ({ setIsDark, isDark }) => (
  <FormGroup>
    <FormControlLabel
      className={cn("switcher", { darkMode: isDark })}
      control={
        <MaterialUISwitch
          onClick={() => setIsDark(!isDark)}
          sx={{ m: 1 }}
          defaultChecked={isDark}
        />
      }
      label={`Dark mode ${isDark ? "ON" : "OFF"}`}
    />
  </FormGroup>
);

const mapStateToProps = ({ isDark }) => ({
  isDark,
});

const mapDispatchToProps = {
  setIsDark,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSwitches);
