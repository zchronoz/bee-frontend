import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "../../components/Button";

import * as routes from "../../utils/routes";

import { Content } from "./styles";

function NotFound() {
  const history = useHistory();

  const handleClick = () => {
    history.push(routes.home);
  };

  return (
    <Content>
      <h1>Page not found!</h1>
      <p>
        The page you are looking for was not found, try to go to the desired
        page from the home page.
      </p>
      <Button onClick={handleClick}>Go Home</Button>
    </Content>
  );
}

export default NotFound;
