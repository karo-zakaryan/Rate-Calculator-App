import React, {Component} from 'react';
import RateCalculatorContent from "./RateCalcContent/RateCalcContent";
import RateBitCoinContent from "./RateBitCoinContent/RateBitCoinContent";
import "./RateCalculator.css";

export default class RateCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentCurrency: 'USD',
            currencyValue: props.currency["USD"]
        }

    this.selectHandler = this.selectHandler.bind(this);
    }
    
    selectHandler(event) {
        const selectedValue = event.target.value;
        this.setState({
            currentCurrency: selectedValue,
            currencyValue: this.props.currency[selectedValue]
        });
    }

    render() {
        return (
            <div className="rate-app">
                <h1>Rate Calculator</h1>
                <div className="choose-currency">
                    <p className="convert-base-text">
                        Convert AMD to: 
                    </p>

                    <div className="currency-selection">
                        <span className="label-text">Select / Select</span>
                        <div className="dropdown-currencies">
                            <select className="currency-select" defaultValue="USD" onChange={this.selectHandler}>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                                <option>GBP</option>
                            </select>
                        </div>
                        <span className="one-currency">(1 {this.state.currentCurrency} = {this.props.currency[this.state.currentCurrency]} AMD)</span>
                    </div>               
                </div>
                <RateCalculatorContent currencyMoney={this.state.currencyValue} currencyRate={this.state.currentCurrency}/>
                <RateBitCoinContent />
            </div>
        );
    }
}