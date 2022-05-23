import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { DeleteSharp } from "@mui/icons-material";
import React from "react";
import { useTodo } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodo();
  if (!todos.length) return <p>Todos not defined</p>;
  return (
    <List
      sx={{
        width: "400px",
      }}
    >
        {
            todos.map((todo, index) => {
                return (
                    <TodoItem key={todo.id} todo={todo}/>
                )
            })
        }
    </List>
  );
};
