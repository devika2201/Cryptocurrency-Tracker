import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderBox = () => (
    <div className="list-header">
      <p className="coin-heading">Coin Type</p>
      <div className="container">
        <p className="coin-heading">USD</p>
        <p className="coin-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoview = () => {
    const {cryptoData} = this.props

    return (
      <div className="box-container">
        {this.renderBox()}
        <ul className="cryptocurrencies-list">
          {cryptoData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="app-conatiner">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptoview()}
      </div>
    )
  }
}

export default CryptocurrenciesList
