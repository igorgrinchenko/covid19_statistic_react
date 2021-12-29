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

const initialState = {
  country: "",
  code: "",
  errorMessage: "",
  confirmed: 0,
  recovered: 0,
  critical: 0,
  deaths: 0,
  isData: false,
  isLoader: false,
  isDark: false,
};

const setCountry = (state, action) => ({
  ...state,
  country: action.country,
});

const setCode = (state, action) => ({
  ...state,
  code: action.code,
});

const setConfirmedValue = (state, action) => ({
  ...state,
  confirmed: action.confirmed,
});

const setRecoveredValue = (state, action) => ({
  ...state,
  recovered: action.recovered,
});

const setCriticalValue = (state, action) => ({
  ...state,
  critical: action.critical,
});

const setDeathsValue = (state, action) => ({
  ...state,
  deaths: action.deaths,
});

const setIsData = (state, action) => ({
  ...state,
  isData: action.isData,
});

const setIsLoader = (state, action) => ({
  ...state,
  isLoader: action.isLoader,
});

const setErrorMessage = (state, action) => ({
  ...state,
  errorMessage: action.errorMessage,
});

const setIsDark = (state, action) => ({
  ...state,
  isDark: action.isDark,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return setCountry(state, action);
    case SET_CODE:
      return setCode(state, action);
    case SET_CONFIRMED_VALUE:
      return setConfirmedValue(state, action);
    case SET_RECOVERED_VALUE:
      return setRecoveredValue(state, action);
    case SET_CRITICAL_VALUE:
      return setCriticalValue(state, action);
    case SET_DEATHS_VALUE:
      return setDeathsValue(state, action);
    case SET_IS_DATA:
      return setIsData(state, action);
    case SET_IS_LOADER:
      return setIsLoader(state, action);
    case SET_ERROR_MESSAGE:
      return setErrorMessage(state, action);
    case SET_IS_DARK:
      return setIsDark(state, action);
    default:
      return state;
  }
};

export default reducer;
