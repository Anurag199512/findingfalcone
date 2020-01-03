import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SendTroops.css';
import { callAPI } from '../../utils/callAPIUtil';
import { PLANETS, VEHICLES } from '../../constants/API_URLS';
import { Select, Radio, Button } from '../common';

const SendTroops = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const constructState = (data) => {
    const arr = [];
    let obj = {};
    for (let i = 0; i < 4; i++) {
      obj[i] = data;
    }
    arr.push(obj);
    return arr;
  };

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await callAPI(PLANETS.url, PLANETS.method);
        const data = await response.json();
        setPlanets(constructState(data));
      } catch (err) {
        console.log(err);
      }
    }

    const getVehicles = async () => {
      try {
        const response = await callAPI(VEHICLES.url, VEHICLES.method);
        const data = await response.json();
        setVehicles(constructState(data));
      } catch (err) {
        console.log(err);
      }
    };

    getPlanets();
    getVehicles();

  }, []);

  const ShowInputs = (n) => {
    const options = [];
    for (let i = 0; i < n; i++) {
      options.push((
        <div className="column" key={i}>
          <Select
            styles="select"
            name={`destination${i}`}
            options={(planets && planets[0]) ? planets[0][i] : []}
            onSelect={(e) => onDestinationChange(e, i)} />
          <Radio
            styles="radio"
            name={`vehicle${i}`}
            options={(vehicles && vehicles[0]) ? vehicles[0][i] : []}
            onSelect={(e) => onVehicleChange(e, i)} />
        </div>
      ))
    }
    return options;
  }

  const onDestinationChange = (e, index) => {
    const selectedName = e.target.value;
    const values = Object.values(planets[0]);
    let obj = {};
    for (let i = 0; i < 4; i++) {
      if (i === index) obj[i] = values[i];
      else {
        obj[i] = values[i].filter((value) => value.name !== selectedName);
      }
    }
    const updatedPlanets = [].concat([obj]);
    setPlanets(updatedPlanets);
  };

  const onVehicleChange = (e) => {
    console.log(e.target.value);
  };

  const onReset = (e) => {
    e.preventDefault();
  };

  return (
    < main >
      <p className="search-title">Select planets for your Troops to search</p>
      <form>
        <div className="row">
          {ShowInputs(4)}
        </div>
        <div className="row button-group">
          <Link to='/missionreport'>
            <Button styles="button" type="submit" text="Find Falcone" />
          </Link>
          <Button styles="button" type="reset" text="Reset" onPress={onReset} />
        </div>
      </form>
    </main >
  );

};

export default SendTroops;
