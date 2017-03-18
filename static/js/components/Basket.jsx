import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../actions';

import Product from './Product';

class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Carro de Compra</h2>
        <section className='list basket'>
          {this.props.items.map(item =>
            <Product key={item.id} {...item} status='onBasket'/>
          )}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.basket.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
