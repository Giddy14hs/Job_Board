import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/users.js";
import nodemailer from "nodemailer";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ where: { email } });

    if (!oldUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { name, email, password, confirmPassword, isEmployer } = req.body;

  try {
    const oldUser = await User.findOne({ where: { email } });

    if (oldUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      name,
      email,
      password: encryptedPassword,
      isEmployer: isEmployer || false, // Set default if not provided
    });

    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong during signup" });
  }
};

export { login, signup };

