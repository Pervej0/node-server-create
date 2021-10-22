const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
// const users = require("./users");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  console.log(newUser);
  res.json(newUser);
});

app.get("/", (req, res) => {
  res.send("Welcome to Node World");
});

const users = [
  {
    id: 0,
    name: "Parvez Khan",
    email: "parvez@gmail.com",
    hobby: "Eating",
  },
  {
    id: 1,
    name: "Md Pervej Hossain",
    email: "mdpervej@gmail.com",
    hobby: "Sleeping",
  },
  {
    id: 2,
    name: "Hossain Pervej",
    email: "hossain@gmail.com",
    hobby: "Walking",
  },
  {
    id: 3,
    name: "Md Pervej",
    email: "mdp@gmail.com",
    hobby: "Traveling",
  },
  {
    id: 4,
    name: "Pervej Md Hossain",
    email: "pervejmd@gmail.com",
    hobby: "Eating",
  },
];

// getting user api data

app.get("/users", (req, res) => {
  // accessing query parameter-
  const queryName = req.query.search;
  console.log(queryName);
  if (queryName) {
    const selectedItem = users.filter((item) =>
      item.name.toLowerCase().includes(queryName)
    );
    res.send(selectedItem);
  } else {
    res.send(users);
  }
});

// getting specific id define value
app.get("/users/:id", (req, res) => {
  const dataId = req.params.id;
  const selectedItem = users.find((item) => item.id == dataId);
  res.send(selectedItem);
});

app.get("/name/country/canada", (req, res) => {
  res.send("Otawa is Canada's capital.");
});

// showing everything on specific port-

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
