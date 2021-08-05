import React from 'react'
import '../style/grid.scss'
import globals from '../lib/globals'

class Grid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: new Array(globals.GRID_SIZE).fill('grid-col-unselected')
    }
    this.max_selections = Math.floor(globals.GRID_SIZE / 3);
  }

  handleClick = (e) => {
    e.preventDefault();
    const hold = this.state.style;
    if (this.state.style[e.target.dataset.mssg] === 'grid-col-unselected') {
      if (globals.DEBUG) console.log(this.max_selections)
      if (frequencyOf(hold, 'grid-col-selected') < this.max_selections) {
        hold[e.target.dataset.mssg] = 'grid-col-selected';
        this.setState({style: hold});
        const allowSubmit = frequencyOf(hold, 'grid-col-selected') === 3 ? true : false
        this.props.shipSelections(e.target.dataset.mssg, this.props.type, allowSubmit);
      }
    } else if (this.state.style[e.target.dataset.mssg] === 'grid-col-selected') {
      if (frequencyOf(hold, 'grid-col-unselected') >= globals.GRID_SIZE - this.max_selections) {
        hold[e.target.dataset.mssg] = 'grid-col-unselected';
        this.setState({style: hold});
        const allowSubmit = frequencyOf(hold, 'grid-col-selected') === 3 ? true : false
        if (globals.DEBUG) console.log('allow submit', allowSubmit)
        this.props.shipSelections(e.target.dataset.mssg, this.props.type, allowSubmit);
      }
    } else {
      console.error('something went wrong with ship selection in Grid');
    }
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="0" className={`${this.state.style[0]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="1" className={`${this.state.style[1]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="2" className={`${this.state.style[2]} grid-col`}></div>
        </div>
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="3" className={`${this.state.style[3]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="4" className={`${this.state.style[4]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="5" className={`${this.state.style[5]} grid-col`}></div>
        </div>
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="6" className={`${this.state.style[6]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="7" className={`${this.state.style[7]} grid-col`}></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="8" className={`${this.state.style[8]} grid-col`}></div>
        </div>
      </div>
    )
  }
}

export default Grid;

const frequencyOf = (arr, token) => {
  let token_count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === token) {
      token_count++;
    }
  }
  if (globals.DEBUG) console.log(token_count)
  return token_count;
}