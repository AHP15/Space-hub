import React, { useEffect } from 'react';
import '../styles/Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../slices/RocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  return (

    <section className="rockets">
      <div className="container" />
      {!rockets.loading && rockets.error == null ? rockets.rockets.map((roc) => <Rocket key={roc.id} />) : ''}
    </section>
  );
};

export default Rockets;
