import React from 'react';
import CardTip from './CardTip';
import sanitizehands from '../assets/video/sanitizeHands.mp4'
import vaccine from '../assets/video/vaccine.mp4'
import faseMask from '../assets/video/faceMask.mp4'


const Tips = () => {
  return (
    <div className='Component-Tips'>
      <div className="tips-header">
        <h2 className='tips-title'>tips to protect yourself <br /> against covid-19</h2>
      </div>
      <div className="cardsTips">
        <CardTip title={'Hand Washing'} description={'Wash your hands frequently. Use soap and water or an alcohol-based hand sanitizer.'} video={sanitizehands} />
        <CardTip title={'Get Vaccinated'} description={'Get vaccinated when it\'s your turn. Follow the vaccination guidelines of your local authorities.'} video={vaccine} CardTipReverse={'CardTipReverse'} />
        <CardTip title={'use the mouth cover'} description={'wear a face mask everywhere and keep the distance between people'} video={faseMask} />
      </div>
    </div>
  );
};

export default Tips;