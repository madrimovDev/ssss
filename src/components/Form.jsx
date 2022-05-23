import { AddOutlined } from "@mui/icons-material";
import { Alert, Button, Paper, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [isWarning, setIsWarning] = useState(false);

  const { addTodo } = useTodo();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim()) return setIsWarning(true);

    addTodo(title);

    setTitle("");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsWarning(false);
    }, 1500);
  }, [isWarning]);

  return (
    <>
      {isWarning && <Alert severity="warning">Ma`lumot Kiriting!!!</Alert>}
      <Paper
        variant="outlined"
        component={"form"}
        onSubmit={submitHandler}
        sx={{
          p: 1,
          display: "flex",
          alignItems: "stretch",
          gap: 1,
        }}
      >
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          <AddOutlined />
        </Button>
      </Paper>
    </>
  );
};
