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
              text='Keep it in the family by John Mars '
              label='Thriller'
              path='/'
            />
            <CardItem
              src='images/TheTeacher.jpg'
              text='Frieda McFaddeen'
              label='Thriller'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/TKWK.jpg'
              text='The kind worth killing by Peter Swanson'
              label='Thriller'
              path='/services'
            />
            <CardItem
              src='images/Verity.jpg'
              text='Verity by colleen hover'
              label='Thriller'
              path='/products'
            />
            <CardItem
              src='images/THousmaid.jpg'
              text='The housemaid by Freida McFadden'
              label='Thriller'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;