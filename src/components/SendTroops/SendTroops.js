import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { callAPI } from '../../utils/callAPIUtil';
import { PLANETS, VEHICLES } from '../../constants/API_URLS';
import { Select, Radio, Button } from '../common';

const SendTroops = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await callAPI(PLANETS.url, PLANETS.method);
        const data = await response.json();
        setPlanets(data);
      } catch (err) {
        console.log(err);
      }
    }

    const getVehicles = async () => {
      try {
        const response = await callAPI(VEHICLES.url, VEHICLES.method);
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        console.log(err);
      }
    };

    getPlanets();
    getVehicles();

  }, [planets]);

  const onReset = (e) => {
    e.preventDefault();
    alert('reset clicked');
  }

  return (
    <main>
      <h2>Select the planets you want the Troops to go</h2>
      <form>
        <div>
          <div>
            <Select options={planets} />
            <Radio name="vehicles" options={vehicles} />
          </div>
          <div>
            <Select options={planets} />
            <Radio name="vehicles" options={vehicles} />
          </div>
          <div>
            <Select options={planets} />
            <Radio name="vehicles" options={vehicles} />
          </div>
          <div>
            <Select options={planets} />
            <Radio name="vehicles" options={vehicles} />
          </div>
        </div>
        <div>
          <Link to='/missionreport'>
            <Button type="submit" text="Find Falcone" />
          </Link>
          <Button type="reset" text="Reset" onPress={onReset} />
        </div>
      </form>
    </main>
  );

};

export default SendTroops;
