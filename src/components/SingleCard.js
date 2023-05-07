/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Single page not working - will work on it at a later date.

export const SingleCard = () => {
  const [card, setCard] = useState([]);
  const { suit, number } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/suit/${suit}/${number}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        console.log(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/suit/${suit}/${number}`)
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])

  const onBackButtonClick = () => {
    navigate(-1);
  }

  /*
  return (
    <div className="list-container">
      {card.map((item) => (
        <div className="list-item" key={item.}>
          <p><span>Name:</span> {item.name}</p>
          <p><span>Arcana:</span> {item.arcana}</p>
          <p><span>Suit:</span> {item.suit}</p>
          <p><span>Number:</span> {item.number}</p>
          <button type="button" onClick={onBackButtonClick}>Go back</button>
        </div>
      ))}
    </div>
  ) */

  return (
    <div className="list-container">
      <p>{card.name}</p>
      <p>{card.arcana}</p>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
    </div>
  )
}