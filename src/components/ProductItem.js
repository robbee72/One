import React, { Component } from 'react';


class ProductItem extends Component {
  deleteProduct(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Product">
        {this.props.product.title}: {this.props.product.category} <a href="firebase" onClick={this.deleteProduct.bind(this, this.props.product.id)}>X</a>
      </li>
    );
  }
}

export default ProductItem;
