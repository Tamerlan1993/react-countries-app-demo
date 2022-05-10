import React from "react";
import { useQueryParams } from "../hooks/useQueryParams";

function Input() {
  const [params, setParams] = useQueryParams();

  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="border outline-none"
        value={params?.filter ?? ""}
        onChange={(e) => setParams({ filter: e.target.value })}
      />
      <select
        className="border outline-none"
        value={params?.region}
        onChange={(e) => {
          console.log(e.target.value);
          setParams({ region: e.target.value });
        }}
      >
        <option value=""></option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Input;
