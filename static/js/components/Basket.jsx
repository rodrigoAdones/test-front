import React, { Component } from 'react';

class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Carro de Compra</h2>
        <section className='list basket'>
          {this.props.basketData.map(item =>
            <Product key={item.id} {...item} status='onBasket'/>
          )}
        </section>
      </div>
    );
  }
}

export default Basket;
