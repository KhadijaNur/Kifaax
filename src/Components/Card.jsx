import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
