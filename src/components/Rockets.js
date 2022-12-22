import React from 'react';
import '../styles/Rockets.css';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const { rockets, loading } = useSelector((state) => state.rockets);

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <section className="rockets">
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <Rocket
            key={String(rocket.id + Math.random())}
            name={rocket.rocket_name}
            image={rocket.flickr_images[0]}
            description={rocket.description}
            id={Number(rocket.id)}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </section>
  );
};

export default Rockets;
