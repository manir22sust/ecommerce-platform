import { users } from "../models/userModel.js";

export const getUsers = (req, res) => {
  res.json(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  res.json(user);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.json(newUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
};
