import { Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>

      <Route path="./quotes/:quotesId">
        <QuoteDetail />
      </Route>

      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
