import express from "express";
import cors from "cors";
import { movieRoutes } from "./routes/routes.js";
const server = express();

const corsOptions = {
  origin: true,
  credentials: true,
};

server.use(express.json());
server.use(cors());
server.use("/api/", movieRoutes);

export default server;

//testing ref
// server.get("/users", (req, res) => {
//   res.status(200).send({ name: "eric" });
// });
