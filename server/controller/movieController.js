import knex from "../db/db.js";
const request = async (req, res) => {
  const { name } = req.query;
  let data = await getAll();

  if (name !== undefined) {
    data = data.filter((elm) => elm.title.includes(name));
  }
  res.status(200).send(data);
};

const add = (req, res) => {
  const { title } = req.body;
  knex("movies")
    .insert({ title: title })
    .then((data) => {
      res.status(200).send(`${title} been added`);
    });
};

const remove = (req, res) => {
  const { title } = req.body;

  knex("movies")
    .select("*")
    .where({ title: title })
    .del()
    .then(() => {
      res.status(200).json({ message: `${title} has been deleted` });
    });
};

const getAll = () => {
  return knex("movies")
    .select("*")
    .then((data) => data);
};

export { request, add, remove };
