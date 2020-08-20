import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Image = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 4px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const Collection = ({ id, title, imageUrl }) => (
  <Container>
    <Title>{title}</Title>
    <Link to={`/collection/${id}`}>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require("../Assets/noPoster.png")
        }
      />
    </Link>
  </Container>
);

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Collection;
