// Dependencies
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// Components
import Header from "../comps/Header";
import CoinTable from "../comps/CoinTable";
import CatTable from "../comps/CatTable";
import CoinCard from "../comps/CoinCard";
// Styles
import "./tailwind.output.css";
import Footer from "../comps/Footer";

export default function App() {
  const myStyle = {
    backgroundImage:
      "url(https://st4.depositphotos.com/1000419/23474/v/380/depositphotos_234742180-stock-illustration-bitcoin-cryptocurrency-blockchain-technology-seamless.jpg?forcejpeg=true)",
    //backgroundPosition: 'url(dsdsd)',
    //backgroundSize: 'cover',
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed"
  };

  {
    /*
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  */
  }

  return (
    <div
      className=" min-h-screen bg-black p-4 text-gray-300 font-mono"
      style={myStyle}
    >
      <Header />
      <div className="bg-black mb-4 text-center text-2xl font-bold text-yellow-500">
        CRYPTO DASHBOARD
      </div>
      <CoinCard />
      <div className="border border-yellow-400 mb-4 mt-4 text-center text-yellow-400 font-bold bg-black opacity-75">
        Daily Market Data
      </div>
      <CoinTable />
      <div className="border border-yellow-400 mb-4 mt-4 text-center text-yellow-400 font-bold bg-black opacity-75">
        Categories Market Data
      </div>

      <CatTable />
      <Footer />
    </div>
  );
}
