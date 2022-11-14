import React from "react";
import useApiResponse from "../hooks/useApiResponse";
const Header = () => {
  const [apiData] = useApiResponse();

  return (
    <div className="Component-Header">
      <div className="mainInfo">
        <section>
          <h2>
            updated <br />
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
  );
};

export default Header;
