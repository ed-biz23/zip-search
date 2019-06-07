import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const ZipCodeView = props => {
  const {
    City,
    State,
    Country,
    Zipcode,
    Lat,
    Long,
    TotalWages,
    EstimatedPopulation,
    TaxReturnsFiled
  } = props.result;
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card body>
        <CardTitle>
          <h5>Zipcode: {Zipcode}</h5>
        </CardTitle>
        <CardText>
          <strong>City</strong>: {City} <strong>State</strong>: {State}{" "}
          <strong>Country</strong>: {Country}
        </CardText>
        <CardText>
          <strong>Lat</strong>: {Lat} <strong>Long</strong>: {Long}
        </CardText>
        <CardText>
          <strong>Estimated Population</strong>: {EstimatedPopulation}
        </CardText>
        <CardText>
          <strong>Total Wages</strong>: ${TotalWages}{" "}
          <strong>Tax Returns Filed</strong>: {TaxReturnsFiled}
        </CardText>
      </Card>
      <br />
    </Col>
  );
};

export default ZipCodeView;
