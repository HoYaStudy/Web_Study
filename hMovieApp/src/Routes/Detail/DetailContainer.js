import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      isMovie: pathname.includes("/movie/"),
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      return push("/");
    }

    let result = null;
    try {
      const { isMovie } = this.state;
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ result, loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
