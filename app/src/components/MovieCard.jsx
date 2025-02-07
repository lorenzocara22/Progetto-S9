import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="bg-dark text-white mb-4 movie-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={movie.Poster}
          alt={movie.Title}
          className="movie-img"
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center">{movie.Title}</Card.Title>
        <Card.Text className="text-center">{movie.Year}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
