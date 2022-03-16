import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Content, Header } from "./styles";
import { Button } from "../../components/Button";
import Item from "../../components/Item";

import { api } from "../../services/api";

import * as endpoints from "../../utils/endpoints";
import * as routes from "../../utils/routes";
import { Loading } from "../../components/Loading";

function Company() {
  const { id } = useParams();
  const history = useHistory();
  const [company, setCompany] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCompany = useCallback(async () => {
    try {
      const response = await api.get(`${endpoints.company}/${id}`);
      setCompany(response.data);
    } catch {
      alert("This company does not exist, please try again.");
      history.push(routes.home);
    }
  }, [id]);

  const getNumbers = useCallback(async () => {
    try {
      const response = await api.get(`${endpoints.number}?company_id=${id}`);
      setNumbers(response.data);
    } catch {
      alert("This company does not exist, please try again.");
      history.push(routes.home);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getCompany();
  }, [getCompany]);

  useEffect(() => {
    if (company) {
      getNumbers();
    }
  }, [company, getNumbers]);

  const handleClick = () => {
    history.goBack();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Content>
      {company && (
        <>
          <Header>
            <h1>{company.name}</h1>
            <Button onClick={handleClick}>Go back</Button>
          </Header>
          {!isLoading && !numbers.length && (
            <h2>There are no registered numbers.</h2>
          )}
          {Boolean(numbers.length) && (
            <ul>
              {numbers.map((number) => (
                <Item
                  key={number.id}
                  name={number.id}
                  complement={number.type}
                  type="type"
                  link={`${routes.number}/${number.id}`}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </Content>
  );
}

export default Company;
