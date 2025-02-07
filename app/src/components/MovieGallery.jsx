import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    this.setState({ isLoading: true, error: null });

    fetch(`http://www.omdbapi.com/?apikey=e6e4260c&s=${this.props.searchQuery}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          this.setState({ movies: data.Search.slice(0, 6) });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <Container fluid className="px-5">
        <h4 className="text-white text-center mt-4">{this.props.title}</h4>
        {this.state.isLoading && (
          <p className="text-white text-center">Caricamento...</p>
        )}
        {this.state.error && (
          <p className="text-danger text-center">{this.state.error}</p>
        )}

        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
          {!this.state.isLoading &&
            !this.state.error &&
            this.state.movies.map((movie) => (
              <Col key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default MovieGallery;
