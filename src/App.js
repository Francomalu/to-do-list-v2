import {
  Container,
  Divider,
  Stack,
  Text,
  Switch,
  FormLabel,
} from "@chakra-ui/react";
import { useReducer, useEffect, useState } from "react";
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_COMPLETED,
  GET_INIT,
  UPDATE_TASK,
} from "./actions/tasks";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

import TaskReducer, { initialState } from "./reducers/tasks";

const init = () => {
  return JSON.parse(localStorage.getItem("state")) || initialState;
};

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState, init);
  const [task, setTask] = useState({});

  useEffect(() => {
    // localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  function addTask(task) {
    dispatch({ type: ADD_TASK, payload: task });
  }

  function handleCompleted(e) {
    const checked = e.target.checked;
    dispatch({ type: GET_COMPLETED, payload: checked });
  }

  function handleTask(task, action) {
    switch (action) {
      case "DELETE_TASK":
        dispatch({ type: DELETE_TASK, payload: task.id });
      case "DONE_TASK":
        dispatch({ type: DONE_TASK, payload: task.id });
      case "UPDATE_TASK":
        setTask(task);
      default:
        return;
    }
  }
  return (
    <Container maxWidth="7xl">
      <AddTask addTask={addTask} task={task} />
      <Divider
        orientation="horizontal"
        border="1px solid"
        borderColor="yellow.700"
        opacity="0.3"
      />
      <Stack
        direction="row"
        maxW="100%"
        justifyContent="space-between"
        alignItems="center"
        margin="10px 0px"
      >
        <Text>Tareas</Text>
        <Stack direction="row" alignItems="center">
          <FormLabel htmlFor="isCompleted" m="0">
            Completada:
          </FormLabel>
          <Switch
            id="isCompleted"
            colorScheme="yellow"
            isChecked={state.filterChecked}
            onChange={handleCompleted}
          />
        </Stack>
      </Stack>

      <ListTask
        handleListTask={handleTask}
        tasks={state.tasks}
        tasksFiltered={state.tasksFiltered}
        filtered={state.filtered}
      />
    </Container>
  );
}

export default App;
