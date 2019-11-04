import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state={
      sushiData: [],
      sushis: [],
      beenEaten: [],
      sliceInit: 0,
      sliceEnd: 4,
      wallet: 100,
      currentPrice: 0
    }
  }

  fetchSushi = (init, end) => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        sushis: data,
        sushiData: data.slice(init, end)
      },
      () => {
        if (this.state.sushiData.length === 0){
          this.setState({
            sliceInit: 0,
            sliceEnd: 4,
            sushiData: this.state.sushis.slice(0, 4)
          })
        }})
    })
  }

  componentDidMount(){
    this.fetchSushi(this.state.sliceInit, this.state.sliceEnd)
  }

  moreSushi = () => {
    this.setState({
      sliceInit: this.state.sliceInit + 4,
      sliceEnd: this.state.sliceEnd + 4
    },
    () => this.fetchSushi(this.state.sliceInit, this.state.sliceEnd)
    )
  }

  eat =(sushiID, price) => {
    if (this.state.wallet - price >= 0 && !this.state.beenEaten.includes(sushiID)){
    this.setState({
      beenEaten: [...this.state.beenEaten, sushiID],
      currentPrice: price,
      wallet: this.state.wallet - price
    })}
    else if (this.state.beenEaten.includes(sushiID)) {
      console.log('You already ate that!')
    }
    else {
      console.log('You Broke AF!!!')
    }
  }

  addToWallet = (event) => {
    event.preventDefault()
    if (Number(event.target.amount.value)){
      this.setState({
        wallet: this.state.wallet + Number(event.target.amount.value)
      })
    }
    else {
      console.log('Input must be a number!')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiData={this.state.sushiData} 
                        sushis={this.state.sushis}
                        beenEaten={this.state.beenEaten} 
                        eat={this.eat}
                        moreSushi={this.moreSushi}/>
        <Table addToWallet={this.addToWallet} sushis={this.state.sushis} beenEaten={this.state.beenEaten} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;