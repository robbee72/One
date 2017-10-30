import React, { Component } from 'react';
import uuid from 'uuid';


class AddProduct extends Component {
  constructor(){
    super();
    this.state = {
      newProduct:{}
    }
  }

  static defaultProps = {
    categories: ['Income', 'Growth', 'Aggressive', 'Index']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProduct:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProduct(this.state.newProduct);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Product</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddProduct;
