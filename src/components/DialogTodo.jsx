import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useTodo } from "../context/TodoContext";

export const DialogTodo = () => {
  const { open, toggleHandler, todo, editTodo } = useTodo();
  
  const [title, setTitle] = useState(todo.title);

  console.log(todo, title)

  const edit = (id) => {
    editTodo(id, title);
    toggleHandler();
  };

  return (
    <Dialog
      open={open}
      onClose={toggleHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Edit</DialogTitle>
      <DialogContent>
        <TextField
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          value={title}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleHandler}>Disagree</Button>
        <Button onClick={() => edit(todo.id)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
