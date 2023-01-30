export const tasksListSelector = state => state.tasks.tasksList;

export const sortedListSelector = state => tasksListSelector(state).slice().sort((a, b) => a.done - b.done);