/** @format */

import { createUser, loginUser } from "../service/auth.service.js";
// ...................................SIGNUP.....................................???
export const Usersignup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await createUser({ username, password });
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// ....................................LOGIN.........................................

export const userLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await loginUser({ username, password });
    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};
