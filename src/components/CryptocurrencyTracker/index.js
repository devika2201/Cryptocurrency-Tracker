// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptoLists()
  }

  getCryptoLists = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachCryptocurrency => ({
      id: eachCryptocurrency.id,
      currencyLogoUrl: eachCryptocurrency.currency_logo,
      currencyName: eachCryptocurrency.currency_name,
      usdValue: eachCryptocurrency.usd_value,
      euroValue: eachCryptocurrency.euro_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderContent = () => {
    const {cryptoData} = this.state

    return <CryptocurrenciesList cryptoData={cryptoData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="tracker-container">
        {isLoading ? this.renderLoader() : this.renderContent()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
