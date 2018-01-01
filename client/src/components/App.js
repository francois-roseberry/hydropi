import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

import { DEFAULT_LOCALE } from '../config/Env';
import { translations } from '../i18n/translations';
import logo from './logo.svg';
import Humidity from './humidity/Humidity';
import Lighting from './lighting/Lighting';
import AirTemperature from './temperature/AirTemperature';
import WaterTemperature from './temperature/WaterTemperature';
import Ventilation from './ventilation/Ventilation';
import Dashboard from './dashboard/Dashboard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <IntlProvider locale={ DEFAULT_LOCALE } messages={ translations[DEFAULT_LOCALE] }>
        <div className="app">
          <header className="app-header">
            <img src={ logo } className="app-logo" alt="logo" />
            <h1 className="app-title"><FormattedMessage id="app.title" /></h1>
          </header>
          <div className="content">
            <Dashboard />
          </div>
        </div>
      </IntlProvider>
    );
  }
}