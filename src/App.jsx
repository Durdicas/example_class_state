import { Component } from 'react'
import './App.css'
import GradBroj from './GradBroj'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      grad: "Zagreb"
    }
    // this.uvecaj = this.uvecaj.bind(this)
  }
 
 uvecaj = () => {
 this.setState({count: this.state.count + 1})
 }
 zamjena = () => {
  this.setState({grad: this.state.grad === "Zagreb" ? "Osijek" : "Zagreb"})
 }
 render() {
  return (
    <>
      <p>count: {this.state.count}</p>
      <button onClick={this.uvecaj}>Uvecaj za 1</button>
      <button onClick={this.zamjena}>Zamjena</button>
      <GradBroj grad={this.state.grad} broj={this.state.count}/>
    </>
  )
 }
}

