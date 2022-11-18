import React from 'react';
import SearchForCountry from './SearchForCountry';

const SearchCountry = () => {
  return (
    <div className='component-searchCountry'>
      <div className='searchCountry-home'>
        <h2>My country</h2>
      </div>
      <SearchForCountry />
    </div>
  );
};

export default SearchCountry;