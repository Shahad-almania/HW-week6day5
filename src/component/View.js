import React from 'react'

const View = ({name , price}) => {
  return (
    <>
    <h3>Currency prices wibsite</h3>
    <div> 
        <p> View the 10 most famous {name} with {price}</p>
        <br/> <br/> <br/>
    </div>
    </>
  )
}

export default View