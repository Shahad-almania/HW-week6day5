import React from 'react'

const BitcoinForm = ({price ,rank ,supply, symbol}) => {
  return (
  <>
    <div className='input-group m-4 mx-auto'>
       <input type="text" className="form-control" placeholder='Search the bitcoin'/>
       <button className="btn btn-primary" type="button">Search</button> <br/>
    </div>
  
      <p>Price: {price}</p>
      <p>Currency details: {rank}, {supply} , {symbol}</p>
    </>
    
  );
};

export default BitcoinForm;
