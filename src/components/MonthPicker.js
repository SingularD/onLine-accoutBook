import React from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from "../utility";

class MonthPicker extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month
    }
  }
  toggleDropdown = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  selectYear = (event, yearNumber) => {
    event.preventDefault()
    this.setState({
      selectedYear: yearNumber
    })
  }
  selectMonth = (event, MonthNumber) => {
    event.preventDefault();
    this.setState({
      selectedMonth: MonthNumber,
      isOpen: false
    })
    this.props.onChange( this.state.selectedYear, this.state.selectedMonth )
  }
  render() {
    const { year, month } = this.props
    const { isOpen } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map( num => num + year)
    // 生产年份和月份
    const { selectedYear } = this.state
    const { selectedMonth } = this.state
    return (
      <div className="dropdown month=picker-component">
        <h4>选择月份</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          { `${year}年${padLeft(month)}月` }
        </button>
        { isOpen &&
          <div className="dropdown-menu" style={{ display: 'block' }}>
            <div className="row">
              <div className="col border-right">
                { yearRange.map( (item, index) => (
                  <a
                    href="#"
                    onClick={(event) => {
                      this.selectYear(event,item)
                    }}
                    className={ item === selectedYear ?
                      "dropdown-item active" :
                      "dropdown-item"}
                    key={index}
                  >
                    {item}年
                  </a>
                ) ) }
              </div>
              <div className="col">
                { monthRange.map( (item, index) => (
                  <a
                    href="#"
                    onClick={(event) => {
                      this.selectMonth(event,item)
                    }}
                    className={ item === selectedMonth ?
                      "dropdown-item active" :
                      "dropdown-item" }
                    key={index}
                  >
                    {padLeft(item)}月
                  </a>
                ) ) }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MonthPicker