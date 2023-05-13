import React from 'react';
import './App.css';
import Row from './Row';
import requests from './RequestS';
import Banner from './Banner';
import Nav from './Nav';


function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      
      <Row title="MC: ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow/>
      <Row title="MC: Trending" fetchUrl={requests.fetchTrending}  />
      <Row title="MC: Top Rated" fetchUrl={requests.fetchTopRated}  />
      <Row title="MC: Action movies" fetchUrl={requests.fetchActionMovies}  />
      <Row title="MC: Horror movies" fetchUrl={requests.fetchHorrorMovies}  />
      <Row title="MC: Romance movies" fetchUrl={requests.fetchRomanceMovies}  />
      <Row title="MC: Documantaries" fetchUrl={requests.fetchDocumentaries}  />



    </div>
  );
}

export default App;
