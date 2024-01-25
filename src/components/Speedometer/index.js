// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed >= 0 && speed < 200) {
      this.setState(prevSpeed => ({
        speed: prevSpeed.speed + 10,
      }))
    }
  }

  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0 && speed <= 200) {
      this.setState(prevSpeed => ({
        speed: prevSpeed.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="paragraph">Speed is {speed}mph</h1>
          <p className="limit-text">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="accelerate-btn"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="brake-btn"
              type="button"
              onClick={this.onApplyBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
