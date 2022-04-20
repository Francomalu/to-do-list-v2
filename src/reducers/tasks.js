import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_COMPLETED,
  GET_TASK,
} from "../actions/tasks";

export const initialState = {
  tasks: [],
  currentTask: {},
  tasksFiltered: [],
  filtered: false,
  filterChecked: false,
};

export default function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        tasksFiltered: [action.payload, ...state.tasks],
      };
    }
    case GET_TASK: {
      const findTask = state.tasks.find((task) => task.id == action.payload.id);
      return {
        ...state,
        currentTask: findTask,
      };
    }
    case DELETE_TASK: {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: newTasks,
        tasksFiltered: newTasks.filter(
          (task) => task.done == state.filterChecked
        ),
      };
    }
    case DONE_TASK: {
      console.log(state.filterChecked);
      const newArr = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        } else return task;
      });
      return {
        ...state,
        tasks: newArr,
        tasksFiltered: newArr.filter(
          (task) => task.done == state.filterChecked
        ),
      };
    }
    case GET_COMPLETED: {
      const taskCompleted = state.tasks.filter(
        (task) => task.done == action.payload
      );
      return {
        ...state,
        tasksFiltered: taskCompleted,
        filtered: true,
        filterChecked: action.payload,
      };
    }
    default:
      return state;
  }
}
