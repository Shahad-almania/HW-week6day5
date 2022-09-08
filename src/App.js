
import { useEffect, useState } from 'react';
import './App.css';
import BitcoinForm from './component/BitcoinForm';
import Header from './component/Header';
import View from './component/View';

function App() {

  const [name, setName] = useState('global');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('0');
  const [rank, setrank] = useState('0');
  const [supply, setsupply] = useState('0');
  const [symbol, setsymbol] = useState('');
  const [loading, setLoading]=useState(true);
  //const [nameCurrency, setNameCurrency]=useState([])


  /*
  "id":"bitcoin"
  "name":"Bitcoin",
  "priceUsd":"19132.0134942868285404",
   "rank":"1",
   "symbol""BTC"
   "supply":19144500.0000000000000000",
   
  */
  useEffect(()=> {
  const fetchCovidData= async()=>{
   const request = await fetch('https://api.coincap.io/v2/assets');
   const data = await request.json();
   setName(data.name);
   setPrice(data.priceUsd);
   setrank(data.rank);
   setsupply(data.supply);
   setsymbol(data.symbol);
   setLoading(false)

   console.log('data', data);


  };
  fetchCovidData();
  },[]);

  useEffect(()=> {
    const fetchCovidData= async()=>{
     const request = await fetch('https://cryptoflash-icons-api.herokuapp.com/svg/color/btc');
     const data = await request.json();
     //setImg(data.)
     console.log('data', data);

    };
    fetchCovidData();
    },[]);


  return (
    <div className='container text-center m-5 p-5'>
     {loading ?( <Sppinner /> )
     : (
      <>
    <View name={name} />
    <Header img={img} price={price} />
    <BitcoinForm price={price} rank={rank} supply={supply} symbol={symbol}  />
    </>
    )
    }
    </div>
  );
}

export default App;
