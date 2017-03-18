import React, { Component } from 'react';

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

export default TotalBox;
