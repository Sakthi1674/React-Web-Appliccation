import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="C:\Learning\Project\app\src\Images\video1.mp4"
    />
  );
};