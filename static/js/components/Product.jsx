import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='product'>
        <img src={this.props.imageURL} alt='Image'/>
        <div className='text-product'>
          <h4>{this.props.name}</h4>
          <p>{this.props.currency} {this.props.price}</p>
          {(this.props.status === 'onStore') ? <button>Add Cart</button> : <button>Remove Cart</button>}
        </div>
      </div>
    );
  }
}

export default Product;
