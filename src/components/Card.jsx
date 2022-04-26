import React from "react";
import "./Card.css";

function Card({ pokemon, loading, infoPokemon }) {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, i) => {
          return (
            <>
              <div
                className="card"
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2 className="card-number">{item.id}</h2>
                <img src={item.sprites.front_default} alt="photo" />
                <h2 className="card-name">{item.species.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
