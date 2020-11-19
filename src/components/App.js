import React from 'react';

import MoviesView from './moviesView.js';
import Search from './search.js';

import movieList from '../lib/moviesData.js';


// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    this.setState({
      movies: movieList
    })
  }


  render(){
    return(
      <Container>
        <Col xs="2"></Col>
        <Col xs="8" className="basic-col-wrapper">
          <Row className="basic-row-wrapper">
            <h1 className="title">Nicks Movie List</h1>
          </Row>
          <Row className="search-wrapper">
            <Search list={this.state.movies}/>
          </Row>
          <Row className="list-wrapper">
            <MoviesView list={this.state.movies}/>
          </Row>
        </Col>
        <Col xs="2"></Col>
      </Container>
  )}
}

export default App;
