import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    let movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
  }
  handleReset = () => {
    this.setState({movies: getMovies()})
  }
  render() {
    return (
      <React.Fragment>
        <div className="container p-4">
            <h1 align="center" className="m-4">Movie Database</h1>
          <h4>{this.getFormattedText()}</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.handleReset}>Reset</button>
        </div>
      </React.Fragment>
    );
  }
  getFormattedText = () => {
    const {movies} = this.state
    const string = (movies.length===0) ? "no" : movies.length
    return `There are ${string} movies in the database.`
  }
}

export default Movies;
