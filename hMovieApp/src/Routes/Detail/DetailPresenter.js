import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faVideoSlash,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Collection from "../../Components/Collection";
import { useTitle } from "../../Components/useTitle";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 50px;
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

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
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

const Title = styled.h3`
  font-size: 32px;
`;

const IMDB = styled.a`
  margin-left: 5px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Item = styled.span``;

const VoteContainer = styled.div``;

const Divider = styled.span`
  margin: 0 10px;
`;

const OverviewContainer = styled.div`
  display: flex;
  align-items: flex-start;
  opacity: 0.7;
`;

const Overview = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => (props.clamp ? 3 : "none")};
  width: 50%;
  font-size: 12px;
  line-height: 1.5;
  overflow: hidden;
`;

const OverviewButton = styled.div`
  transform: ${(props) => (props.clamp ? "rotateX(0deg)" : "rotateX(180deg)")};
  transition: transform 0.2s ease-in-out;
`;

const Subtitle = styled.div`
  margin: 20px 0px;
  font-size: 28px;
`;

const Video = styled.div`
  display: flex;
  & > iframe {
    margin-right: 20px;
  }
`;

const Season = styled.select`
  width: 250px;
  height: 30px;
  border: none;
  padding: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

const EpisodeContainer = styled.div``;

const Episode = styled.div``;

const Vote = ({ rating }) => {
  let rows = [];
  for (let i = 0; i < 5; ++i) {
    if (i < rating) {
      rows.push(
        <FontAwesomeIcon key={i} icon={fasStar} style={{ color: "gold" }} />
      );
    } else {
      rows.push(
        <FontAwesomeIcon key={i} icon={farStar} style={{ color: "gold" }} />
      );
    }
  }
  return rows;
};

const DetailPresenter = ({ result, loading, error }) => {
  const [clamp, setClamp] = useState(true);
  const titleUpdater = useTitle("Loading | hMovieApp");

  useEffect(() => {
    loading
      ? titleUpdater("Loading | hMovieApp")
      : titleUpdater(
          `${
            result.original_title ? result.original_title : result.original_name
          } | hMovieApp`
        );
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
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../Assets/noPoster.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
            <IMDB
              href={`https://www.imdb.com/title/${
                result.hasOwnProperty("imdb_id")
                  ? result.imdb_id
                  : result.external_ids.imdb_id
              }`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faImdb} style={{ color: "gold" }} />
            </IMDB>
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider></Divider>
            <Item>
              {result.hasOwnProperty("runtime")
                ? result.runtime
                : result.episode_run_time[0]}{" "}
              min
            </Item>
            <Divider></Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider></Divider>
            <VoteContainer title={result.vote_average}>
              <Vote rating={Math.round(result.vote_average / 2)} />
            </VoteContainer>
          </ItemContainer>
          <OverviewContainer
            onClick={() => {
              setClamp(!clamp);
            }}
          >
            <Overview clamp={clamp}>{result.overview}</Overview>
            {result && result.overview.length > 180 ? (
              <OverviewButton clamp={clamp}>
                <FontAwesomeIcon icon={faCaretDown} />
              </OverviewButton>
            ) : (
              <div />
            )}
          </OverviewContainer>
          <ItemContainer>
            <Item>
              {result.production_companies[0]
                ? result.production_companies.map((elem, index) =>
                    index === result.production_companies.length - 1
                      ? elem.name
                      : `${elem.name} / `
                  )
                : "N/A"}
            </Item>
            <Divider></Divider>
            <Item>
              {result.production_countries
                ? result.production_countries[0].iso_3166_1
                : result.origin_country[0]}
            </Item>
            <Divider></Divider>
            <Item>{result.status}</Item>
          </ItemContainer>
          <Subtitle>Video</Subtitle>
          <Video>
            {result.videos.results[0] ? (
              result.videos.results.map((elem) => (
                <iframe
                  title="video"
                  width="350px"
                  src={`https://www.youtube.com/embed/${elem.key}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ))
            ) : (
              <FontAwesomeIcon
                icon={faVideoSlash}
                style={{ fontSize: "72px", color: "silver" }}
              />
            )}
          </Video>
          {result.belongs_to_collection && (
            <>
              <Subtitle>Collection</Subtitle>
              <Collection
                id={result.belongs_to_collection.id}
                title={result.belongs_to_collection.name}
                imageUrl={result.belongs_to_collection.poster_path}
              />
            </>
          )}
          {result.seasons ? (
            <>
              <Subtitle>Season / Episode</Subtitle>
              <Season>
                {result.seasons.map((i) => (
                  <option key={i.name} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </Season>
              <EpisodeContainer>
                {result.seasons.map((i) => (
                  <Episode key={i} value={i.name}>
                    {i.name}
                  </Episode>
                ))}
              </EpisodeContainer>
            </>
          ) : (
            <div />
          )}
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
