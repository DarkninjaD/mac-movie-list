import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { backEndAddress } from "../../utils/env";
import { useAppContext } from "../../context/appContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteMovieAPI from "../../api/deleteMovieAPI";
import searchMovieAPI from "../../api/searchMovieAPI";

const DisplayMovieData = () => {
  const { movieList, setMovieList } = useAppContext();

  useEffect(() => {
    fetch(`${backEndAddress}/api/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data);
      });
  }, []);

  const handleRemove = async (e) => {
    e.preventDefault();
    await deleteMovieAPI(e.currentTarget.name);
    setMovieList(await searchMovieAPI());
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map((movie) => (
            <StyledTableRow key={movie.id}>
              <StyledTableCell data-testid="table-entry">
                {movie.title}
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  onClick={(e) => handleRemove(e)}
                  name={movie.title}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default DisplayMovieData;
