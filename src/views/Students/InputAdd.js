import React, {Component} from 'react';
import {Paper} from '@material-ui/core';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
               <div style={{display:'flex'}}>
                    <h3> Nombres d'eleves :  </h3>
                    &nbsp; &nbsp; <h3 style={{color:'rgb(17, 141, 65)'}}>  {this.state.items.length + 0} </h3>
                </div>
          <h4>AJOUTERrr UN NOM</h4>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
             NOMs ET PRENOM :
             &nbsp; &nbsp; </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
             &nbsp; <button>
              Ajouter
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <Paper>
          
        <ol style={{border:'1px 0px 1px 0px solid red'}}>
      
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))} 
        </ol>
       
        </Paper>
      );
    }
  }
  
 
  export default TodoApp;