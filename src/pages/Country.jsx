import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { axios } from "../api";
import Loading from "../components/Loading";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <Link to="/">
        <button className="border py-3 px-16">Back</button>
      </Link>
      <div>
        {data?.map(
          ({
            name,
            capital,
            flags,
            population,
            region,
            nativeName,
            subregion,
            topLevelDomain,
            currencies,
            languages,
          }) => {
            return (
              <div key={name?.common} className="flex">
                <div className="flag">
                  <img src={flags?.svg} alt="svg" />
                </div>
                <div className="content">
                  <h2 className="p">{name?.common}</h2>
                  <section className="flex details-block">
                    <section className="details-block-one">
                      <p className="p">
                        <span className="details-span">Native Name:</span>{" "}
                        {nativeName}
                      </p>
                      <p className="p">
                        <span className="details-span">Population:</span>{" "}
                        {population.toLocaleString()}
                      </p>
                      <p className="p">
                        <span className="details-span">Region:</span> {region}
                      </p>
                      <p className="p">
                        <span className="details-span">Sub Region:</span>{" "}
                        {subregion}
                      </p>
                      <p className="p">
                        <span className="details-span">Capital:</span> {capital}
                      </p>
                    </section>
                    <section className="details-block-two">
                      <p className="p">
                        <span className="details-span">Top Level Domain:</span>{" "}
                        {topLevelDomain}
                      </p>
                      <p className="p">
                        <span className="details-span">Currencies:</span>{" "}
                        {Object.keys(currencies).map(
                          (currency) => currencies[currency]?.name
                        )}
                      </p>
                      <p className="p">
                        <span className="details-span">Languages:</span>{" "}
                        {Object.keys(languages).map(
                          (language) => languages[language]?.name
                        )}
                      </p>
                    </section>
                  </section>
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
