import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>

        {/* redirect the user to a not found page when they try to go to a page that doesn't exist,
        it is only considered when no other route matches */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
