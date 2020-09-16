import React, { Component } from 'react';

import movieList from '../lib/moviesData.js';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchVal: '',
            button: <div></div>
        }

        this.change = this.handleChange.bind(this);
    }

    handleChange(e, callback) { 
        this.setState({
            searchVal: e.target.value,
        }, callback);
    }

    handleChangeButton() {
        var button;
        var result; // This checks the typed word with the movies in the list of data
        result = this.props.list.filter(movie => (movie.name.slice(0, this.state.searchVal.length)).toLowerCase() === (this.state.searchVal).toLowerCase()); // Check if any movies match the searchVal
        
        // Check if the results exist
        if (result.length !== 0) {
            button = <div></div>
        } else { // Show button when the movie does not exist
            button = <input type="submit" value="Add New Movie" onClick={this.handleSubmit} />
        }
        this.setState({
            button: button
        });
    }

    handleSubmit(e) {
        // e.preventDefault();
        // // add a movie to the list
        // var name_mod = this.state.searchVal.charAt(0).toUpperCase() + this.state.searchVal.slice(1);
        // var movie = {name: name_mod, watched: false};
        // this.props.list.push(movie)
        console.log('Handleed')
    }


    render() {
        // Conditionally render the button depending on if it exists in the data
        
        return (
            <form className="search">
                <input type="text" value={this.state.searchVal} onChange={(e) => { this.change(e, () => { this.handleChangeButton(); }); } }/>
            {this.state.button}
        </form>
    )}
}


export default Search;