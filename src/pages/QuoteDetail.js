import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Amisha",
    text: "manche chinni agi badhni",
  },

  {
    id: "q2",
    author: "ams",
    text: "react sikdai",
  },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params; // extract quote id from params

  // destructured elements
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, quoteId]);

  // check for loading
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  // check for error
  if (error) {
    <p className="centered">{error}</p>;
  }

  // if loaded quote is empty
  if (!loadedQuotes.text) {
    return <p>No Quote found</p>;
  }

  // identify quote
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // check if quote is undefined
  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
