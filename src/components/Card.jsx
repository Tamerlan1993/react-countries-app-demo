import React from "react";

function Card({ country }) {
  return (
    <div className="country card w-full overflow-hidden shadow-md rounded-lg cursor-pointer shadow-gray-400 dark:shadow-none dark:bg-Dark_Blue">
      <img
        className="w-full object-cover h-48 overflow-hidden shadow"
        src={country?.flags?.svg}
        alt="flag"
      />
      <div className="info pt-8 pb-12 px-7">
        <h2 className="text-xl leading-5 mb-4 font-bold">
          {country?.name?.common}
        </h2>
        <p className="my-2">
          <span className="font-bold">Population</span>: {country?.population}
        </p>
        <p className="my-2">
          <span className="font-bold">Region</span>: {country?.region}
        </p>
        <p className="my-2">
          <span className="font-bold">Capital</span>:
          {country?.capital?.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
