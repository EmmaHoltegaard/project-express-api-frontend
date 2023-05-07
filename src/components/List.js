/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Loading } from './Loading'

// component that fetches the api with different endpoints. Use map() to generate list.

export const List = ({ endpoint }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/${endpoint}`)
      })
      .finally((setTimeout(() => setLoading(false), 2000)))
      .catch((error) => {
        console.error(error);
      })
  }, [endpoint])

  if (loading) {
    return <Loading />
  }

  // maybe add function to the button, so that item.suit and item.number values are passed onclick

  return (
    <div className="list-container">
      {list.map((item) => (
        <div className="list-item" key={item.name}>
          <p><span>Name:</span> {item.name}</p>
          <p><span>Arcana:</span> {item.arcana}</p>
          <p><span>Suit:</span> {item.suit}</p>
          <p><span>Number:</span> {item.number}</p>
          <p><span>Keywords:</span> {item.keywords.map((singleKeyword) => (<li>{singleKeyword}</li>))}</p>
          <button type="button">
            <Link to={`/suit/${item.suit}/${item.number}`}>
            Read More...
            </Link>
          </button>
        </div>
      ))}
    </div>
  )
}

// name, number, arcana, suit, keywords, "Questions to Ask"