import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";
import Info from "./Info";
import Button from "./Button";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(data);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setData((state) => {
        state = [...state, result.data];
        return state.sort((a, b) => (a.id > b.id ? 1 : -1));
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, []);

  return (
    <div className="container">
      <div className="left-container">
        <Card
          key={data.id}
          pokemon={data}
          loading={loading}
          infoPokemon={(poke) => setPokeDex(poke)}
        />
      </div>

      <div className="right-container">
        <div className="buttons">
          <Button>˄</Button>
          <Button>˅</Button>
        </div>
        <Info data={pokeDex} />
      </div>
    </div>
  );
}

export default Main;
