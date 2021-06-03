import React from 'react'
import '../style/grid.css'

class Grid extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.dataset.mssg)
    this.props.guessShips(e.target.dataset.mssg)
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="0" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="1" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="2" className="grid-col"></div>
        </div>
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="3" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="4" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="5" className="grid-col"></div>
        </div>
        <div className="grid-row">
          <div onClick={this.handleClick.bind(this)} data-mssg="6" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="7" className="grid-col"></div>
          <div onClick={this.handleClick.bind(this)} data-mssg="8" className="grid-col"></div>
        </div>
      </div>
    )
  }
}

export default Grid
