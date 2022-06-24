import server from "./server.js";
import { buildTables, seedDb } from "./db/dbRefresh.js";
import chalk from "chalk";
const port = "8080";

await Promise.all(
  process.argv.map(async (arg) => {
    if (arg.toLowerCase() === "build") {
      await buildTables();
    }
    if (arg.toLowerCase() === "seed") {
      await seedDb();
    }
  })
);

server.listen(port, () => console.log(chalk.green(`Server is up on ${port}`)));
