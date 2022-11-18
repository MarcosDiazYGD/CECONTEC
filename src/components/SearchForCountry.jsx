import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchForCountry = () => {
  const [countryData, setCountryData] = useState({});
  const [inputValue, setInputValue] = useState(null);
  const [isLokingFor, setIsLokingFor] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    axios
      .get(`https://disease.sh/v3/covid-19/countries/${inputValue}`)
      .then((res) => {
        setCountryData(res.data);
        setIsLokingFor(true);
      });
    setCountryData({});
  };
  return (
    <div className="Component-SearchForCountry">
      <form onSubmit={submit}>
        <div className="containerInputSearch">
          <label htmlFor="countryName">
            <h2>Search by Country</h2>
          </label>
          <div>
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
        </div>
      </form>

      {isLokingFor ? (
        <div className="resultsOfSearch">
          <div className="countryInformation">
            <div>
              <h2>{countryData.country}</h2>
              <p>{countryData.continent}</p>
              <p>
                Population:<span>{countryData.population}</span>
              </p></div>
            <div>
            </div>
            <img src={countryData.countryInfo?.flag} />
          </div>
          <section className="countryToday">
            <h2>Today</h2>
            <div className="todayInformation">
              <p>Today cases: <span>{countryData.todayCases}</span></p>
              <p>Today deaths: <span>{countryData.todayDeaths}</span></p>
              <p>Today recovered: <span>{countryData.todayRecovered}</span></p>
            </div>
          </section>

          <section className="generalInformation">
            <h2>information</h2>
            <div>
              <p>Cases: <span>{countryData.cases}</span></p>
            </div>

            <div>
              <p>Deaths: <span>{countryData.deaths}</span></p>
            </div>

            <div>
              <p>Recovered: <span>{countryData.recovered}</span></p>
            </div>

            <div>
              <p>Active: <span>{countryData.active}</span></p>
            </div>

            <div>
              <p>Critical: <span>{countryData.critical}</span></p>
            </div>
          </section>

          <section className="informationPerMillion">
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

          <section className="informationPerPeople">
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
      ) : (
        <div className="containerNoSearch">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3 className="messajeSearch">Search for a country please</h3>
        </div>
      )}
    </div>
  );
};

export default SearchForCountry;
