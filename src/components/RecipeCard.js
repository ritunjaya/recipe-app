import React from 'react'
import ImageCard from './ImageCard'
export const RecipeCard = (props) => {
  return (
    <div className='flexItem'>
      <div className='img-wrapper'>
      <ImageCard src={props.image} alt={props.label}/>
      </div>
    <p>{props.label}</p>
    </div>
  )
}
