import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

function Task(props) {
  const { task, handleTask } = props;
  return (
    <Stack
      direction="row"
      maxW="100%"
      backgroundColor="gray.200"
      padding="2"
      border="2px solid"
      borderRadius="10px"
      borderColor="yellow.700"
      justifyContent="space-between"
    >
      <Stack w="80%">
        <Text>Nombre: {task.name}</Text>
        <Text>Descripción: {task.description}</Text>
        <Text>Completada: {task.done ? "Completada" : "No completada"}</Text>
      </Stack>
      <Stack direction="column" justifyContent="space-between">
        <Button
          onClick={() => handleTask(task, "UPDATE_TASK")}
          background="yellow.700"
          variant="solid"
          maxWidth="100%"
          border="2px solid"
          borderColor="yellow.700"
          _hover={{ background: "gray.200" }}
        >
          Editar
        </Button>
        <Button
          onClick={() => handleTask(task, "DELETE_TASK")}
          background="yellow.700"
          variant="solid"
          maxWidth="100%"
          border="2px solid"
          borderColor="yellow.700"
          _hover={{ background: "gray.200" }}
        >
          Eliminar
        </Button>
        <Button
          onClick={() => handleTask(task, "DONE_TASK")}
          background="yellow.700"
          variant="solid"
          maxWidth="100%"
          border="2px solid"
          borderColor="yellow.700"
          _hover={{ background: "gray.200" }}
        >
          Completa
        </Button>
      </Stack>
    </Stack>
  );
}

export default Task;
