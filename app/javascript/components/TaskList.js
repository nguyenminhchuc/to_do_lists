import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom";
import Header from './Header';
import axios from 'axios';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get('/tasks.json')
      .then(response => this.setState({ items: response.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  render () {
    const { error, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return items.map(event => (
        <ul key={event.id}>
          <li>
            {event.name}
            {' - '}
            {event.schedule}
          </li>
        </ul>
      ));
    }
  }
}

TaskList.propTypes = {
  name: PropTypes.string
};
export default TaskList
