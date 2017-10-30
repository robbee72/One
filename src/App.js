import React, { Component } from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import firebase from './firebase';
import uuid from 'uuid';
import $ from 'jquery';
import Navs from './components/Navs';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Footers from './components/Footers';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carts: [],
      navs: [],
      products: [],
      footers:[],
      data: null,
      newData: ''
    };

    this.dataRef = firebase.database().ref();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }

  getProducts(){
    this.setState({products: [
      {
        id:uuid.v4(),
        title: 'Technology',
        category: 'Growth'
      },
      {
        id:uuid.v4(),
        title: 'Stressed',
        category: 'Speculation'
      },
      {
        id:uuid.v4(),
        title: 'VC',
        category: 'Aggressive'
      },
      {
        id:uuid.v4(),
        title: 'Blue Chip',
        category: 'Income'
      }
    ]});
  }

  getFooters(){
    $.ajax({

      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({footers: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){

      }
    });
  }

  componentWillMount(){
    this.getProducts();
    this.getFooters();
    this.dataRef.on('value', snapshot => {
			const data = Object.entries(snapshot.val()).map(([key, value]) => ({
				key,
				value
			}));
			this.setState({ data });
		});
  }

  componentDidMount(){
    this.getFooters();
  }

  handleChange(event) {
    this.setState({
      newData: event.target.value
    });
  }

  handleSubmit(event) {
  		event.preventDefault();
  		this.dataRef.push(this.state.newData);
  		this.setState({ newData: '' });
  	}

  handleAddProduct(product){
    let products = this.state.products;
    products.push(product);
    this.setState({products:products});
  }

  handleDeleteProduct(id){
    let products = this.state.products;
    let index = products.findIndex(x => x.id === id);
    products.splice(index, 1);
    this.setState({products:products});
  }

  render() {
    return (
      <div className="App">
        <Navs />
        <div className="App-header">
					<h4>Spirit Creek Capital</h4>
				</div>
				<pre className="App-data">{JSON.stringify(this.state.data, null, 2)}</pre>
				<form className="App-form" onSubmit={this.handleSubmit}>
					<input value={this.state.newData.Manufacturer} onChange={this.handleChange} />
					<input type="submit" disabled={!this.state.newData} />
				</form>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Spirit Creek Capital</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>
        </div>
        <br />

        <AddProduct addProduct={this.handleAddProduct.bind(this)} />
        <Products products={this.state.products} onDelete={this.handleDeleteProduct.bind(this)} />
        <hr />
        <Footers footers={this.state.footers} />
          <footer>
              <small>
                  presented by: <h4>Mad Hatter Creek </h4>
              </small>
          </footer>
      </div>
    );
  }
}

export default App;
