import {
  Button,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import shortid from "shortid";

function AddTask({ addTask, task }) {
  const initialForm = {
    name: "",
    description: "",
  };

  const [formValues, setFormValues] = useState(initialForm);
  const { name, description } = formValues;

  useEffect(() => {
    if (task) {
      setFormValues(task);
    }
  }, [task]);
  function handleSubmit(e) {
    e.preventDefault();
    addTask({ ...formValues, id: shortid.generate(), done: false });
  }

  function handleChangeInput(e) {
    const changedValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedValues);
  }

  function handleUpdate() {
    addTask(formValues);
  }

  return (
    <form
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <FormControl>
        <FormLabel htmlFor="name">Nombre de la tarea</FormLabel>
        <Input
          name="name"
          value={name}
          onChange={handleChangeInput}
          type="text"
          border="2px solid"
          borderColor="yellow.700"
          backgroundColor="gray.200"
          _focus={{ outline: "none", outlineOffset: "0px" }}
          _hover={{ borderColor: "yellow.700" }}
        ></Input>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="description">Descripción de la tarea</FormLabel>
        <Textarea
          name="description"
          value={description}
          onChange={handleChangeInput}
          borderRadius="0.375rem"
          border="2px solid"
          borderColor="yellow.700"
          size="sm"
          backgroundColor="gray.200"
          _focus={{ outline: "none", outlineOffset: "0px" }}
          _hover={{ borderColor: "yellow.700" }}
        />
      </FormControl>
      <Stack direction="row" alignItems="center" mt="4">
        <Button
          type="submit"
          background="yellow.700"
          variant="solid"
          maxWidth="30%"
          border="2px solid"
          borderColor="yellow.700"
          _hover={{ background: "gray.200" }}
        >
          Agregar
        </Button>
        <Button
          onClick={handleUpdate}
          background="yellow.700"
          variant="solid"
          maxWidth="100%"
          border="2px solid"
          borderColor="yellow.700"
          _hover={{ background: "gray.200" }}
        >
          Actualizar tarea
        </Button>
      </Stack>
    </form>
  );
}

export default AddTask;
