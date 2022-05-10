import React from "react";

function Card({ country }) {
  return (
    <div className="country card w-full overflow-hidden shadow-lg rounded-lg cursor-pointer shadow-gray-400">
      <img
        className="w-full object-cover h-48 overflow-hidden"
        src={country?.flags?.svg}
        alt="flag"
      />
      <div className="info pt-8 pb-12 px-4">
        <h1 className="name font-bold">{country?.name?.common}</h1>
        <p className="population">{country?.population}</p>
        <p className="region">{country?.region}</p>
        <p className="capital">
          {country?.capital?.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
