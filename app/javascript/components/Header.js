import React from "react"
import PropTypes from "prop-types"
class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row chuc">
          <div className="container header">
            <div className="row">
              <div className="col-sm">
                <i className="fa fa-home"></i>
              </div>
              <div className="col-sm">
                <div className="form-group has-search">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="col-sm">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header
