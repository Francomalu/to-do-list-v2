import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_COMPLETED,
  GET_TASK,
  UPDATE_TASK,
} from "../actions/tasks";

export const initialState = {
  tasks: [],
  currentTask: {},
  tasksFiltered: [],
  filtered: false,
  filterChecked: false,
};

export default function TaskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        const newTask = state.tasks.map((e) => {
          if (e.id === action.payload.id)
            return {
              ...e,
              name: action.payload.name,
              description: action.payload.description,
            };
          return e;
        });
        return {
          ...state,
          tasks: newTask,
          tasksFiltered: newTask,
        };
      } else {
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
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        tasksFiltered: state.tasks.filter(
          (task) => task.done == state.filterChecked
        ),
      };
    }
    case DONE_TASK: {
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
