import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TotalBox from '../components/TotalBox';
import Basket from '../components/Basket';
import ProductsList from '../components/ProductsList';

import actions from '../../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:1337/items');
    const data = await response.json();
    this.props.actions.addProduct(data.catalog);
  }
  render() {
    return (
      <div>
        {/* box with the total in basket */}
        <TotalBox />
        {/* Section with basket information */}
        <Basket />
        {/* Section with products in store */}
        <ProductsList list={this.props.products}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
