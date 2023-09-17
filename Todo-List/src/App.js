import './App.css';
import React from 'react'
import ListItems from './ListItems';

class App extends React.Component { 
  constructor(props) {
    super(props)
  
    this.state = {
      item: [],
      currentItem: {
        text: '',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this); 
    this.addItem = this.addItem.bind(this); 

  }
  
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key:Date.now()
      }
      
    })
  }
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== ""){
      const newItems = [...this.state.item, newItem];
      this.setState({
        item: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  render() {
    return(
      <div className='App'>
        <header>
        <form id='to-do-form' onSubmit={this.addItem}>
            <input type="text" placeholder='Enter Text'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
        <button type='submit'>Add</button>
        </form>
        </header>
        <ListItems items = {this.state.items}></ListItems>
      </div>
    )
  }
}
export default App;



