import React, {Component} from 'react';
import ReactLoading from 'react-loading';

export default class RateBitCoinContent extends Component {
    constructor (props) {
        super(props)
        
        this.timerID = null;
        this.state = {
            bitCoin: [],
            show: false,
            isLoad: false
        }

        this.showBitCoinHandler = this.showBitCoinHandler.bind(this);
        this.fetchBitCoinData = this.fetchBitCoinData.bind(this);
        this.refreshHandler = this.refreshHandler.bind(this);
    }

    componentDidMount() {
        this.fetchBitCoinData();
        this.timerID = setInterval(() => {
            this.fetchBitCoinData();
        }, 180000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    shouldComponentUpdate(nextState) {
        return (this.state.bitCoin !== nextState.bitCoin);
    }

    fetchBitCoinData() {
        fetch("http://cb.am/latest.json.php?coins&currency=BTC")
          .then(data => data.json())
          .then(data => {
                this.setState({
                  bitCoin: Object.values(data)[0],
                  isLoad: !this.state.isLoad
                });
          });
    }
    
    showBitCoinHandler() {
        this.setState({
            show: !this.state.show
        });
    }

    refreshHandler() {
        this.setState({
            isLoad: false
        })
        this.fetchBitCoinData();
    }
    
    render() {
        
        return (
            <div className="bit-coin-area">
                {
                    (this.state.show) 
                        ?
                            <div>
                                <p onClick={this.showBitCoinHandler} className="click-toggle show-hide">Hide Bitcoin rate</p>
                                <hr />
                                <span className="current-bitCoin-rate-area"> <p>Current Bitcoin rate:</p> {
                                     (this.state.isLoad) 
                                     ? <b>
                                            {this.state.bitCoin}
                                        </b>
                                     : <ReactLoading className="bit-coin-loader" type={"cylon"} color={"red"}  width={65} height={20} />
                                    }
                                    <span className="refresh" onClick={this.refreshHandler}>  Refresh</span>                                    
                                </span>
                                <br />
                                <i>(BTC rate automatically will be updated every 3 minutes)</i>
                            </div>
                        :
                            <div>
                                <p onClick={this.showBitCoinHandler} className="click-toggle">Show Bitcoin rate</p>
                            </div>
                }
            </div>
        )
    }
}