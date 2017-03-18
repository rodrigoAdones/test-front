import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import fetch from 'isomorphic-fetch';

import TotalBox from '../components/TotalBox';
import Basket from '../components/Basket';
import ProductsList from '../components/ProductsList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      products: [],
      basketData: [],
    };
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:1337/items');
    const data = await response.json();
    this.setState({
      products: data.catalog,
    });
  }
  render() {
    return (
      <div>
        {/* box with the total in basket */}
        <TotalBox total={this.state.total}/>
        {/* Section with basket information */}
        <Basket basketData={this.state.basketData}/>
        {/* Section with products in store */}
        <ProductsList list={this.state.products}/>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));
