import React from 'react'
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({elm}) => {
  return (<div className='MovieCard' >
    <h2  style={{textAlign:"center",color:"white"}}>
      {elm.title}
    </h2>
    <img src={elm.posterURL} height='350px' width='250px' alt='photo'></img>
    <Rating initialValue={elm.rating} readonly={true}/>
    <br />
    <p style={{fontSize:'16px'}}>{elm.description}</p>
    
    
      
  </div>
    
  )
}

export default MovieCard