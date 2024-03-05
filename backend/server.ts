import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import fs from "fs";
import jwt from "jsonwebtoken";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

let users: { email: string; password: string }[] = [];

app.post("/register", (req: Request, res: Response) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please fill up the fields.");
  }
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  const newUser = { email, password: hashPassword };
  users.push(newUser);
  fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));

  return res.status(201).json({
    isSuccess: true,
    email,
  });
});

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Please fill up the fields.");
  }
  const isUser = users.find((user) => user.email === email);
  if (!isUser) {
    return res.status(401).json("Unauthorized");
  }
  const isPassword = bcrypt.compareSync(password, isUser.password);
  if (!isPassword) {
    return res.status(401).json("incorrect password");
  }
  const token = jwt.sign({ email }, "693786175881452194949079714084", {
    expiresIn: "1h",
  });

  return res.status(200).json({
    isSuccess: true,
    userEmail: isUser.email,
    token,
  });
});

interface Menu {
  name: string;
  price: number;
}

const menus: Menu[] = [];

app.post("/menu", (req: Request, res: Response) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json("name and price required.");
  }
  menus.push({ name, price });
  return res.status(200).json({ menus });
});

app.listen(5000, () => {
  console.log("server is listening on 5000");
});
