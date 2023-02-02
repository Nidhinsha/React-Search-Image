// import React from "react";
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList'
import './App.css';
import searchImages from './api';
import { useState } from 'react';

function App() {
  const [images,setImage] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImage(result)
    console.log(result);
  }
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
