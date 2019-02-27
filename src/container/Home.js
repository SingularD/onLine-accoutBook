import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from "../utility";
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
    'iconName': 'logo-yen'
  }
}

const items = [
  {
    'id': 1,
    'title': '去广州旅游',
    'price': 200,
    'date': '2019-01-03',
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
    'date': '2019-03-03',
    'cid': 2
  }
]
const newItem = {
  'id': 4,
  'title': '添加新项目',
  'price': 300,
  'date': '2018-10-10',
  'cid': 1
}
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    }
  }
  changeView = (view) => {
    this.setState({
      tabView: view,
    })
  }
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }
  modifyItem = (modifiedItem) => {
    const modifiedItems = this.state.items.map(item => {
      if ( item.id === modifiedItem.id ) {
        return { ...item, title: '更新后的标题'}
      } else {
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })
  }
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }
  deleteItem = (deleteItem) => {
    const filteredItems = this.state.items.filter(item => item.id !== deleteItem.id)
    this.setState({
      items: filteredItems
    })
  }

  render() {
    const { items, currentDate, tabView } = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categories[item.cid]
      // 类似于数据库的外键
      return item
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })
    let totalIncome = 0, totalOutcome = 0
    itemsWithCategory.forEach(item => {
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
                year={currentDate.year}
                month={currentDate.month}
                onChange={ this.changeDate }
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
            activeTab={tabView}
            onTabChange={ this.changeView }
          />
          <CreateBtn onClick={ this.createItem }/>
          { tabView === LIST_VIEW &&
            <PriceList
              items={ itemsWithCategory }
              onModifyItem={ this.modifyItem }
              onDeleteItem={ this.deleteItem }
            />
          }
          {
            tabView === CHART_VIEW &&
            <h1>这里是图表</h1>
          }
        </div>
      </React.Fragment>
    )
  }
}
export { items, categories }
export default Home