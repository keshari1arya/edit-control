import axios from 'axios';

export async function fetchTasks() {
  try {
    const response = await axios.get('http://localhost:3010/api/tasks');
    const tasks = response.data.map(task => ({
      ...task,
      turnAroundTime: new Date(task.turnAroundTime).toLocaleDateString(),
      goLiveDate: new Date(task.goLiveDate).toLocaleDateString() // Fix the typo here
    }));
    return tasks;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for handling in the component
  }
}

export async function createTask(task){
  return await axios.post('http://localhost:3010/api/tasks',task);
}