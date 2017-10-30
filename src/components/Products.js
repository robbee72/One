import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
  deleteProduct(id){
    this.props.onDelete(id);
  }

  render() {
    let productItems;
    if(this.props.products){
      productItems = this.props.products.map(product => {
        return (
          <ProductItem onDelete={this.deleteProduct.bind(this)} key={product.title} product={product} />
        );
      });
    }
    return (
      <div className="Products">
        <h3>Latest Products</h3>
        {productItems}
      </div>
    );
  }
}

export default Products;
