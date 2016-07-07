import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Learning React-Redux-Webpack</h1>
        <p>Sample test blah blah blah</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

//export default connect(mapStateToProps)(HomePage);
export default HomePage;
