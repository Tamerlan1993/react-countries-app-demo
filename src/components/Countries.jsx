import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { axios } from "../api";
import { useQueryParams } from "../hooks/useQueryParams";
import Card from "./Card";
import Loading from "./Loading";

function Countries() {
  const navigate = useNavigate();
  const [params] = useQueryParams();

  let { data, isLoading, isFetching } = useQuery(
    "Countries",
    () => {
      return axios({ url: "all" });
    },
    {
      initialData: [],
      keepPreviousData: true,
      select: (countries) =>
        countries
          .filter((c) =>
            c?.region?.toLowerCase()?.includes(params?.region || "")
          )
          .filter((c) => {
            return c?.name?.common
              ?.toLowerCase()
              .includes(params?.filter?.toLowerCase() ?? "");
          }),
    }
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

  function navigateToCountry(name) {
    navigate(`/country/${name}`);
  }

  return (
    <div className="flex flex-wrap justify-between gap-12">
      {data.map((country) => {
        return (
          <div
            className="w-[18rem] mx-auto sm:mx-0"
            key={country?.name?.common}
            onClick={() => navigateToCountry(country?.name?.common)}
          >
            <Card country={country} />
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
