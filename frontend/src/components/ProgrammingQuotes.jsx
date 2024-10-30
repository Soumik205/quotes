import { useState } from "react";
import { ProgrammingQuote } from "../api/api";

export default function ProgrammingQuotes() {
  const [programmingQuote, setProgrammingQuote] = useState(null);
  const handleProgramming = async () => {
    ProgrammingQuote()
      .then((res) => {
        setProgrammingQuote(res.data.quote);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      {!!programmingQuote && (
        <div className="quote-card">{programmingQuote}</div>
      )}
      <button onClick={handleProgramming}>Programming Quotes</button>
    </>
  );
}
