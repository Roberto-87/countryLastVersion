const axios = require("axios");
const { Country } = require("../db.js");

const getApiData = async () => {
  try {
    const response = await axios("https://restcountries.com/v3/all");
    if (!response) throw new Error("error en la request");

    const countries = response.data.map((country) => {
      return {
        id: country?.cca3,
        name: country?.name.official,
        image: country?.flags[1],
        continent: country.region,
        capital: country.capital ? country.capital[0] : "None",
        subregion: country?.subregion,
        area: country?.area,
        population: country?.population,
      };
    });

    return countries;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const apiResponse = await getApiData();
    await Country.bulkCreate(apiResponse); //al método bulkcreate le podemos pasar un array para que cree todos juntos en la dvb
    return apiResponse;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = saveApiData;
