import { useState } from "react";
import { MotivationalQuote } from "../api/api";

export default function MotivationalQuotes() {
  const [motivationalQuote, setMotivationalQuote] = useState(null);
  const handleMotivation = async () => {
    MotivationalQuote() // calls the MotivatinalQuote from api
      .then((res) => {
        setMotivationalQuote(res.data.quote);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {!!motivationalQuote && (
        <div className="quote-card">{motivationalQuote}</div>
      )}
      <button onClick={handleMotivation}>Motivation Quotes</button>
    </>
  );
}
