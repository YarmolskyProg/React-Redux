import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';

let categories = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]

let instance = axios.create({
  baseURL: 'https://634fc55b78563c1d82af3e93.mockapi.io/gallery'
})

function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}

function App() {
  const [gallery, setgallery] = useState([]);
  const [search, setsearch] = useState('');
  const [loading, setloading] = useState(true);
  const [active, setactive] = useState(0);
  useEffect(() => {
    setloading(true)
    instance.get(`/?${active ? `category=${active}` : ''}`).then(res => {
      setgallery(res.data)
    }).finally(() => setloading(false))

  }, [active]);

  function handlerChange(e) {
    setsearch(e.target.value)
  }
  function handlerClick(index) {
    setactive(index)

  }
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {
            categories.map((obj, index) => (
              <li onClick={() => handlerClick(index)} key={index} className={index == active ? 'active' : ''} >{obj.name}</li>
            ))
          }
        </ul>
        <input className="search-input" value={search} onChange={(e) => handlerChange(e)} placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {
          loading ? <h2>Loading...</h2> :
            gallery.filter(res => {
              return res.name.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((obj, index) => (
              <Collection key={index}
                name={obj.name}
                images={obj.photos}
              />
            ))
        }
      </div>
    </div>
  );
}

export default App;
