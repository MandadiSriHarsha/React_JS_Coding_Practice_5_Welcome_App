import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  subscribe = () => {
    this.setState(prevState => {
      if (prevState.buttonText === 'Subscribe') {
        return {buttonText: 'Subscribed'}
      }
      return {buttonText: 'Subscribe'}
    })
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="main-description">Thank you! Happy Learning</p>
        <button type="button" className="main-button" onClick={this.subscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
