import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
  font-size: 28px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      <FontAwesomeIcon icon={faHourglass} />
    </span>
  </Container>
);
