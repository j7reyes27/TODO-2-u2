import React from 'react';
import TasksFilter from './TasksFilter';

const Footer = ({ tasksCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
