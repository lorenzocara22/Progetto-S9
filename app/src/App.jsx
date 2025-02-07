import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieGallery from "./components/MovieGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bg-dark text-light min-vh-100 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1">
          <MovieGallery searchQuery="Scream" title="Scream Saga" />
          <MovieGallery searchQuery="Halloween" title="Halloween Saga" />
          <MovieGallery
            searchQuery="Friday the 13th"
            title="Friday the 13th Saga"
          />
          <MovieGallery
            searchQuery="Nightmare on Elm Street"
            title="A Nightmare on Elm Street Saga"
          />
          <MovieGallery
            searchQuery="Texas Chainsaw Massacre"
            title="Texas Chainsaw Massacre Saga"
          />
          <MovieGallery searchQuery="Saw" title="Saw Saga" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
