import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../actions';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(){
    if(this.props.items.find((item) => {return item.id === this.props.id;})){ return null; }
    this.props.actions.addItem(this.props);
  }
  handleRemove(){
    const index = this.props.items.findIndex((item) => {return item.id === this.props.id;});
    this.props.actions.removeItem({
      id: this.props.id,
      imageURL: this.props.imageURL,
      name: this.props.name,
      type: this.props.type,
      price: this.props.price,
      currency: this.props.currency,
      index
    });
  }
  render() {
    return (
      <div className='product'>
        <img src={this.props.imageURL} alt='Image'/>
        <div className='text-product'>
          <h4>{this.props.name}</h4>
          <p>{this.props.currency} {this.props.price}</p>
          {(this.props.status === 'onStore') ? <button className='add' onClick={this.handleAdd}>Add Cart</button> : <button className='remove' onClick={this.handleRemove}>Remove Cart</button>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // podria capturar el item
    items: state.basket.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
