import {
  Container,
  Divider,
  Stack,
  Text,
  Switch,
  FormLabel,
} from "@chakra-ui/react";
import { useReducer } from "react";
import {
  ADD_TASK,
  DELETE_TASK,
  DONE_TASK,
  GET_COMPLETED,
} from "./actions/tasks";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import TaskReducer, { initialState } from "./reducers/tasks";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

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
      default:
        return;
    }
  }
  return (
    <Container maxWidth="7xl">
      <AddTask addTask={addTask} inputsValues={state.inputsValues} />
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
