import {
  SET_COUNTRY,
  SET_CODE,
  SET_CONFIRMED_VALUE,
  SET_RECOVERED_VALUE,
  SET_CRITICAL_VALUE,
  SET_DEATHS_VALUE,
  SET_IS_DATA,
  SET_IS_LOADER,
  SET_ERROR_MESSAGE,
  SET_IS_DARK,
} from "../constants/actionTypeConstants";

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  country,
});

export const setCode = (code) => ({
  type: SET_CODE,
  code,
});

export const setConfirmedValue = (confirmed) => ({
  type: SET_CONFIRMED_VALUE,
  confirmed,
});

export const setRecoveredValue = (recovered) => ({
  type: SET_RECOVERED_VALUE,
  recovered,
});

export const setCriticalValue = (critical) => ({
  type: SET_CRITICAL_VALUE,
  critical,
});

export const setDeathsValue = (deaths) => ({
  type: SET_DEATHS_VALUE,
  deaths,
});

export const setIsData = (isData) => ({
  type: SET_IS_DATA,
  isData,
});

export const setIsLoader = (isLoader) => ({
  type: SET_IS_LOADER,
  isLoader,
});

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});

export const setIsDark = (isDark) => ({
  type: SET_IS_DARK,
  isDark,
});
