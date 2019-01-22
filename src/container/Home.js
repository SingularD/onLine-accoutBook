import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import {LIST_VIEW, CHART_VIEW} from "../utility";
import MonthPicker from '../components/MonthPicker'

const items = [
  {
    'id': 1,
    'title': '去广州旅游',
    'price': 200,
    'date': '2019-02-03',
    'category': {
      'id': '1',
      'name': '旅游',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  },
  {
    'id': 2,
    'title': '去广州旅游',
    'price': 200,
    'date': '2019-02-03',
    'category': {
      'id': '1',
      'name': '旅游',
      'type': 'outcome',
      'iconName': 'ios-plane'
    }
  }
]

class Home extends React.Component{
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="row mb-5">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <div className="col">
              <MonthPicker
                year={2019}
                month={1}
                onChange={() => {}}
              />
            </div>
            <div className="col"></div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Home