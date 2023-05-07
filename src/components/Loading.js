// Styling that shows up on loading
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../lottie/tarot'

export const Loading = () => {
  return (
    <div className="loader-container">
      <Player
        autoplay
        controls
        loop
        mode="normal"
        src={animationData}
        style={{ height: '500px', width: '500px' }} />
    </div>
  )
}