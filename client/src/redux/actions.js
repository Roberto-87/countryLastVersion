import {
  GET_COUNTRIES,
  GET_COUNTRY,
  COUNTRY_NAME,
  POST_ACTIVITIES,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES,
  ORDER_COUNTRY,
  FILTER_CONTINENT,
  ORDER_POPULATION,
  FILTER_ACTIVITY_SEASON,
  GET_COUNTRY_NAME,
  CLEAN_DETAIL,
} from "./types";
import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    // applyMiddleware(thunk)
    const response = await axios("/countries");
    const countries = response.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const response = await axios(`/countries/${id}`);
    const country = response.data;
    dispatch({ type: GET_COUNTRY, payload: country });
  };
};

export const filterByContinent = (continentId) => {
  return {
    type: FILTER_CONTINENT,
    payload: continentId,
  };
};

export const orderCountries = (order) => {
  return {
    type: ORDER_COUNTRY,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const filterBySeason = (season) => {
  return {
    type: FILTER_ACTIVITY_SEASON,
    payload: season,
  };
};

export const filterByName = (name) => {
  return async function (dispatch) {
    const response = await axios(`/countries?name=${name}`);
    const country = response.data;
    dispatch({ type: GET_COUNTRY_NAME, payload: country });
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const response = await axios("/activities");
    const activities = response.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

export const filterByActivity = (activityId) => {
  return { type: FILTER_BY_ACTIVITY, payload: Number(activityId) };
};
