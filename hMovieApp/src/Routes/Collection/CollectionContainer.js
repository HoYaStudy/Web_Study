import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { movieApi } from "../../api";

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
      ({ data: result } = await movieApi.collection(parseId));
    } catch {
      this.setState({ error: "Can't find collection" });
    } finally {
      this.setState({ result, loading: false });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return (
      <CollectionPresenter result={result} loading={loading} error={error} />
    );
  }
}
