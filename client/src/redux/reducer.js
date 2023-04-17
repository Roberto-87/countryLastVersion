import {
  GET_COUNTRIES,
  GET_COUNTRY,
  FILTER_CONTINENT,
  GET_ACTIVITIES,
  ORDER_COUNTRY,
  ORDER_POPULATION,
  GET_COUNTRY_NAME,
  CLEAN_DETAIL,
  FILTER_BY_ACTIVITY,
} from "./types";

const initialState = {
  countries: [],
  activities: [],
  countryDetail: {},
  countryByContinent: [],
  countryByPopulation: [],
  countryByAlpha: [],
  countryByActivity: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      }; //nuevo obj, el nuevo estado

    case GET_COUNTRY:
      return { ...state, countryDetail: action.payload };

    case FILTER_CONTINENT:
      const continentFiltered = state.countries?.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        countryByContinent: continentFiltered,
      };

    case ORDER_POPULATION:
      if (!state.countryByContinent.length) {
        return {
          ...state,
          countries:
            action.payload === "Ascendente"
              ? state.countries?.sort((a, b) => a.population - b.population)
              : state.countries?.sort((a, b) => b.population - a.population),
        };
      } else if (state.countryByContinent.length) {
        return {
          ...state,
          countryByPopulation:
            action.payload === "Ascendente"
              ? state.countryByContinent?.sort(
                  (a, b) => a.population - b.population
                )
              : state.countryByContinent?.sort(
                  (a, b) => b.population - a.population
                ),
        };
      }

    // eslint-disable-next-line no-fallthrough
    case ORDER_COUNTRY:
      if (!state.countryByContinent.length) {
        return {
          ...state,
          countryByAlpha:
            action.payload === "Ascendente"
              ? state.countries?.sort((a, b) => a.name.localeCompare(b.name))
              : state.countries?.sort((a, b) => b.name.localeCompare(a.name)),
        };
      } else if (state.countryByContinent) {
        return {
          ...state,
          countryByPopulation:
            action.payload === "Ascendente"
              ? state.countryByContinent?.sort((a, b) =>
                  a.name.localeCompare(b.name)
                )
              : state.countryByContinent?.sort((a, b) =>
                  b.name.localeCompare(a.name)
                ),
        };
      } else if (!state.countryByContinent && state.population) {
        return {
          ...state,
          countryByAlpha:
            action.payload === "Ascendente"
              ? state.countries?.sort((a, b) => a.name.localeCompare(b.name))
              : state.countries?.sort((a, b) => b.name.localeCompare(a.name)),
        };
      }

    // eslint-disable-next-line no-fallthrough
    case FILTER_BY_ACTIVITY:
      if (state.countryByContinent.length) {
        const filteredCountriesByContinent = state.countryByContinent.filter(
          (country) =>
            country.Activities.some((act) => Number(act.id) === action.payload)
        );
        return { ...state, countryByActivity: filteredCountriesByContinent };
      } else {
        const filteredCountries = state.countries.filter((country) =>
          country.Activities.some((act) => Number(act.id) === action.payload)
        );
        return { ...state, countryByActivity: filteredCountries };
      }

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case GET_COUNTRY_NAME:
      return { ...state, countries: action.payload };

    case CLEAN_DETAIL:
      return { ...state, countryDetail: {} };

    default:
      return { ...state };
  }
};

export default reducer;

/* 

 */
