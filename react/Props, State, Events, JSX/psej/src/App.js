import React from 'react';
import Example from './Example';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {country: 'Ukraine'};
  }

  changeCountry = () => {
    if (this.state.country === 'Ukraine') {
      this.setState({country: 'Ukraine is the best country'})
    }
    else {
      this.setState({country: 'Ukraine'})
    }
  }


  render() {
    return (
      <>
        <button onClick={this.changeCountry}>Click</button>
        <Example countryName = {this.state.country}/>
      </>
    )
  }
}

export default App;