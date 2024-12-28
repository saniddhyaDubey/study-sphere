import express from "express";
const router = express.Router();

router.get("/health-check", (req: any, res: any) => {
  res.send("200 Health check!");
});

router.get("/resource", (req: any, res: any) => {
  res.send("200 Health check!");
});

export default router;
