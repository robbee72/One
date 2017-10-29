import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Navs from './Components/Navs';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      navs: [],
      projects: [],
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
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

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
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

        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
