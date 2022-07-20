import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

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
  const params = useParams();

  // identify quote
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // check if quote is undefined
  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
