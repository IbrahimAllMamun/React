import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleReset = () => {
    this.setState({ movies: getMovies() });
  };
  // handleLike = (movie) => {
    //   let newMovies = [...this.state.movies];
  //   movie.liked = !movie.liked;

  //   newMovies.map((obj) => [movie].find((o) => o.id === obj.id) || obj);
  //   this.setState({ movies: newMovies });
  //   console.log(this.state)
  // };
  handleLike = (movie) => {
    // const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // this.setState({ movies });
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container p-4">
          <h1 align="center" className="m-4">
            Movie Database
          </h1>
          <h4>{this.getFormattedText()}</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">React</th>
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
                  <td>
                    <Like
                      liked={movie.liked}
                      onLike={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
  getFormattedText = () => {
    const { movies } = this.state;
    const string = movies.length === 0 ? "no" : movies.length;
    return `There are ${string} movies in the database.`;
  };
}

export default Movies;
