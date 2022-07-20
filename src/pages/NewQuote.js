import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // useHistory hook allows access to the history instance, and redirects user to another page
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes"); //navigate a way to quotes
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
