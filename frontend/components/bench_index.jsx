import React from 'react';

class BenchIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBenches();
  }

  render() {
    return (<ul><li>benches</li></ul>);
  }


}

export default BenchIndex;
