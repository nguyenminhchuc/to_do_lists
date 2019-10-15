import React from "react"
import PropTypes from "prop-types"
import Header from './Header';
import SideBarRight from './SideBarRight';
import SideBarLeft from './SideBarLeft';
import TaskList from './TaskList'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div className="row">
            <SideBarLeft/>
            <div className="col-sm-8">
              <TaskList/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string
};
export default Home
