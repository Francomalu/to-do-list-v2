import {
  Button,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  propNames,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import shortid from "shortid";

function AddTask(props) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({});
  function onSubmit(data) {
    props.addTask({ ...data, id: shortid.generate(), done: false });
    reset();
  }
  return (
    <form
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <FormLabel htmlFor="name">Nombre de la tarea</FormLabel>
        <Input
          {...register("name", { required: true, maxLength: 50 })}
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
          {...register("description", { required: true, maxLength: 300 })}
          borderRadius="0.375rem"
          border="2px solid"
          borderColor="yellow.700"
          size="sm"
          backgroundColor="gray.200"
          _focus={{ outline: "none", outlineOffset: "0px" }}
          _hover={{ borderColor: "yellow.700" }}
        />
      </FormControl>
      <Button
        type="submit"
        background="yellow.700"
        variant="solid"
        mt="4"
        maxWidth="30%"
        border="2px solid"
        borderColor="yellow.700"
        _hover={{ background: "gray.200" }}
      >
        Agregar
      </Button>
    </form>
  );
}

export default AddTask;
