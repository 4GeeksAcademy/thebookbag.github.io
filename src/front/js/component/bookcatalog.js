import React, { useState } from 'react';
import "../../styles/bookcatalog.css";
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from "./trending-catalog-cards.js";
import CardGroup from "./bookcatalogcargroup.js";
import axios from "axios";

export const BookCatalog = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = () => {
    if (search.trim() !== "") {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDE-JV38ESCgNT7Prio8JsZ1S6tGK40qWo`)
        .then(res => setData(res.data.items))
        .catch(err => console.log(err));
    }
  };

  const handleSearchClick = () => {
    searchBook();
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      searchBook();
    }
  };

  return (
    <div className="book-catalog-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>"A room without books is like a body without a soul" - Marcus Tullius Cicero.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1683535508596-9216de2ad64b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>We're here to help you discover new books and stay up to date with what is trending amongst readers!</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="search-wrapper">
        <h2 className="heading">Discover Your Next Book</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter Book Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="card-container">
        <CardGroup book={bookData} />
      </div>
      <div className="trending">
        <h2>Top 3 Books in the U.S Today</h2>
        <Card />
      </div>
    </div>
  );
};
