import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function CountryDetailsPage() {
  const [countryDetails, setCountryDetails] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      )
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.countryId]);

  if (countryDetails === null) {
    return (
      <div>
        <h2 style={{ marginBottom: "40px" }}>Country Details</h2>{" "}
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  const { name, alpha2Code, capital, area, borders } = countryDetails;
  const lowerCase = alpha2Code.toLowerCase();

  return (
    <div>
      <h2 style={{ marginBottom: "40px" }}>Country Details</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${lowerCase}.png`}
        alt={`${name.common} flag`}
      />
      <h1>{name.common}</h1>

      <div className="countryDetails">
        <h5>Capital</h5>
        <h5>{capital}</h5>
      </div>
      <hr />
      <div className="countryDetails">
        <h5>Area</h5>
        <h5>{area} km</h5>
      </div>
      <hr />
      <div className="countryDetails">
        <h5>Borders</h5>
        <div>
            {borders.length === 0 && <h5>It's an island, idiot 😜</h5>}
          {borders.map((eachBorder, i) => {
           
            
            return <li key={i}>{eachBorder}</li>;
          })}
        </div>
      </div>
    </div>
  );
}
