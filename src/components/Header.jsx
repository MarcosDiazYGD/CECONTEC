import React from "react";
import useApiResponse from "../hooks/useApiResponse";
import video from '../assets/video/covidWallPaper.mp4'
const Header = () => {
  const [apiData] = useApiResponse();

  return (
    <header className="Component-Header">
      <div className="home">

        <div className="video">
          <video autoPlay loop onLoadedMetadata="this.muted=true" >
            <source src={video} type="video/mp4"/>
          </video>

        </div>

        <div className="overlay"></div>

        <div className="content">
          <p>All the information about covid 19</p>
        </div>

        <div className="mainInfo">
        <section>
          <h2>
            Updated <br />
            <span>{apiData.updated}</span>
          </h2>
        </section>

        <section>
          <h2>
            Today Cases <br />
            <span>{apiData.todayCases}</span>
          </h2>
        </section>

        <section>
          <h2>
            Recovered <br />
            <span>{apiData.recovered}</span>
          </h2>
        </section>
      </div>
      </div>



 
    </header>
  );
};

export default Header;
