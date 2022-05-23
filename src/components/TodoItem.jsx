import { DeleteSharp, EditSharp } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

export const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, toggleHandler, findTodo } = useTodo();
  const [checked, setChecked] = useState(todo.completed);

  const changeHandler = (id) => {
    toggleTodo(id);
    setChecked(todo.completed);
  };

  const editHandler = (id) => {
    findTodo(id);
    toggleHandler();
  };

  return (
    <ListItem>
      <ListItemButton>
        <Checkbox checked={checked} onClick={() => changeHandler(todo.id)} />
        <ListItemText>{todo.title}</ListItemText>
        <IconButton
          onClick={() => deleteTodo(todo.id)}
          color="error"
          aria-label="delete"
          size="small"
        >
          <DeleteSharp fontSize="medium" />
        </IconButton>

        <IconButton onClick={() => editHandler(todo.id)} color="primary">
          <EditSharp />
        </IconButton>
        
      </ListItemButton>
    </ListItem>
  );
};
