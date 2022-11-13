import axios from "axios";
import React, { useEffect, useState } from "react";

const queryAPI = () => {
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    axios.get("").then((res) => setApiResponse(res.data));
  }, []);
  console.log(apiResponse);

  return [];
};

export default queryAPI;
