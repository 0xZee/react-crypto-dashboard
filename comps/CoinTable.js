import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CoinTable() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-2 mb-4 w-full text-xs shadow bg-black flex flex-col">
      <div className="border-b border-yellow-600 font-bold text-yellow-600 ">
        {" "}
        > Cyprtocurrencies Daily Market
      </div>

      {coins.map((coin) => {
        return (
          <div className="border-b border-gray-900 flex w-full hover:bg-gray-900">
            <div className=" w-4 text-gray-400">
              <img src={coin.image} alt="crypto" />
            </div>
            <div className="w-2/4 ml-2 text-gray-400 ">{coin.name}</div>
            <div className="w-2/4 ml-2 text-gray-400 hidden ">{coin.name}</div>
            <div className=" w-1/4">
              <span className="text-gray-600">$ </span>
              {coin.current_price.toFixed(2)}
            </div>
            {coin.price_change_percentage_24h > 0 ? (
              <div className=" w-1/4 text-right text-green-600 font-semibold">
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>
            ) : (
              <div className=" w-1/4 text-right text-red-600 font-semibold">
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
