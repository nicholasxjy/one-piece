import React from 'react';
import getRandomNumber from 'rnum'
import random from 'random-number'

export interface Info {
  name: string;
  avatar: string;
  bio: string;
}

export interface CardProps {
  info: Info;
}

function Card({ info }: CardProps) {
  return (
    <div className='card'>
      <img className='avatar' src={info.avatar} alt={info.name} />
      <div className='content'>
        <h2 className='name'>{info.name} {getRandomNumber()}{random(5)}</h2>
        <div className='bio'>{info.bio}</div>
      </div>
    </div>
  );
}

export default Card;
