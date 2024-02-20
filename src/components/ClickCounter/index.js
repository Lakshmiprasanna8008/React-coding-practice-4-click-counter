// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          The Button has been
          <br /> clicked <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" onClick={this.increase}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
