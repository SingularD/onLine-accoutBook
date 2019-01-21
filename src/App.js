import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import {LIST_VIEW, CHART_VIEW} from "./utility";
import MonthPicker from './components/MonthPicker'

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/*<PriceList*/}
        {/*items = { items }*/}
        {/*onModifyItem = { (item) => (alert(item.id)) }*/}
        {/*onDeleteItem = { (item) => (alert(item.id)) }*/}
        {/*/>价格表组件*/}
        <ViewTab
        activeTab={LIST_VIEW}
        onTabChange={(view) => { console.log(view) }}
        />
        <TotalPrice income={500} outcome={500}/>
        <MonthPicker
        year="2012"
        month="10"
        />
      </div>
    );
  }
}

export default App;
