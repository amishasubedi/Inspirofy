import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Amisha",
//     text: "manche chinni agi badhni",
//   },

//   {
//     id: "q2",
//     author: "ams",
//     text: "react sikdai",
//   },
// ];

const AllQuotes = () => {
  // extract data
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true); // make sure status is pending from the start

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
    return <p className="centered focused">{error}</p>;
  }

  // not loading, no error but have no quotes
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  // no error, not loading, and have quotes
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
