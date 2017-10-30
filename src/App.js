import React, { Component } from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import uuid from 'uuid';
import $ from 'jquery';
import Navs from './components/Navs';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Footers from './components/Footers';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      carts: [],
      navs: [],
      projects: [],
      footers:[]
    }
  }

  getProjects(){
    this.setState({projects: [
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
    this.getProjects();
    this.getFooters();
  }

  componentDidMount(){
    this.getFooters();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <Navs />
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

        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
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
