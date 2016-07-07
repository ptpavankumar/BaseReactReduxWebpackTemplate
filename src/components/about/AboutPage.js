import React from 'react';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Learning React-Redux-Webpack</h1>
        <p>Sample test blah blah blah</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

//export default connect(mapStateToProps)(AboutPage);
export default AboutPage;
