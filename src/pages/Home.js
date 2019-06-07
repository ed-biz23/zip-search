import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Col,
  Jumbotron,
  Container
} from "reactstrap";

import ZipCodeView from "../components/ZipCodeView";

const jumboStyle = {
  background: "#aa4b6b" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
};

const Home = () => {
  const [results, setResults] = useState([]);
  const [zipCode, setZipCode] = useState();

  useEffect(() => {
    let zipRegex = /\d{5}/g;
    const fetchData = async () => {
      if (zipCode && zipRegex.test(zipCode)) {
        const result = await axios(
          `https://ctp-zip-api.herokuapp.com/zip/${zipCode}`
        );

        setResults(result.data);
      }
    };
    fetchData();
  }, [zipCode]);

  return (
    <div>
      <Jumbotron fluid style={jumboStyle}>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <InputGroup>
              <Input id="Zip" placeholder="Enter Zip Code" />
              <InputGroupAddon addonType="append">
                <Button
                  color="secondary"
                  onClick={() => {
                    setZipCode(document.getElementById("Zip").value);
                  }}
                >
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        {results.map(result => (
          <ZipCodeView key={result.RecordNumber} result={result} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
