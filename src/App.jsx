import { Box, Typography } from "@mui/material";
import {  DialogTodo } from "./components/DialogTodo";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          py: 4,
        }}
      >
        Todo List
      </Typography>
      <Form />
      <TodoList />
      <DialogTodo />
    </Box>
  );
}

export default App;
