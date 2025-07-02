import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these mind blowing thrillers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/KIITF.jpg'
              text='A young couple'
              label='Thriller'
              path='/services'
            />
            <CardItem
              src='images/TheTeacher.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Thriller'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/TKWK.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Verity.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/THousmaid.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;