import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
