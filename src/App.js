import Home from "./pages/Home";
import Number from "./pages/Number";
import Company from "./pages/Company";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./components/Container";
import * as routes from "./utils/routes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path={`${routes.number}/:id`}>
            <Number />
          </Route>
          <Route path={`${routes.company}/:id`}>
            <Company />
          </Route>
          <Route exact path={routes.home}>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
