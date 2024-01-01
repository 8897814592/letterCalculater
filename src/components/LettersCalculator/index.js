// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  inputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading ">
            Calculate the <br />
            Letters you <br />
            enter
          </h1>
          <label className="para" htmlFor="myText">
            Enter the phrase
          </label>
          <input
            type="text"
            onChange={this.inputValue}
            placeholder="Enter the phrase"
            id="myText"
          />
          <button type="button" className="button">
            No.of letters:{searchInput.length}
          </button>
        </div>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
