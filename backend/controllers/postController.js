import { posts } from "../models/postModel.js";

export const getPosts = (req, res) => {
  res.json(posts);
};
