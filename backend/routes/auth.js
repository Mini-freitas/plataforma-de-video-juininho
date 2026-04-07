import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login realizado" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Usuário criado" });
});

export default router;