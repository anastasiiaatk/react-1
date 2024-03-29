import React from 'react';
import PropTypes from 'prop-types';

import { TasksFilter } from '../tasks-filter/tasks-filter';
import './footer.css';

const Footer = ({ tasksCount, filter, onFilterChange, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  filter: 'all',
  tasksCount: 0,
};

Footer.propTypes = {
  tasksCount: PropTypes.number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export { Footer };