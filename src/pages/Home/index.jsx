import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";
import * as endpoints from "../../utils/endpoints";
import * as routes from "../../utils/routes";
import { Content } from "./styles";

function Home() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCompanies = async () => {
    try {
      const response = await api.get(endpoints.company);
      setCompanies(response.data);
    } catch {
      alert("There was an error, please wait a while and try again.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCompanies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Content>
      <h1>Companies</h1>
      <ul>
        {!isLoading && !companies.length && (
          <h2>There are no registered companies.</h2>
        )}
        {companies.map((company) => (
          <Item
            key={company.id}
            name={company.name}
            complement={company.vatin}
            link={`${routes.company}/${company.id}`}
            type="vatin"
          />
        ))}
      </ul>
    </Content>
  );
}

export default Home;
