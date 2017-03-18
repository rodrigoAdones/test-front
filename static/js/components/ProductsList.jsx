import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../actions';

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Articulos</h2>
        <section className='list store'>
          {this.props.products.map(item =>
            <Product key={item.id} {...item} status='onStore'/>
          )}
        </section>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(ProductsList);
