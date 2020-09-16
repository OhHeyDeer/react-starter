import React from 'react';

import MoviesView from './moviesView.js';
import Search from './search.js';

import movieList from '../lib/moviesData.js';

class App extends React.Component {
  constructor() {
    super();


    this.state = {
      movies: [],
      
    }
  }

  componentDidMount() {
    this.setState({
      movies: movieList
    })
  }


  render(){
    return(
      <div>
        <h1 class="title">Nicks Movie List</h1>
        <div>
        <Search list={this.state.movies}/>
        </div>
          
        <MoviesView list={this.state.movies}/>
      </div>
  )}
}

export default App;
