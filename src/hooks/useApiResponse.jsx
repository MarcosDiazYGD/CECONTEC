import axios from "axios";
import { useEffect, useState } from "react";

const useApiResponse = () => {

  const [apiData, setApiData] = useState({});

  useEffect(() => {
    axios
      .get(`https://disease.sh/v3/covid-19/all`)
      .then((res) => setApiData(res.data));
      console.log(apiData);
  }, []);

  return [apiData]
};

export default useApiResponse;