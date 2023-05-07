// Styling that shows up on loading
import React from 'react';

export const StartingPage = () => {
  return (
    <div className="startingpage-container">
      <h2>This is a tarot-card database</h2>
      <h3>API-endpoints used for this site:</h3>
      <h4>
        https://project-express-api-ebkcnf5ljq-lz.a.run.app/all-cards
        <br />
        https://project-express-api-ebkcnf5ljq-lz.a.run.app/major-arcana
        <br />
        https://project-express-api-ebkcnf5ljq-lz.a.run.app/minor-arcana
        <br />
        https://project-express-api-ebkcnf5ljq-lz.a.run.app/suit/[suit]/[number]
      </h4>
    </div>
  )
}