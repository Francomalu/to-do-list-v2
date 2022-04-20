import React from "react";
import { Stack } from "@chakra-ui/react";
import Task from "../Task";

function ListTask({ tasks, handleListTask, tasksFiltered, filtered }) {
  function handleTask(task, action) {
    handleListTask(task, action);
  }

  return (
    <Stack maxW="100%" mb="4">
      {filtered
        ? tasksFiltered?.length > 0 &&
          tasksFiltered.map((task) => (
            <Task handleTask={handleTask} key={task.id} task={task} />
          ))
        : tasks?.length > 0 &&
          tasks.map((task) => (
            <Task handleTask={handleTask} key={task.id} task={task} />
          ))}
    </Stack>
  );
}

export default ListTask;
