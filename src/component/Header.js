import React from 'react'

const Header = ({img , price}) => {
  return (
    <>
    

    <img src= {img} alt='Currency prices' ></img>
    <h5>Price: {price}</h5>
    </>
  )
}

export default Header