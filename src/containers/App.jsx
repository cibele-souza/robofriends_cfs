/* function App() is a functional component > it's possible to have the same result
using Class that extends a React.component (it was initially done like this):

import React from 'react';
class App extends React.Component{
  render(){
  --code below, the one that is inside function App(){}
}
*/

import { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import '../containers/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

// using a list of names that we pick at a server to user as our users list
// we use this list to update the state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then (users => {this.setState ({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.length === 0){
      return <h1>Loading</h1>
    } else {
    return (
      <div className='tc'>  
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots = {filteredRobots} />
        </Scroll>
      </div>
      ) ;
    }
  }
}



export default App;    // we use DEFAULT when only exporting one thing
