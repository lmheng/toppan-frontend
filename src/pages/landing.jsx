import { useEffect, useState } from "react";
import { Button, Accordion, Error } from "../components";
import { apiLibrary } from "../services/api.service";

export const Landing = () => {
  const [country, setCountry] = useState("");
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState("Click on the button to load the data");

  useEffect(() => {
    if (!!country) {
      setError("Loading...");
      apiLibrary("GetTop3ReadBook")
        .getSingle(`?country_code=${country}`)
        .then((res) => {
          setBookList(res);
          setError("");
        })
        .catch((err) => {
          setBookList([]);
          setError("No data found");
        });
    }
  }, [country]);

  const randomCountry = () => {
    apiLibrary("getRandomCountry")
      .getSingle("")
      .then((res) => {
        setCountry(res["country"]["country_code"]);
      })
      .catch((err) => setError("No data found"));
  };

  return (
    <>
      <Button
        label={`Get country: ${country}`}
        id="action-btn"
        onClick={randomCountry}
      />
      <div className="wrapper">
        {bookList.length > 0 && !error ? (
          <div className="container" id="container">
            <Accordion accordionList={bookList} id="book-item-" />
          </div>
        ) : (
          <Error errorMsg={error} id="error-message" />
        )}
      </div>
    </>
  );
};
