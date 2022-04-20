import { useEffect, useState } from "react";

export const DropDown = () => {
  const [coins, setCoin] = useState([]);

  const getCoinTracker = async () => {
    const json = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCoin(json);
  };
  useEffect(() => {
    getCoinTracker();
  }, []);

  return(
    <div>
        <h2>DropDown</h2>
        <select >
        <option>Select Coin!</option>
        {coins.slice(0,50).map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}> 
            {coin.name}({coin.symbol}) {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
};
