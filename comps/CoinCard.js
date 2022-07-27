import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CoinCard() {
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
    <div className="w-full text-xs shadow bg-black flex flex-col">
      <div className="border-b border-yellow-600 font-bold">
        {" "}
        > Cyprtocurrencies Market
      </div>

      <div className="border-b border-yellow-700  p-2 flex flex-row gap-6 justify-between">
        <div className=" w-12 text-gray-400">
          <img src={coins[0].image} alt="{coins[0].id}" />
        </div>
        <div>
          <div className=" font-bold">{coins[0].name.toUpperCase()}</div>
          <div className=" text-gray-500">{coins[0].symbol.toUpperCase()}</div>
        </div>

        <div>
          <div className=" font-bold">
            {coins[0].current_price.toFixed(2)} $
          </div>
          <div className=" text-gray-500">
            {coins[0].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
        <div>
          <div className="">
            Market Cap : {coins[0].market_cap.toLocaleString()} $
          </div>
          <div className="">
            Market Cap Change :{" "}
            {coins[0].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
      </div>

      <div className="border-b border-yellow-700  p-2 flex flex-row gap-6 justify-between">
        <div className=" w-12 text-gray-400">
          <img src={coins[1].image} alt="crypto" />
        </div>
        <div>
          <div className=" font-bold">{coins[1].name.toUpperCase()}</div>
          <div className=" text-gray-500">{coins[1].symbol.toUpperCase()}</div>
        </div>

        <div>
          <div className=" font-bold">
            {coins[1].current_price.toFixed(2)} $
          </div>
          <div className=" text-gray-500">
            {coins[1].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
        <div>
          <div className="">
            Market Cap : {coins[1].market_cap.toLocaleString()} $
          </div>
          <div className="">
            Market Cap Change :{" "}
            {coins[1].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
      </div>

      <div className="border-b border-yellow-700  p-2 flex flex-row gap-6 justify-between">
        <div className=" w-12 text-gray-400">
          <img src={coins[9].image} alt="crypto" />
        </div>
        <div>
          <div className=" font-bold">{coins[9].name.toUpperCase()}</div>
          <div className=" text-gray-500">{coins[9].symbol.toUpperCase()}</div>
        </div>

        <div>
          <div className=" font-bold">
            {coins[9].current_price.toFixed(2)} $
          </div>
          <div className=" text-gray-500">
            {coins[9].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
        <div>
          <div className="">
            Market Cap : {coins[9].market_cap.toLocaleString()} $
          </div>
          <div className="">
            Market Cap Change :{" "}
            {coins[9].market_cap_change_percentage_24h.toFixed(2)} %
          </div>
        </div>
      </div>
    </div>
  );
}
