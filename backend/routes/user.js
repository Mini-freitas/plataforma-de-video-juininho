import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, nome: "Mateus" }]);
});

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id, nome: "Mateus" });
});

export default router;