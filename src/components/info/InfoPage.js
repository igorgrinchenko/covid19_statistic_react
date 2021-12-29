import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import SearchField from "../searchField/SearchField";
import InfoList from "./InfoList";
import ErrorInfo from "./ErrorInfo";

import {
  setCountry,
  setCode,
  setConfirmedValue,
  setRecoveredValue,
  setCriticalValue,
  setDeathsValue,
  setIsData,
  setIsLoader,
  setErrorMessage,
} from "../../actions/action.js";

import {
  methodGet,
  url,
  headers,
  loaderType,
  loaderColor,
} from "../../constants/constants";

import "./index.scss";

const InfoPage = ({
  setCountry,
  setCode,
  setConfirmedValue,
  setRecoveredValue,
  setCriticalValue,
  setDeathsValue,
  setIsData,
  setIsLoader,
  setErrorMessage,
  isData,
  isLoader,
  errorMessage,
}) => {
  const getLatestCountryDataByName = (countryName) => {
    setIsLoader(true);
    setIsData(false);
    const options = {
      method: methodGet,
      url,
      params: { name: `${countryName}` },
      headers,
    };
    axios
      .request(options)
      .then((response) => {
        if (response.data.length) {
          setIsData(true);
          const { country, code, confirmed, recovered, critical, deaths } =
            response.data[0];

          setCountry(country);
          setCode(code);
          setConfirmedValue(confirmed);
          setRecoveredValue(recovered);
          setCriticalValue(critical);
          setDeathsValue(deaths);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message.toUpperCase());
      })
      .finally(() => setIsLoader(false));
  };

  return (
    <div className="info-page">
      <SearchField getLatestCountryDataByName={getLatestCountryDataByName} />
      {isLoader ? (
        <Loader
          type={loaderType}
          color={loaderColor}
          height={100}
          width={100}
        />
      ) : isData ? (
        <InfoList />
      ) : (
        <ErrorInfo errorMessage={errorMessage} />
      )}
    </div>
  );
};

const mapStateToProps = ({ isData, isLoader, errorMessage }) => ({
  isData,
  isLoader,
  errorMessage,
});

const mapDispatchToProps = {
  setCountry,
  setCode,
  setConfirmedValue,
  setRecoveredValue,
  setCriticalValue,
  setDeathsValue,
  setIsData,
  setIsLoader,
  setErrorMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
