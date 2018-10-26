import React, { Component } from 'react'

export default class RateCalculatorContent extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            inputValue: ""
        }
        this.convertMoneyHandler = this.convertMoneyHandler.bind(this);
        this.convertMoneyCalc = this.convertMoneyCalc.bind(this);
    }

    convertMoneyHandler(event) {
        const inputValue = event.target.value;

        this.setState({
            inputValue: inputValue
        });
    }

    convertMoneyCalc() {
        if ((this.state.inputValue / this.props.currencyMoney) > 0) {
            const convertValue = this.state.inputValue / this.props.currencyMoney;
            return convertValue.toFixed(3);
        } else {
            return 0;
        }
    }
    
    render() {
        return (
            <div className="rate-convert-section">
                    <p className="label-text">Input / Text (focus)</p>
                    <input className="rate-input" type="text" onChange={this.convertMoneyHandler}/>

                    <span className="currency-convert-value">
                        AMD = {this.convertMoneyCalc()} {this.props.currencyRate}
                    </span>
            </div> 
        );
    }
}