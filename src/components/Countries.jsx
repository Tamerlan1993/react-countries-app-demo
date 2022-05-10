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

  let { data, isLoading } = useQuery(
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

  if (isLoading) {
    return <Loading />;
  }

  function navigateToCountry(name) {
    navigate(`/country/${name}`);
  }

  return (
    <div className="flex gap-8 flex-wrap">
      {data.map((country) => {
        return (
          <div
            key={country?.name?.common}
            className="w-80"
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
