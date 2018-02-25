import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Table from 'components/Table/Table.jsx';
import Timer from 'components/Timer/Timer.jsx';

import styles from './Quiz.scss';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        tableSize: 12
    }

  }

  render() {
    return (
      <Table tableSize={this.state.tableSize} />
    );
  }
}

export { Quiz };
export default Quiz;