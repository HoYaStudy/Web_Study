import React from "react";
import SeasonPresenter from "./SeasonPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id, num },
      },
      history: { push },
    } = this.props;
    const parseId = Number(id);
    const parseNum = Number(num);
    if (isNaN(parseId) || isNaN(parseNum)) {
      return push("/");
    }

    let result = null;
    try {
      ({ data: result } = await tvApi.season(parseId, parseNum));
    } catch {
      this.setState({ error: "Can't find season" });
    } finally {
      this.setState({ result, loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <SeasonPresenter result={result} loading={loading} error={error} />;
  }
}
