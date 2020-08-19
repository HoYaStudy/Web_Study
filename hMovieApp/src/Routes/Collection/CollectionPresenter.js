import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import { useTitle } from "../../Components/useTitle";

const Container = styled.div`
  padding: 20px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Title = styled.h3`
  position: relative;
  margin-bottom: 20px;
  font-size: 32px;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 70vh;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Overview = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const CollectionPresenter = ({ result, loading, error }) => {
  const titleUpdater = useTitle("Loading | hMovieApp");

  useEffect(() => {
    loading
      ? titleUpdater("Loading | hMovieApp")
      : titleUpdater(`${result.name} | hMovieApp`);
  }, [loading, result, titleUpdater]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} color="#e74c3c"></Message>
  ) : (
    <Container>
      {result.hasOwnProperty("backdrop_path") && result.backdrop_path ? (
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
      ) : (
        <p></p>
      )}
      <Title>{result.name}</Title>
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../Assets/noPoster.png")
          }
        />
        <Data>
          <Overview>{result.overview}</Overview>
          <Subtitle>Collection List</Subtitle>
          {result.parts && result.parts.length > 0 && (
            <Section>
              {result.parts
                .sort((a, b) => a["id"] - b["id"])
                .map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    imageUrl={movie.poster_path}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
            </Section>
          )}
        </Data>
      </Content>
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
};

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CollectionPresenter;
