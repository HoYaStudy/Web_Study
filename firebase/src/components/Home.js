import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TriangleRight } from "@styled-icons/entypo";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const List = styled.li`
  margin-bottom: 8px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #4fc3f7;
  font-size: 2rem;
`;

const TriangleRightIcon = styled(TriangleRight)`
  width: 1rem;
  margin-right: 4px;
`;

const Home = () => {
  return (
    <Container>
      <Title>Firebase Practice</Title>
      <nav>
        <UList>
          <List>
            <Link
              to="/auth"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e57373",
              }}
            >
              <TriangleRightIcon />
              Authentication
            </Link>
          </List>
          <List>
            <Link
              to="/database"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e57373",
              }}
            >
              <TriangleRightIcon />
              Database
            </Link>
          </List>
        </UList>
      </nav>
    </Container>
  );
};

export default Home;
