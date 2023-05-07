/* eslint-disable max-len */
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Loading } from './Loading'

// export const SingleCard = (suit, number) => {
//   const [card, setCard] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { suit } = useParams()

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/suit/${suit}/${number}`)
//       .then((res) => (res.json()))
//       .then((data) => {
//         setCard(data);
//         console.log(`https://project-express-api-ebkcnf5ljq-lz.a.run.app/suit/${suit}/${number}`)
//         setTimeout(() => setLoading(false), 2000)
//           .catch((error) => {
//             console.error(error);
//           })
//       })
//   }, [])

//   if (loading) {
//     return <Loading />
//   }

//   return (
//     <div className="list-container">
//       {card.map((item) => (
//         <div className="list-item">
//           <p><span>Name:</span> {item.name}</p>
//           <p><span>Arcana:</span> {item.arcana}</p>
//           <p><span>Suit:</span> {item.suit}</p>
//           <p><span>Number:</span> {item.number}</p>
//           <p><span>Keywords:</span> {item.keywords.map((singleKeyword) => (<li>{singleKeyword}</li>))}</p>
//         </div>
//       ))}
//     </div>
//   )
// }