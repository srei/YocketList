import React from 'react';
import Queue from './queue';

const QueueList = ({ thumbnailClick, queues }) => {
  // Create Queue component for URLs. Format validation moved to server.
  // Slice at 1 to avoid showing thumbnail for current video playing.
  const validUrls = queues.slice(1).map((queue, index) => <Queue thumbnailClick={thumbnailClick} key={index} link={queue} />);

  return <div id="queueDiv">{validUrls}</div>;
};

export default QueueList;
