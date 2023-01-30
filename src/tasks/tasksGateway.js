
const baseUrl = 'https://63d6605594e769375bb00207.mockapi.io/api/v1/tasks';
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    } 
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
  /*.then(tasksList => 
    tasksList.map(({ _id, ...task}) =>({ id: _id, ...task,
    })),
  );*/
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }  
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};