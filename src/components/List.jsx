import React, { useState, useEffect } from "react";
import axios from 'axios'
import Navbar from './Navbar'

const List = () => {
    const [listData, setListData] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/list"
        )
        .then(res => setListData(res.data))
        .catch(err => console.log(err));
    }, []);
    return (
    <div>
        <Navbar />
      {listData.map(coin => (
        <div key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div>
            <img src={coin.symbol} height="40" alt={coin.name} />
          </div>
        </div>
      ))}
    </div>)
}

export default List