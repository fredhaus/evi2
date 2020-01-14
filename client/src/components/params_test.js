import React from "react";
import { withRouter, useParams } from "react-router-dom";
import ResultsTab1Pdf from "./ResultsTab1Pdf";

class paramsTest extends React.Component {
  state = {};

  componentWillMount() {
    const { match: { params } } = this.props;
    this.setState({
      id: params.Id
    })
    console.log(params.Id)
  }

  render() {
    return (
    <div>
  <ResultsTab1Pdf user={this.state.id}/>
    </div>
    );
  }
} //meister@test.com

export default withRouter(paramsTest);
