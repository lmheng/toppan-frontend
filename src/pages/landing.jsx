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
        .catch((error) => {
          setBookList([]);
          setError(error["response"]["data"]["message"]);
        });
    }
  }, [country]);

  const randomCountry = () => {
    apiLibrary("getRandomCountry")
      .getSingle("")
      .then((res) => {
        setCountry(res["country"]["country_code"]);
      });
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
          <div className="container">
            <Accordion accordionList={bookList} id="book-item-" />
          </div>
        ) : (
          <Error errorMsg={error} id="error-message" />
        )}
      </div>
    </>
  );
};