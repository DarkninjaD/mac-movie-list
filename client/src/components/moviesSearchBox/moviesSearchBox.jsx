import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { backEndAddress } from "../../utils/env";
import { useAppContext } from "../../context/appContext";
import searchMovieAPI from "../../api/searchMovieAPI";

const MoviesSearchBox = () => {
  const [userSearch, setUserSearch] = useState("");
  const { movieList, setMovieList } = useAppContext();

  const inputHandler = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMovieList(await searchMovieAPI(userSearch));
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movies"
        onChange={(e) => inputHandler(e)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onSubmit={(e) => handleSubmit(e)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default MoviesSearchBox;
