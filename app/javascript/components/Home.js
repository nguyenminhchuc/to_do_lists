import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.name}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string
};
export default Home
