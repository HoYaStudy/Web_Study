import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  border-radius: 4px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;

  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
  opacity: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  title,
  imageUrl,
  rating,
  year,
  isMovie = false,
  isLink = true,
}) =>
  isLink ? (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : require("../Assets/noPoster.png")
            }
          />
          <Rating>
            <span role="img" aria-label="rating">
              <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            </span>{" "}
            {rating.toPrecision(2)}/10
          </Rating>
        </ImageContainer>
        <Title>
          {title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  ) : (
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../Assets/noPoster.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          </span>{" "}
          {rating.toPrecision(2)}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  );

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
