import React from "react";
import "./Info.css";

function Info({ data }) {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            className="info-img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="Pokemon-img"
          />
          <div className="abilities">
            <div className="group">
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="base-stat"></div>
          <h3>Hp:30</h3>
          <h3>attack:52</h3>
          <h3>defense: 43</h3>
          <h3>special-attack: 50</h3>
          <h3>speed</h3>
        </>
      )}
    </>
  );
}

export default Info;
