import React, { useEffect } from 'react';
import TasksList from './TasksList.jsx';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import { sortedListSelector } from '../tasks.selectors';
import PropTypes from 'prop-types';
const TodoList = ({ tasks, getTasksList, createTask, updateTask, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);
  return(
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
      <TasksList tasks={tasks} handleTaskStatusChange={updateTask}
      handleTaskDelete={deleteTask}/>
      </main>
    </>
  );
};


  const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  createTask: tasksActions.createTask,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
};

const mapState = state => {
  return {
    tasks: sortedListSelector(state)
  };
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch) (TodoList);