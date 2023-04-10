import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos () {
  //const { key } = useParams();
  const { keyword } = useParams();
  return ( 
    <div>
      video {keyword ? `🔍${keyword}` : '🔥'}
    </div>
  );

}