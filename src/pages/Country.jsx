import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { axios } from "../api";
import Loading from "../components/Loading";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Country() {
  const { name } = useParams();
  let { data, isLoading, isFetching } = useQuery(
    ["country", name],
    () => {
      return axios({
        url: `name/${name}`,
      });
    },
    {
      initialData: [],
    }
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/" className="inline-block py-16">
        <button className="py-3 px-12 shadow bg-white rounded-lg flex items-center gap-4 dark:bg-Dark_Blue">
          <HiArrowNarrowLeft size={24} />
          Back
        </button>
      </Link>
      <div>
        {data?.map(
          ({
            name,
            capital,
            flags,
            population,
            region,
            subregion,
            topLevelDomain,
            currencies,
            languages,
            borders = [],
          }) => {
            return (
              <div key={name?.common} className="block sm:grid grid-cols-2 mb-16">
                <img className="h-full object-cover" src={flags?.svg} alt="svg" />
                <div className="content pt-16 pl-16">
                  <h1 className="text-4xl font-bold mb-7">{name?.common}</h1>
                  <section className="block sm:flex justify-between w-full">
                    <section className="details-block-one">
                      <p className="my-4">
                        <span className="font-bold">Native Name:</span>{" "}
                        {name?.official}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Population:</span>{" "}
                        {population.toLocaleString()}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Region:</span> {region}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Sub Region:</span>{" "}
                        {subregion}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Capital:</span> {capital}
                      </p>
                    </section>
                    <section className="details-block-two">
                      <p className="my-4">
                        <span className="font-bold">Top Level Domain:</span>{" "}
                        {topLevelDomain}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Currencies:</span>{" "}
                        {Object.keys(currencies).map(
                          (currency) => currencies[currency]?.name
                        )}
                      </p>
                      <p className="my-4">
                        <span className="font-bold">Languages:</span>{" "}
                        {Object.keys(languages)
                          .map((language) => languages?.[language])
                          .join(", ")}
                      </p>
                    </section>
                  </section>
                  <div>
                    <span className="font-bold mb-4 inline-block">Border:</span>{" "}
                    {borders?.length > 0 ? (
                      <div className="flex gap-8">
                        {borders.map((border) => (
                          <p
                            className="bg-white dark:bg-Dark_Blue px-4 py-2 shadow cursor-pointer"
                            key={border}
                          >
                            {border}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p>No borders</p>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Country;
