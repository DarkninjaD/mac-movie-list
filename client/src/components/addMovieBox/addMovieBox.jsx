import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import addMovieAPI from "../../api/addMovieAPI";
import AddIcon from "@mui/icons-material/Add";
import { useAppContext } from "../../context/appContext";
import searchMovieAPI from "../../api/searchMovieAPI";

const AddMovieBox = () => {
  const [userInput, setUserInput] = useState("");
  const { movieList, setMovieList } = useAppContext();

  const inputHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMovieAPI(userInput);
    setMovieList(await searchMovieAPI());
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a Movie"
        onChange={(e) => inputHandler(e)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="Input"
        onSubmit={(e) => handleSubmit(e)}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default AddMovieBox;
