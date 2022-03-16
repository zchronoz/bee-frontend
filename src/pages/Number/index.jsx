import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Content, Header } from "./styles";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import * as endpoints from "../../utils/endpoints";
import * as routes from "../../utils/routes";
import { Loading } from "../../components/Loading";

function Number() {
  const { id } = useParams();
  const history = useHistory();
  const [number, setNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getNumber = useCallback(async () => {
    try {
      const response = await api.get(`${endpoints.number}/${id}`);
      setNumber(response.data);
    } catch {
      alert("This number does not exist, please try again.");
      history.push(routes.home);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getNumber();
  }, [getNumber]);

  const handleClick = () => {
    history.goBack();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Content>
      {number && (
        <>
          <Header>
            <h1>Number</h1>
            <Button onClick={handleClick}>Go back</Button>
          </Header>
          <span>
            <a href={`tel:${number.id}`}>{number.id}</a> ({number.type})
          </span>
        </>
      )}
    </Content>
  );
}

export default Number;
