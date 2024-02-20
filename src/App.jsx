import React from 'react';
import Header from './components/Header';
import ParcelCard from './components/ParcelCard';
import Orders from './components/Orders';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ParcelCard parcelName="Parcel A" />
        <ParcelCard parcelName="Parcel B" />
        <ParcelCard parcelName="Parcel C" />
        <ParcelCard parcelName="Parcel D" />
      </div>
      <Orders/>
    </div>
  );
};

export default App;
