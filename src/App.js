import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import "./App.css";
import RateCalculator from "./components/RateCalculator";
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoad: false,
      test: false
    }
  };

  componentDidMount() {
    fetch("http://cb.am/latest.json.php")
      .then(data => data.json())
      .then(data => {
            this.setState({
              data: data,
              isLoad: !this.state.isLoad,
            });
      });
  }

  render() {
    return (
      <main className="App">
        {
          (this.state.isLoad)
          ? <RateCalculator currency={this.state.data} />
          : <div className="loader-section">
                <h1 className="bubble-loader">Fetching Data
                    <ReactLoading className="bubble-loader" type={"bubbles"} color={"red"}  width={250} />
                </h1>
            </div>
        }

      </main>
    );
  }
}

export default App;
