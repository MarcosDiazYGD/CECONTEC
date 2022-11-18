import React from 'react';

const CardTip = ({title , description, video, CardTipReverse }) => {
  return (
    <div className={`CardTip ${CardTipReverse}`}>
      <div className='card-container-video'>
        <video autoPlay loop>
          <source src={video}/>
        </video>
      </div>
      <div className='card-container-info'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardTip;
