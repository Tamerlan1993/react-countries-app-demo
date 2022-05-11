import React from "react";
import { ImSearch } from "react-icons/im";
import { useQueryParams } from "../hooks/useQueryParams";
import Select from "react-select";

const options = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const customSelectStyles = {
  control(provided) {
    return {
      ...provided,
      height: "100%",
      border: 0,
      outline: 0,
      borderRadius: ".75rem",
    };
  },
  container(provided) {
    return {
      ...provided,
      borderRadius: ".75rem",
    };
  },
  indicatorSeparator(provided) {
    return {
      ...provided,
      display: "none",
    };
  },
};

function Input() {
  const [params, setParams] = useQueryParams();

  return (
    <div className="block sm:flex justify-between py-8 ">
      <div className="w-auto flex items-center bg-white pl-8 sm:w-[30rem] rounded-xl shadow-lg overflow-hidden">
        <ImSearch size={18} className="text-Dark_Gray" />
        <input
          type="text"
          placeholder="Search for country..."
          className="p-5 outline-none text-sm font-bold w-full"
          value={params?.filter ?? ""}
          onChange={(e) => setParams({ filter: e.target.value })}
        />
      </div>
      <Select
        placeholder="Filter by region"
        options={options}
        value={options.find((option) => option.value === params?.region)}
        onChange={(context) => {
          setParams({
            region: context.value,
          });
          return context;
        }}
        className="w-[12rem] shadow-lg h-[60px] mt-8 sm:mt-0"
        styles={customSelectStyles}
      />
    </div>
  );
}

export default Input;
