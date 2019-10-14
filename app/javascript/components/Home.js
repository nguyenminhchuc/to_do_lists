import React from "react"
import PropTypes from "prop-types"
import Header from './Header';
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        {this.props.name}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string
};
export default Home
