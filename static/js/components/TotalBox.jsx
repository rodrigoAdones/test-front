import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../actions';

class TotalBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='box-total'>
        <h2>
          Total: {this.props.total}
        </h2>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    total: state.basket.total,
  };
}

export default connect(mapStateToProps)(TotalBox);
