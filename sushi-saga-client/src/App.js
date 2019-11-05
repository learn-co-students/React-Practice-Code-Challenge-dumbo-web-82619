import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [], 
    eatenSushi: [],
    sliceBegin: 0,
    sliceEnd: 4,
    sushiBudget: 250
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushiArr => {
      this.setState({
        sushi: sushiArr
      })
    })
  }

  moreSushi = () => {
    if (this.state.sliceEnd >= this.state.sushi.length) {
      this.setState({
        sliceBegin: 0,
        sliceEnd: 4
      })
    } else {
      this.setState({
        sliceBegin: this.state.sliceBegin + 4,
        sliceEnd: this.state.sliceEnd + 4
      })
    } 
  }

  eatSushi = (sushi) => {
    if (this.state.sushiBudget < sushi.price) {
      return null
    } else {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi.id],
        sushiBudget: this.state.sushiBudget - sushi.price 
      })
    } 
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi.slice(this.state.sliceBegin, this.state.sliceEnd)}
          eatenSushi={this.state.eatenSushi}
          moreSushi = {this.moreSushi}
          eatSushi={this.eatSushi} 
        />
        <Table sushiBudget={this.state.sushiBudget} eatenSushi={this.state.eatenSushi}/>
      </div>
    )
  }

}

export default App