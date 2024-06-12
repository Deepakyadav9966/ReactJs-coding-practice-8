// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeSearchInput = event => {
    const Value = event.target.value
    const Length = Value.length
    this.setState({
      count: Length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <>
        <div className="bg-container">
          <div>
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label className="paragraph" htmlFor="search-Input">
              Enter the phrase
            </label>
            <input
              type="text"
              id="search-Input"
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
            />
            <p className="count-para">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </>
    )
  }
}

export default LetterCalculator
