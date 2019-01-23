import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth } from "../utility";
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

const categories = {
  "1": {
    'id': '1',
    'name': '旅游',
    'type': 'outcome',
    'iconName': 'ios-plane'
  },
  "2": {
    'id': '2',
    'name': '理财',
    'type': 'income',
    'iconName': 'ios-plane'
  }
}

const items = [
  {
    'id': 1,
    'title': '去广州旅游',
    'price': 200,
    'date': '2019-02-03',
    'cid': 1
  },
  {
    'id': 2,
    'title': '去广州旅游',
    'price': 200,
    'date': '2019-02-03',
    'cid': 1
  },
  {
    'id': 3,
    'title': '理财',
    'price': 200,
    'date': '2019-02-03',
    'cid': 2
  }
]

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth,
      tabView: LIST_VIEW

    }
  }
  render() {
    const { items, currentDate, tabVIew } = this.state
    const itemWithCategory = items.map(item => {
      item.category = categories[item.cid]
      // 类似于数据库的外键
      return item
    })
    let totalIncome = 0, totalOutcome = 0
    itemWithCategory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price
      }else {
        totalIncome += item.price
      }
    })
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
            <div className="col">
              <TotalPrice
                income={totalIncome}
                outcome={totalOutcome}/>
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab
            activeTab={LIST_VIEW}
            onTabChange={() => {}}
          />
          <CreateBtn onClick={() => {}}/>
          <PriceList
            items={items}
            onModifyItem={() => {}}
            onDeleteItem={() => {}}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Home