import React, { useState, useEffect } from 'react';
import { callAPI } from '../../utils/callAPIUtil';
import { FIND_TOKEN, FIND } from '../../constants/API_URLS';

const MissionReport = () => {
  const [token, setToken] = useState({});
  const [report, setReport] = useState({});

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await callAPI(FIND_TOKEN.url, FIND_TOKEN.method);
        const data = await response.json();
        setToken(...token, { token: data.token });
      } catch (err) {
        console.log(err);
      }
    };

    const findFalcone = async () => {
      try {
        const response = await callAPI(FIND.url, FIND.method);
        const data = await response.json();
        if (data.error) {
          throw new Error('Token not initialized. Please get a new token with the token API');
        }
        if (data.status) {
          setReport(...report, { status: data.status, planet_name: data.planet_name });
        } else {
          setReport(...report, { status: data.status })
        }
      } catch (err) {
        console.log(err);
      }
    };

    getToken();
    findFalcone();
  });

  return <h1>MissionReport</h1>;
};

export default MissionReport;
