import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [allCountrys, setAllCountrys] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
      
        setAllCountrys(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  if (allCountrys === null) {
    return (
      <Button
        variant="info"
        disabled
        style={{ width: "350px", height: "80px" }}
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {" "}
          CARGANDO TODOS LOS PAISES
        </p>
      </Button>
    );
  }
  return (
    <div>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        WikiCountries: Your Guide to the World
      </p>
      {allCountrys.map((eachCountry,i) => {
        const{ name , alpha2Code , alpha3Code} = eachCountry
        const lowerCase = alpha2Code.toLowerCase()
        return (
          <ListGroup key={i}>
            <ListGroup.Item className="countryList">
              <Link to={`/${alpha3Code}`} ><img src={`https://flagpedia.net/data/flags/icon/72x54/${lowerCase}.png`} alt={`${name.common} flag`} width="100px"/></Link>
              {name.common}
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}
