import React, {Component} from 'react';
import RateCalculatorContent from "./RateCalcContent/RateCalcContent";
import RateBitCoinContent from "./RateBitCoinContent/RateBitCoinContent";
import "./RateCalcHeader.css";

export default class RateCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCurrency: "USD"
        }

        this.selectHandler = this.selectHandler.bind(this);
    }


    selectHandler(event) {
        const currenceValue = event.target.value;

        this.setState({
            currency: currenceValue
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="App-Header">
                <h1>Rate Calculator</h1>
                <div className="container-div">
                    <p className="convertAMDText">
                        Convert AMD to: 
                    </p>

                    <div className="select-div">
                        <span className="labelText">Select / Select</span>
                        <div className="dropdownRates">
                            <select className="selectRate" onChange={this.selectHandler}>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>RUB</option>
                                <option>GBP</option>
                            </select>
                        </div>
                        <span className="currence">(1 USD = 484.13 AMD)</span>
                    </div>               
                </div>
                <RateCalculatorContent />
                <RateBitCoinContent />
            </div>
        );
    }
}