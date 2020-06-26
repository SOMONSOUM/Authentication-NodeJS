import { RequestHandler } from 'express';
import hash from 'password-hash';
import { TokenGeneration } from '../lib/TokenGenerator';

const users: any = [];

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const hashPassword = await hash.generate(password);
    const user = {
      email: email,
      password: hashPassword,
      access_token: TokenGeneration() + '@' + 'rsk',
    };
    await users.push(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await users.find((user: any) => user.email == email);

  if (user == undefined) return res.status(404).json('User not found');
  try {
    if (await hash.verify(password, user.password)) {
      return res.status(200).json(user.access_token);
    }
  } catch (error) {
    return res.json(error)
  }
};
