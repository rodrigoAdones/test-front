import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Articulos</h2>
        <section className='list store'>
          {this.props.list.map(item =>
            <Product key={item.id} {...item} status='onStore'/>
          )}
        </section>
      </div>
    );
  }
}

export default ProductsList;
