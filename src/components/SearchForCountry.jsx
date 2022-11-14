import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchForCountry = () => {
  const [countryData, setCountryData] = useState({});
  const [inputValue, setInputValue] = useState("");

  const submit = (e) => {
    e.preventDefault();

    axios
      .get(`https://disease.sh/v3/covid-19/countries/${inputValue}`)
      .then((res) => setCountryData(res.data));
    setCountryData({});
  };
  return (
    <div className="Component-SearchForCountry">
      <form onSubmit={submit}>
        <label htmlFor="countryName">
          <h2>Search by Country</h2>
        </label>
        <div className="containerInputSearch">
          <input
            className="inputSearch"
            type="text"
            name=""
            id="countryName"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button className="buttonSearch">search</button>
        </div>
      </form>

      <div className="resultsOfSearch">
        <div>
          <h2>{countryData.country}</h2>
          <div className="CountryDetails">
            <p>{countryData.continent}</p>
            <p>
              Population:<span>{countryData.population}</span>
            </p>
          </div>
          <div>
            <img src={countryData.countryInfo?.flag} />
          </div>
        </div>
        <div>
          
          <section>
            <h2>Today</h2>
            <div>
              <p>
                Today cases: <span>{countryData.todayCases}</span>
              </p>
              <p>
                Today deaths: <span>{countryData.todayDeaths}</span>
              </p>
              <p>
                Today recovered: <span>{countryData.todayRecovered}</span>
              </p>
            </div>
          </section>

          <section>
            <h2>information</h2>
            <div>
              <p>
                Cases: <span>{countryData.cases}</span>
              </p>
            </div>

            <div>
              <p>
                Deaths: <span>{countryData.deaths}</span>
              </p>
            </div>

            <div>
              <p>
                Recovered: <span>{countryData.recovered}</span>
              </p>
            </div>

            <div>
              <p>
                Active: <span>{countryData.active}</span>
              </p>
            </div>

            <div>
              <p>
                Critical: <span>{countryData.critical}</span>
              </p>
            </div>
          </section>

          <section>
            <h2>Per one million</h2>
            <div>
              <p>
                Cases per one million{" "}
                <span>{countryData.casesPerOneMillion}</span>
              </p>
              <p>
                Deaths per one million{" "}
                <span>{countryData.deathsPerOneMillion}</span>
              </p>
              <p>
                Recovered per one million{" "}
                <span>{countryData.recoveredPerOneMillion}</span>
              </p>
              <p>
                Test per one million{" "}
                <span>{countryData.testsPerOneMillion}</span>
              </p>
              <p>
                Active per one million{" "}
                <span>{countryData.activePerOneMillion}</span>
              </p>
              <p>
                Critical per one million{" "}
                <span>{countryData.criticalPerOneMillion}</span>
              </p>
            </div>
          </section>

          <section>
            <h2>Per People</h2>
            <div>
              <p>
                One case per people <span>{countryData.oneCasePerPeople}</span>
              </p>
              <p>
                One death per people{" "}
                <span>{countryData.oneDeathPerPeople}</span>
              </p>
              <p>
                One test per people <span>{countryData.oneTestPerPeople}</span>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SearchForCountry;
