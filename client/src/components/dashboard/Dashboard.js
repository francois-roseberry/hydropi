import React from 'react';

import Humidity from '../humidity/Humidity';
import Lighting from '../lighting/Lighting';
import AirTemperature from '../temperature/AirTemperature';
import WaterTemperature from '../temperature/WaterTemperature';
import Ventilation from '../ventilation/Ventilation';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col-md-4"><Humidity /></div>
          <div className="col-md-4"><AirTemperature /></div>
          <div className="col-md-4"><WaterTemperature /></div>
        </div>
        <div className="row">
          <div className="col-md-6"><Lighting /></div>
          <div className="col-md-6"><Ventilation /></div>
        </div>
      </div>
    );
  }
}
